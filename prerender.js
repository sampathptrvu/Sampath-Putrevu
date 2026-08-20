import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const META_DATA = {
  '/': {
    title: 'Sampath Putrevu',
    description: 'Marketing that outlasts the campaign. Earned attention and organic growth for companies from seed to public: brand, content, PR, founder-led distribution, social, and inbound demand generation.',
    canonical: 'https://sampathputrevu.com/',
  },
  '/work': {
    title: 'Past work | Sampath Putrevu',
    description: 'Ideas that outgrew the companies that made them. Roughly a decade across technology journalism, venture capital, and venture-backed startups.',
    canonical: 'https://sampathputrevu.com/work',
  },
  '/about': {
    title: 'About | Sampath Putrevu',
    description: 'Ten years learning what makes an idea travel.',
    canonical: 'https://sampathputrevu.com/about',
  },
  '/contact': {
    title: 'Work with me | Sampath Putrevu',
    description: 'Seed to public, in B2B software and venture capital. Narrative architecture and distribution.',
    canonical: 'https://sampathputrevu.com/contact',
  },
  '/how-i-help': {
    title: 'How I help | Sampath Putrevu',
    description: 'Seed to public, in B2B software and venture capital. Narrative architecture and distribution.',
    canonical: 'https://sampathputrevu.com/how-i-help',
  },
  '/published': {
    title: 'Published | Sampath Putrevu',
    description: 'The published record. Long-form resources, founder frameworks, and press coverage from ten years of work.',
    canonical: 'https://sampathputrevu.com/published',
  }
};

const BASE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Sampath Putrevu",
  "url": "https://sampathputrevu.com/",
  "jobTitle": "Fractional VP Marketing",
  "sameAs": ["https://www.linkedin.com/in/sampathputrevu/"]
};

const WORK_ITEMS = [
  { "@type": "ListItem", "position": 1, "name": "Champ AI" },
  { "@type": "ListItem", "position": 2, "name": "Zenskar", "url": "https://www.zenskar.com/" },
  { "@type": "ListItem", "position": 3, "name": "Web3Auth", "url": "https://web3auth.io/" },
  { "@type": "ListItem", "position": 4, "name": "Accel", "url": "https://www.accel.com/" },
  { "@type": "ListItem", "position": 5, "name": "Masai School", "url": "https://www.masaischool.com/" },
  { "@type": "ListItem", "position": 6, "name": "YourStory", "url": "https://yourstory.com/" }
];

const PUBLISHED_ITEMS = [
  { "@type": "ListItem", "position": 1, "name": "Mapping the journey of Lalitesh Katragadda, the creator of Google Maps India" },
  { "@type": "ListItem", "position": 2, "name": "Dharmesh Shah wanted to be a mechanical engineer, but blogged his way and built CRM company HubSpot" },
  { "@type": "ListItem", "position": 3, "name": "How Razorpay's Shashank Kumar built India's first online payment gateway for startups" },
  { "@type": "ListItem", "position": 4, "name": "The first 500 days of Swiggy" },
  { "@type": "ListItem", "position": 5, "name": "The first 500 days of Freshworks" },
  { "@type": "ListItem", "position": 6, "name": "The first 500 days of Urban Company" },
  { "@type": "ListItem", "position": 7, "name": "The Scale Playbook, by Dr. Ajay Sethi" },
  { "@type": "ListItem", "position": 8, "name": "A guide to hiring great engineering leaders" },
  { "@type": "ListItem", "position": 9, "name": "Kunal Shah's Delta 4 theory" },
  { "@type": "ListItem", "position": 10, "name": "Treasure Chess and the 100,000+ Web3Auth wallets built together" },
  { "@type": "ListItem", "position": 11, "name": "How Keplr pioneered social logins for Web3 wallets" },
  { "@type": "ListItem", "position": 12, "name": "How to truly own a self-custodial wallet" },
  { "@type": "ListItem", "position": 13, "name": "Bloomberg and TechCrunch, Web3Auth partner launches" },
  { "@type": "ListItem", "position": 14, "name": "TechCrunch, Zenskar" },
  { "@type": "ListItem", "position": 15, "name": "Business Standard, Champ AI's $8.5M seed and stealth launch" },
  { "@type": "ListItem", "position": 16, "name": "CNBC and Economic Times, Masai School Series A" },
  { "@type": "ListItem", "position": 17, "name": "MoneyControl, Masai School Series B" },
  { "@type": "ListItem", "position": 18, "name": "Mint, VCCircle, and Business World, Masai School's two acquisitions" }
];

async function prerender() {
  const app = express();
  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('*all', (req, res) => res.sendFile(path.join(__dirname, 'dist', 'index.html')));
  const server = app.listen(3005);

  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  const routes = ['/', '/work', '/about', '/published', '/how-i-help', '/contact'];
  
  for (const route of routes) {
    console.log(`Prerendering ${route}`);
    await page.goto(`http://localhost:3005${route}`, { waitUntil: 'networkidle0' });
    
    let html = await page.content();
    
    // Inject structured data
    let jsonLdArr = [Object.assign({}, BASE_JSON_LD)];
    
    if (route === '/about') {
      jsonLdArr.push({
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "mainEntity": {
          "@id": "https://sampathputrevu.com/#person"
        }
      });
      jsonLdArr[0]["@id"] = "https://sampathputrevu.com/#person";
    }
    
    if (route === '/work' || route === '/published') {
      jsonLdArr.push({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": route === '/work' ? "Past Work" : "Published",
        "itemListElement": route === '/work' ? WORK_ITEMS : PUBLISHED_ITEMS
      });
    }
    
    const structuredDataScript = `<script type="application/ld+json">${JSON.stringify(jsonLdArr)}</script>`;
    html = html.replace('</head>', `${structuredDataScript}</head>`);
    
    // Inject meta tags
    const meta = META_DATA[route];
    html = html.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(meta.title)}</title>`);
    html = html.replace(/<meta\s+name=["']description["']\s+content=["'][^"']*["'][^>]*>/i, `<meta name="description" content="${escapeHtml(meta.description)}" />`);
    html = html.replace(/<meta\s+property=["']og:title["']\s+content=["'][^"']*["'][^>]*>/i, `<meta property="og:title" content="${escapeHtml(meta.title)}" />`);
    html = html.replace(/<meta\s+property=["']og:description["']\s+content=["'][^"']*["'][^>]*>/i, `<meta property="og:description" content="${escapeHtml(meta.description)}" />`);
    html = html.replace(/<meta\s+property=["']og:url["']\s+content=["'][^"']*["'][^>]*>/i, `<meta property="og:url" content="${escapeHtml(meta.canonical)}" />`);
    html = html.replace(/<link\s+rel=["']canonical["']\s+href=["'][^"']*["'][^>]*>/i, `<link rel="canonical" href="${escapeHtml(meta.canonical)}" />`);
    html = html.replace(/<meta\s+name=["']twitter:title["']\s+content=["'][^"']*["'][^>]*>/i, `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`);
    html = html.replace(/<meta\s+name=["']twitter:description["']\s+content=["'][^"']*["'][^>]*>/i, `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`);
    
    const routeDir = path.join(__dirname, 'dist', route === '/' ? '' : route);
    if (!fs.existsSync(routeDir)) fs.mkdirSync(routeDir, { recursive: true });
    fs.writeFileSync(path.join(routeDir, 'index.html'), html);
  }
  
  await browser.close();
  server.close();
  console.log('Prerendering completed.');
}
prerender().catch(console.error);
