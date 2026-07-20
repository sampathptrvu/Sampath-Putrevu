const fs = require('fs');
let content = fs.readFileSync('src/WorkPage.tsx', 'utf8');

// Header transparency - we'll leave it as is if it relies on site-header class.

// The stronger uniform overlay for work page
// currently:
content = content.replace(/bg-\[#050908\]\/\[0\.62\] md:bg-\[#050908\]\/\[0\.52\]/g, 'bg-[#090e0b]/[0.56]');

// Main heading: text-warm-white
content = content.replace(/text-text-on-glass/g, 'text-warm-white');

// Dividers: var(--divider-dark)
content = content.replace(/border-\[rgba\(255,250,242,0\.22\)\]/g, 'border-divider-dark');

// text-[#6A2B2B] -> text-burgundy
content = content.replace(/text-\[#6A2B2B\]/g, 'text-burgundy');
content = content.replace(/bg-deep-forest/g, 'bg-burgundy');
content = content.replace(/hover:bg-deep-forest-hover/g, 'hover:bg-burgundy-dark');

// `text-[#F5EFE6]` -> `text-warm-white`
content = content.replace(/text-\[#F5EFE6\]/g, 'text-warm-white');

// Check the button at the bottom: 
// `<a href="..." class="... bg-deep-forest text-[#F5EFE6] hover:bg-deep-forest-hover">`
// has been updated above.

fs.writeFileSync('src/WorkPage.tsx', content);
