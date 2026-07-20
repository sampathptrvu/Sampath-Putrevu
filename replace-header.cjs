const fs = require('fs');

let content = fs.readFileSync('src/Header.tsx', 'utf8');

// Replace specific colors
content = content.replace(/#fffaf2/g, 'var(--warm-white)');
content = content.replace(/bg-\[#050908\]/g, 'bg-ink');
content = content.replace(/border-surface-divider/g, 'border-divider-dark');
content = content.replace(/hover:text-white/g, 'hover:text-warm-white');
content = content.replace(/text-white/g, 'text-warm-white');
content = content.replace(/text-\[#F5EFE6\]/g, 'text-warm-white');
content = content.replace(/text-\[#6A2B2B\]/g, 'text-burgundy');
content = content.replace(/bg-\[#6A2B2B\]/g, 'bg-burgundy');
content = content.replace(/hover:bg-\[#8A3B3B\]/g, 'hover:bg-burgundy-dark');
content = content.replace(/ring-\[#F5EFE6\]/g, 'ring-warm-white');
content = content.replace(/ring-offset-\[#050908\]/g, 'ring-offset-ink');

fs.writeFileSync('src/Header.tsx', content);
