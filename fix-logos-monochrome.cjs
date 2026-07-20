const fs = require('fs');

let content = fs.readFileSync('src/HomePage.tsx', 'utf8');

content = content.replace(
  /mix-blend-multiply opacity-80/g,
  'brightness-0 opacity-[0.85]'
);

fs.writeFileSync('src/HomePage.tsx', content);
