const fs = require('fs');
let content = fs.readFileSync('src/WorkPage.tsx', 'utf8');

const regex = /<div className="h-\[24px\]"><\/div>\s*<p className="font-sans font-medium text-\[14px\] text-\[var\(--color-text\)\]">\s*Links:[\s\S]*?<\/p>/g;
const matchCount = (content.match(regex) || []).length;
console.log(`Found ${matchCount} matches to remove`);

content = content.replace(regex, '');

fs.writeFileSync('src/WorkPage.tsx', content);
