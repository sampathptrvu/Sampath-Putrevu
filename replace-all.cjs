const fs = require('fs');

for (const file of ['src/WorkPage.tsx', 'src/EssaysPage.tsx', 'src/EssayPage.tsx']) {
  let content = fs.readFileSync(file, 'utf8');

  // Background blur
  content = content.replace(/bg-\[#050908\]\/\[0\.\d+\] md:bg-\[#050908\]\/\[0\.\d+\]/g, 'bg-[#090e0b]/[0.48]');

  content = content.replace(/text-white\/90/g, 'text-text-on-dark');
  content = content.replace(/text-white\/80/g, 'text-text-on-dark');
  content = content.replace(/text-white\/70/g, 'text-muted-on-dark');
  content = content.replace(/text-white\/40/g, 'text-muted-on-dark');
  content = content.replace(/text-white\/30/g, 'text-muted-on-dark');
  content = content.replace(/text-white/g, 'text-warm-white');
  content = content.replace(/border-white\/20/g, 'border-divider-dark');

  // `text-warm-white-secondary` -> `text-text-on-dark`
  content = content.replace(/text-warm-white-secondary\/80/g, 'text-text-on-dark');
  content = content.replace(/text-warm-white-secondary/g, 'text-text-on-dark');

  fs.writeFileSync(file, content);
}
