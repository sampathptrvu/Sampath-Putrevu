const fs = require('fs');

let content = fs.readFileSync('src/HomePage.tsx', 'utf8');

// Always show Layer 1 and remove Layer 2
content = content.replace(
  'backgroundIsBlurred ? "opacity-0" : "opacity-100"',
  '"opacity-100"'
);

const layer2Regex = /\{\/\*\s*Layer 2: Blurred\s*\*\/\}[\s\S]*?<\/div>\s*\{\/\*\s*Hero Section\s*\*\/\}/;
content = content.replace(layer2Regex, '{/* Hero Section */}');

fs.writeFileSync('src/HomePage.tsx', content);
