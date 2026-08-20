const fs = require('fs');

const fixFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/<a href="\/how-i-help#fit"([^>]*)>Best fit<\/a>/g, '<Link to="/best-fit"$1>Best fit</Link>');
  content = content.replace(/<a href="\/how-i-help#fit"([^>]*)>Work with me &rarr;<\/a>/g, '<Link to="/best-fit"$1>Work with me &rarr;</Link>');
  
  // also fix active section logic in Header if any
  content = content.replace(/activeSection === "fit" \? "text-\[var\(--color-text\)\]" : ""/g, 'location.pathname === "/best-fit" ? "text-[var(--color-text)]" : ""');
  fs.writeFileSync(filePath, content);
}

fixFile('src/Header.tsx');
fixFile('src/HomePage.tsx');

let appContent = fs.readFileSync('src/App.tsx', 'utf8');
if (!appContent.includes('BestFitPage')) {
  appContent = appContent.replace("import HowIHelpPage from './HowIHelpPage';", "import HowIHelpPage from './HowIHelpPage';\nimport BestFitPage from './BestFitPage';");
  appContent = appContent.replace('<Route path="/how-i-help" element={<HowIHelpPage />} />', '<Route path="/how-i-help" element={<HowIHelpPage />} />\n        <Route path="/best-fit" element={<BestFitPage />} />');
  fs.writeFileSync('src/App.tsx', appContent);
}

let prerenderContent = fs.readFileSync('prerender.js', 'utf8');
if (!prerenderContent.includes('/best-fit')) {
  prerenderContent = prerenderContent.replace("'/how-i-help']", "'/how-i-help', '/best-fit']");
  
  // Also add meta data for best-fit
  const metaInsert = `  '/best-fit': {
    title: 'Best fit | Sampath Putrevu',
    description: 'Seed to public, in B2B software and venture capital. Narrative architecture and distribution.',
    canonical: 'https://sampathputrevu.com/best-fit',
  },`;
  prerenderContent = prerenderContent.replace("  '/how-i-help': {", metaInsert + "\n  '/how-i-help': {");
  fs.writeFileSync('prerender.js', prerenderContent);
}

console.log("Links and routes fixed.");
