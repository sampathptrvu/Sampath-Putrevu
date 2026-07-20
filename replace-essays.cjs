const fs = require('fs');

for (const file of ['src/EssaysPage.tsx', 'src/EssayPage.tsx']) {
  let content = fs.readFileSync(file, 'utf8');

  // Background blur
  content = content.replace(/bg-\[#050908\]\/\[0\.\d+\] md:bg-\[#050908\]\/\[0\.\d+\]/g, 'bg-[#090e0b]/[0.48]');

  // Panels
  content = content.replace(/bg-\[#fffaf2\]\/95/g, 'bg-parchment');
  content = content.replace(/border-\[#4f1719\]\/12/g, 'border-divider-light');
  content = content.replace(/border-\[#4f1719\]\/10/g, 'border-divider-light');

  // Panel text
  content = content.replace(/text-\[#4f1719\]\/90/g, 'text-panel-body');
  content = content.replace(/text-\[#4f1719\]\/80/g, 'text-panel-body');
  content = content.replace(/text-\[#4f1719\]\/70/g, 'text-panel-muted');
  content = content.replace(/text-\[#4f1719\]\/30/g, 'text-panel-muted opacity-50'); // just to be safe
  content = content.replace(/text-\[#4f1719\]/g, 'text-panel-heading');

  // Burgundy
  content = content.replace(/text-\[#6A2B2B\]/g, 'text-burgundy');
  content = content.replace(/border-\[#6A2B2B\]\/30/g, 'border-burgundy/30');
  content = content.replace(/bg-\[#6A2B2B\]/g, 'bg-burgundy');
  content = content.replace(/hover:bg-\[#8A3B3B\]/g, 'hover:bg-burgundy-dark');

  // Warm white text
  content = content.replace(/text-\[#F5EFE6\]/g, 'text-warm-white');
  content = content.replace(/text-text-on-glass/g, 'text-warm-white');

  fs.writeFileSync(file, content);
}
