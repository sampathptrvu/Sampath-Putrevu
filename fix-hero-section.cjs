const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');

css = css.replace(/\.hero-section\s*\{[\s\S]*?\}/, `.hero-section {
  position: relative;
  width: 100%;
  min-height: 100svh;
  display: grid;
  place-items: center;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  overflow: hidden;
}`);

fs.writeFileSync('src/index.css', css);
