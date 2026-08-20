const fs = require('fs');
let content = fs.readFileSync('src/PublishedPage.tsx', 'utf8');

const replacements = [
  // ... check which ones are not in the file as 'href="url"'
];
