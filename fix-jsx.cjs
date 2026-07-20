const fs = require('fs');
let content = fs.readFileSync('src/HomePage.tsx', 'utf8');

content = content.replace(
  '<p className="font-bold tracking-[0.03em] uppercase text-[12px] md:text-[13px] opacity-80 whitespace-nowrap text-center md:text-left w-full md:w-auto mb-4 md:mb-0">Trusted by founders and teams backed by:</p>',
  '<p className="credibility-label font-bold tracking-[0.03em] uppercase text-[12px] md:text-[13px] opacity-80">Trusted by founders and teams backed by:</p>'
);

fs.writeFileSync('src/HomePage.tsx', content);
