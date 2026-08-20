import fs from 'fs';
import path from 'path';

function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function prerenderPlugin() {
  return {
    name: 'prerender',
    closeBundle() {
      const outDir = path.resolve(__dirname, 'dist');
      const indexPath = path.join(outDir, 'index.html');
      
      if (!fs.existsSync(indexPath)) return;
      
      const template = fs.readFileSync(indexPath, 'utf-8');

      const routes = [
        {
          path: '/work',
          title: 'Past Work | Sampath Putrevu',
          description: 'Selected work across Champ AI, Zenskar, Web3Auth, Accel, Masai School, and YourStory. Narrative, brand, PR, and inbound for AI-native and technical companies.',
          canonical: 'https://sampathputrevu.com/work',
          ogType: 'website',
        }
      ];

      for (const route of routes) {
        let html = template;
        html = html.replace(/<title>.*?<\/title>/, `<title>${escapeHtml(route.title)}</title>`);
        html = html.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeHtml(route.description)}" />`);
        html = html.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/, `<link rel="canonical" href="${escapeHtml(route.canonical)}" />`);
        html = html.replace(/<meta\s+property="og:type"\s+content="[^"]*"\s*\/>/, `<meta property="og:type" content="${escapeHtml(route.ogType)}" />`);
        html = html.replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/, `<meta property="og:title" content="${escapeHtml(route.title)}" />`);
        html = html.replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/, `<meta property="og:description" content="${escapeHtml(route.description)}" />`);
        html = html.replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/, `<meta property="og:url" content="${escapeHtml(route.canonical)}" />`);
        html = html.replace(/<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`);
        html = html.replace(/<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`);

        const routeDir = path.join(outDir, route.path);
        fs.mkdirSync(routeDir, { recursive: true });
        fs.writeFileSync(path.join(routeDir, 'index.html'), html);
      }
      console.log(`Prerendered ${routes.length} routes.`);
    }
  };
}
