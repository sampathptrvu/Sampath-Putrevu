const fs = require('fs');

let content = fs.readFileSync('src/Header.tsx', 'utf8');

content = content.replace(
  /className="fixed top-0 left-0 w-full z-50 pointer-events-auto site-header"/,
  'className="absolute top-0 left-0 w-full z-20 pointer-events-auto site-header"'
);

fs.writeFileSync('src/Header.tsx', content);

let css = fs.readFileSync('src/index.css', 'utf8');
css = css.replace(/\.site-header\s*\{[\s\S]*?\}/, `.site-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  background: transparent;
}`);

fs.writeFileSync('src/index.css', css);
