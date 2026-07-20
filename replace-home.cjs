const fs = require('fs');

let content = fs.readFileSync('src/HomePage.tsx', 'utf8');

// Replace `#050908]/[0.62] md:bg-[#050908]/[0.52]` with `rgba(9, 14, 11, 0.48)`? 
// Wait, the instruction says:
// "For blurred content areas, use a uniform deep-forest overlay approximately: background: rgba(9, 14, 11, 0.48);"
// "Do not change the overlay dynamically by section."
// Currently: `bg-[#050908]/[0.62] md:bg-[#050908]/[0.52]` and `bg-[#050908]/[0.50] md:bg-[#050908]/[0.42]`
content = content.replace(/bg-\[#050908\]\/\[0\.\d+\] md:bg-\[#050908\]\/\[0\.\d+\]/g, 'bg-[#090e0b]/[0.48]');

// Replace `#fffaf2]/95` -> `parchment`
content = content.replace(/bg-\[#fffaf2\]\/95/g, 'bg-parchment');

// Replace `#4f1719` with tailwind classes
// Text inside panels
content = content.replace(/text-\[#4f1719\]\/\[0\.78\]/g, 'text-panel-body');
content = content.replace(/text-\[#4f1719\]\/\[0\.60\]/g, 'text-panel-muted');
content = content.replace(/text-\[#4f1719\]/g, 'text-panel-heading');

// Dividers in panels
content = content.replace(/border-\[#4f1719\]\/12/g, 'border-divider-light');

// Primary headings on dark: `text-warm-white`
content = content.replace(/text-\[#fffaf2\]/g, 'text-warm-white');

// Muted on dark? Currently `text-text-on-glass-secondary` or `text-white/90` or `text-text-on-glass-muted`
content = content.replace(/text-text-on-glass-secondary/g, 'text-text-on-dark');
content = content.replace(/text-text-on-glass-muted/g, 'text-muted-on-dark');
content = content.replace(/text-text-on-glass/g, 'text-warm-white');
content = content.replace(/text-white\/90/g, 'text-text-on-dark');
// For `text-white` inside the dark sections
content = content.replace(/text-white/g, 'text-warm-white');

// Primary buttons
// `bg-[#6A2B2B] text-[#fffaf2]` -> `bg-burgundy text-warm-white`
// `hover:bg-[#8A3B3B]` -> `hover:bg-burgundy-dark`
content = content.replace(/bg-\[#6A2B2B\] text-\[#fffaf2\]/g, 'bg-burgundy text-warm-white');
content = content.replace(/hover:bg-\[#8A3B3B\]/g, 'hover:bg-burgundy-dark');

// Secondary buttons on dark backgrounds:
// `bg-white/10 backdrop-blur-sm border border-white/20 text-[#fffaf2] hover:bg-white/15`
// -> `bg-white/10 backdrop-blur-sm border border-[rgba(255,250,242,0.42)] text-warm-white hover:bg-white/15`
content = content.replace(/border-white\/20 text-\[#fffaf2\]/g, 'border-[rgba(255,250,242,0.42)] text-warm-white');

// Dividers on dark
content = content.replace(/bg-\[#6A2B2B\]/g, 'bg-burgundy');

// Replace any remaining `#6A2B2B` with `burgundy`
content = content.replace(/text-\[#6A2B2B\]/g, 'text-burgundy');

fs.writeFileSync('src/HomePage.tsx', content);
