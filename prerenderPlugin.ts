import fs from 'fs';
import path from 'path';

export function prerenderPlugin() {
  return {
    name: 'prerender-plugin',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const indexPath = path.resolve(distDir, 'index.html');
      
      if (!fs.existsSync(indexPath)) return;

      const template = fs.readFileSync(indexPath, 'utf-8');

      // 1. Ensure root index.html has exact homepage metadata
      let homeHtml = template;
      // Index.html already has homepage metadata, but let's make sure canonical is exact
      homeHtml = homeHtml.replace(
        /<link rel="canonical" href="[^"]*" \/>/,
        '<link rel="canonical" href="https://sampathputrevu.com/" />'
      );
      fs.writeFileSync(indexPath, homeHtml, 'utf-8');

      // 2. Build dist/work/index.html with route-specific metadata for /work
      const workDir = path.resolve(distDir, 'work');
      if (!fs.existsSync(workDir)) {
        fs.mkdirSync(workDir, { recursive: true });
      }

      let workHtml = template;

      // Replace Title & Title meta
      workHtml = workHtml.replace(
        /<title>.*<\/title>/,
        '<title>Past Work | Sampath Putrevu</title>'
      );
      workHtml = workHtml.replace(
        /<meta name="title" content="[^"]*" \/>/,
        '<meta name="title" content="Past Work | Sampath Putrevu" />'
      );

      // Replace Description
      const workDesc = "Selected work across Champ AI, Zenskar, Web3Auth, Accel, Masai School, and YourStory. Narrative, brand, PR, and inbound for AI-native and technical companies.";
      workHtml = workHtml.replace(
        /<meta name="description" content="[^"]*" \/>/,
        `<meta name="description" content="${workDesc}" />`
      );

      // Replace Canonical
      workHtml = workHtml.replace(
        /<link rel="canonical" href="[^"]*" \/>/,
        '<link rel="canonical" href="https://sampathputrevu.com/work" />'
      );

      // Replace OG Title, Description, URL
      workHtml = workHtml.replace(
        /<meta property="og:title" content="[^"]*" \/>/,
        '<meta property="og:title" content="Past Work | Sampath Putrevu" />'
      );
      workHtml = workHtml.replace(
        /<meta property="og:description" content="[^"]*" \/>/,
        `<meta property="og:description" content="${workDesc}" />`
      );
      workHtml = workHtml.replace(
        /<meta property="og:url" content="[^"]*" \/>/,
        '<meta property="og:url" content="https://sampathputrevu.com/work" />'
      );

      // Replace Twitter Title, Description
      workHtml = workHtml.replace(
        /<meta name="twitter:title" content="[^"]*" \/>/,
        '<meta name="twitter:title" content="Past Work | Sampath Putrevu" />'
      );
      workHtml = workHtml.replace(
        /<meta name="twitter:description" content="[^"]*" \/>/,
        `<meta name="twitter:description" content="${workDesc}" />`
      );

      fs.writeFileSync(path.resolve(workDir, 'index.html'), workHtml, 'utf-8');
      console.log('Successfully generated prerendered static HTML for /work with route metadata.');
    }
  };
}
