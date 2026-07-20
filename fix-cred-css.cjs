const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

css = css.replace(/\.credibility-section\s*\{[\s\S]*?\}/, `.credibility-section {
  position: relative;
  width: 100%;
  background: #f1ede3;
  color: #202321;
  padding: 38px clamp(28px, 7vw, 112px);
  box-sizing: border-box;
  border-top: 1px solid rgba(32, 35, 33, 0.10);
  border-bottom: 1px solid rgba(32, 35, 33, 0.10);
}`);

fs.writeFileSync('src/index.css', css);
