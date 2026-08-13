const fs = require('fs');
let content = fs.readFileSync('src/WorkPage.tsx', 'utf8');

// The company name heading
content = content.replace(
  /<h3 className="font-sans text-\[20px\] font-bold text-\[\#6A2B2B\] mb-1">/g,
  '<h3 className="work-company-name text-[20px] md:text-[22px] lg:text-[24px] mb-1">'
);

// The descriptor paragraph
content = content.replace(
  /<p className="font-sans text-\[18px\] font-semibold text-text-on-glass-secondary mb-3">/g,
  '<p className="work-company-descriptor font-sans text-[18px] mb-3">'
);

// The explanation paragraph
content = content.replace(
  /<p className="font-sans text-\[16px\] leading-\[1.6\] text-text-on-glass-secondary max-w-\[76ch\]">/g,
  '<p className="work-company-explanation font-sans text-[16px] max-w-[76ch]">'
);

// Update dividers just to be explicit
content = content.replace(
  /className="flex flex-col border-b border-surface-divider pb-8 mb-8"/g,
  'className="flex flex-col border-b border-[rgba(255,250,242,0.22)] pb-8 mb-8"'
);

fs.writeFileSync('src/WorkPage.tsx', content);
