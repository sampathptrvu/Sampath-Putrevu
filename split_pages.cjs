const fs = require('fs');

const howIHelpContent = fs.readFileSync('src/HowIHelpPage.tsx', 'utf8');

// BestFitPage
const bestFitContent = howIHelpContent
  .replace("export default function HowIHelpPage", "export default function BestFitPage")
  .replace(/<section className="reveal-section site-container mb-\[80px\] lg:mb-\[120px\]">[\s\S]*?<\/section>\s*<section id="fit"/, '<section id="fit"')
  .replace(/title: "How I help — Sampath Putrevu"/g, 'title: "Best fit — Sampath Putrevu"')
  .replace(/ogTitle: "How I help — Sampath Putrevu"/g, 'ogTitle: "Best fit — Sampath Putrevu"')
  .replace(/canonical: "https:\/\/sampathputrevu.com\/how-i-help"/g, 'canonical: "https://sampathputrevu.com/best-fit"')
  .replace(/ogUrl: "https:\/\/sampathputrevu.com\/how-i-help"/g, 'ogUrl: "https://sampathputrevu.com/best-fit"');

fs.writeFileSync('src/BestFitPage.tsx', bestFitContent);

// HowIHelpPage
const newHowIHelpContent = howIHelpContent
  .replace(/<section id="fit"[\s\S]*?<\/section>/, '');

fs.writeFileSync('src/HowIHelpPage.tsx', newHowIHelpContent);
console.log("Pages split.");
