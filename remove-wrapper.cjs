const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');

css = css.replace(/\.hero-panel-wrapper\s*\{[\s\S]*?\}/, '');

fs.writeFileSync('src/index.css', css);
