const fs = require('fs');
let content = fs.readFileSync('src/PublishedPage.tsx', 'utf8');

const replacements = [
  {
    find: `Mapping the journey of Lalitesh Katragadda, the creator of Google Maps India`,
    url: `https://yourstory.com/2019/08/google-map-maker-lalitesh-katragadda-techie-tuesday`
  },
  {
    find: `Dharmesh Shah wanted to be a mechanical engineer, but blogged his way and built CRM company HubSpot`,
    url: `https://yourstory.com/2019/12/hubspot-dharmesh-shah-techie-tuesday`
  },
  {
    find: `How Razorpay's Shashank Kumar built India's first online payment gateway for startups`,
    url: `https://yourstory.com/2019/07/razorpay-shashank-kumar-payment-gateway-startup-techie-tuesday`
  },
  {
    find: `The first 500 days of Swiggy`,
    url: `https://www.seedtoscale.com/podcast/untold-seed-stories-first-500-days-of-swiggy`
  },
  {
    find: `The first 500 days of Freshworks`,
    url: `https://www.seedtoscale.com/podcast/untold-seed-stories-first-500-days-of-freshworks`
  },
  {
    find: `The first 500 days of Urban Company`,
    url: `https://www.seedtoscale.com/podcast/untold-seed-stories-first-500-days-of-urban-company`
  },
  {
    find: `The Scale Playbook, by Dr. Ajay Sethi`,
    url: `https://www.seedtoscale.com/podcast-series/the-scale-playbook`
  },
  {
    find: `A guide to hiring great engineering leaders`,
    url: `https://www.seedtoscale.com/blog/a-guide-to-hiring-great-engineering-leaders`
  },
  {
    find: `Kunal Shah's Delta 4 theory`,
    url: `https://www.seedtoscale.com/podcast/kunal-shahs-delta-4-theory-framework-to-build-wealth-creating-startups`
  },
  {
    find: `Treasure Chess and the 100,000+ Web3Auth wallets built together`,
    url: `https://medium.com/web3auth/treasure-chess-and-the-100-000-web3auth-wallets-we-built-together-d8c5f5904d13`
  },
  {
    find: `How Keplr pioneered social logins for Web3 wallets`,
    url: `https://medium.com/web3auth/how-keplr-pioneered-social-logins-for-web3-wallets-34ed3d59665d`
  },
  {
    find: `How to truly own a self-custodial wallet`,
    url: `https://medium.com/web3auth/how-to-truly-own-a-self-custodial-wallet-c82006509f6e`
  },
  {
    find: `CNBC and Economic Times, Masai School Series A`,
    url: `https://economictimes.indiatimes.com/tech/funding/masai-school-bags-5-million-in-series-a-funding-led-by-omidyar-network-india/articleshow/81673836.cms`
  },
  {
    find: `MoneyControl, Masai School Series B`,
    url: `https://www.moneycontrol.com/news/business/startup/masai-school-raises-15-million-in-series-b-funding-led-by-omidyar-network-india-7598811.html`
  }
];

const linkClass = "font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors";

let added = 0;
let preserved = 0;

for (const rep of replacements) {
  // First, check if it's already a link with the CORRECT URL
  const exactLinkRegex = new RegExp(`<a[^>]*href="${rep.url.replace(/[.*+?^$\{}()|[\]\\]/g, '\\$&')}"[^>]*>\\s*${rep.find.replace(/[.*+?^$\{}()|[\]\\]/g, '\\$&')}\\s*</a>`, 's');
  
  if (exactLinkRegex.test(content)) {
    preserved++;
    continue;
  }
  
  // If it's a link with a DIFFERENT URL, replace the URL
  const anyLinkRegex = new RegExp(`<a[^>]*href="[^"]*"[^>]*>\\s*(${rep.find.replace(/[.*+?^$\{}()|[\]\\]/g, '\\$&')})\\s*</a>`, 's');
  if (anyLinkRegex.test(content)) {
    content = content.replace(anyLinkRegex, `<a\n                      href="${rep.url}"\n                      target="_blank"\n                      rel="noopener noreferrer"\n                      className="${linkClass}"\n                    >\n                      $1\n                    </a>`);
    added++;
    continue;
  }

  // Check if it's a span, if so replace it
  const spanRegex = new RegExp(`<span[^>]*>\\s*(${rep.find.replace(/[.*+?^$\{}()|[\]\\]/g, '\\$&')})\\s*</span>`, 's');
  if (spanRegex.test(content)) {
    content = content.replace(spanRegex, `<a\n                      href="${rep.url}"\n                      target="_blank"\n                      rel="noopener noreferrer"\n                      className="${linkClass}"\n                    >\n                      $1\n                    </a>`);
    added++;
    continue;
  }
  
  console.log("Could not find:", rep.find);
}

fs.writeFileSync('src/PublishedPage.tsx', content);
console.log(`Added: ${added}, Preserved: ${preserved}`);
