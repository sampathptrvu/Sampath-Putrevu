const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

css = css.replace(/margin:\s*0\s*auto;/, 'margin: 0;\n  grid-area: 1 / 1;');

fs.writeFileSync('src/index.css', css);
