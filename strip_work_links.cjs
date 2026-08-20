const fs = require('fs');
let content = fs.readFileSync('src/WorkPage.tsx', 'utf8');

content = content.replace(/<a[^>]*href="[^"]+"[^>]*>\s*(.*?)\s*<\/a>/gs, (match, p1) => {
  if (p1.includes("Book a call") || p1.includes("See the work")) return match;
  return p1;
});

fs.writeFileSync('src/WorkPage.tsx', content);
