const fs = require('fs');
let content = fs.readFileSync('src/WorkPage.tsx', 'utf8');
content = content.replace(
  '<div className="fixed -inset-[20px] z-[-2] pointer-events-none blur-[6px] md:blur-[10px] scale-[1.04] will-change-[transform,filter]">',
  '<div className="fixed inset-0 z-[-2] pointer-events-none">'
);
fs.writeFileSync('src/WorkPage.tsx', content);

let cssContent = fs.readFileSync('src/index.css', 'utf8');
cssContent = cssContent.replace(
  'rgba(7, 12, 13, 0.46) 0%,',
  'rgba(7, 12, 13, 0.46) 0%,'
);
// Make sure it didn't get messed up.
