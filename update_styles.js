const fs = require('fs');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Nav replacements
  content = content.replace(
    /isMobileMenuOpen \? "bg-ivory\/94 backdrop-blur-\[8px\] shadow-sm border border-dusty-stone\/20" :\s*scrolled \? "bg-ivory\/94 backdrop-blur-\[8px\] shadow-sm border border-dusty-stone\/20" :\s*"bg-transparent border-transparent"/g,
    '(scrolled || isMobileMenuOpen) ? "glass-nav-scrolled" : "bg-transparent border-transparent"'
  );

  content = content.replace(
    /isMobileMenuOpen \|\| scrolled \? "text-soft-black" : "text-white"/g,
    '"text-white"'
  );
  content = content.replace(
    /isMobileMenuOpen \|\| scrolled \? "text-warm-gray" : "text-white\/80"/g,
    '"text-white/80"'
  );
  content = content.replace(
    /isMobileMenuOpen \|\| scrolled \? "hover:text-deep-forest" : "hover:text-white"/g,
    '"hover:text-white"'
  );
  content = content.replace(
    /isMobileMenuOpen \|\| scrolled \? "bg-dusty-stone\/40" : "bg-white\/20"/g,
    '"bg-surface-border"'
  );
  content = content.replace(
    /className="md:hidden w-full px-6 py-6 flex flex-col gap-6 border-t border-dusty-stone\/20"/g,
    'className="md:hidden w-full px-6 py-6 flex flex-col gap-6 border-t border-surface-divider"'
  );

  // Trust / Investor Area
  content = content.replace(
    /bg-box-bg\/95 border-y border-dusty-stone\/40/g,
    'glass-panel'
  );
  
  // Hero Buttons (keep primary burgundy, secondary dark transparent glass)
  // The secondary hero button is: bg-transparent border border-white/30 text-white
  // This seems fine already: "Keep the secondary “Past work” button as dark transparent glass with warm-white text and a fine light border."

  // Content Panels
  content = content.replace(
    /bg-box-bg\/95 border border-dusty-stone\/40/g,
    'glass-panel'
  );
  
  // Closing CTA explicitly needs stronger glass
  // Let's replace 'glass-panel rounded-lg p-8 md:p-12 text-center w-full max-w-\[640px\]' with 'glass-panel-strong rounded-lg p-8 md:p-12 text-center w-full max-w-[640px]'
  content = content.replace(
    /glass-panel rounded-lg p-8 md:p-12 text-center w-full max-w-\[640px\]/g,
    'glass-panel-strong rounded-lg p-8 md:p-12 text-center w-full max-w-[640px]'
  );

  // Replace text colors
  content = content.replace(/text-soft-black/g, 'text-text-on-glass');
  content = content.replace(/text-warm-gray/g, 'text-text-on-glass-secondary');
  content = content.replace(/text-dusty-stone/g, 'text-surface-divider');
  content = content.replace(/border-dusty-stone\/30/g, 'border-surface-divider');
  content = content.replace(/border-dusty-stone\/40/g, 'border-surface-divider');
  content = content.replace(/border-dusty-stone\/20/g, 'border-surface-divider');
  content = content.replace(/bg-box-bg\/95/g, 'glass-panel');

  fs.writeFileSync(filePath, content, 'utf8');
}

processFile('src/HomePage.tsx');
processFile('src/WorkPage.tsx');
console.log('Done');
