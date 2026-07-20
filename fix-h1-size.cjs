const fs = require('fs');

let content = fs.readFileSync('src/HomePage.tsx', 'utf8');
content = content.replace(
  'text-[clamp(48px,4.8vw,76px)]',
  'text-[clamp(42px,6vw,76px)]'
);
fs.writeFileSync('src/HomePage.tsx', content);
