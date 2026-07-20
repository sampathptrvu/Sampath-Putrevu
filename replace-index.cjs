const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');
css = css.replace(/color: #fffaf2;/g, 'color: var(--warm-white);');
css = css.replace(/background: #7a2428;/g, 'background: var(--burgundy);');
fs.writeFileSync('src/index.css', css);
