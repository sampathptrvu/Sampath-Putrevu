const fs = require('fs');

let content = fs.readFileSync('src/HomePage.tsx', 'utf8');

// Replace panelClass
content = content.replace(/const panelClass = ".*?";/, 'const panelClass = "section-card";');

const sections = [
  'problem',
  'expertise',
  'why-me',
  'beliefs',
  'fit'
];

sections.forEach(id => {
  const startTagStr = '<section id="' + id + '" className="section-standard scroll-mt-[100px]">';
  content = content.replace(startTagStr, '<section id="' + id + '" className="home-section scroll-mt-[100px]">\n          <div className="section-inner">');
});

content = content.replace(/<\/FadePanel>\s*<\/section>/g, '</FadePanel>\n          </div>\n        </section>');

fs.writeFileSync('src/HomePage.tsx', content);
