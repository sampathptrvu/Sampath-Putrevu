const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

const heroRegex = /\.hero-copy-panel\s*\{[\s\S]*?\}\s*@media\s*\(max-width:\s*767px\)\s*\{\s*\.hero-copy-panel\s*\{[\s\S]*?\}\s*\}/;

const newCss = `.hero-copy-panel {
  position: relative;
  width: min(650px, calc(100vw - 56px));
  margin: 0;
  padding: clamp(32px, 3vw, 46px);
  border-radius: 24px;

  background: rgba(28, 38, 37, 0.46);
  border: 1px solid rgba(255, 255, 255, 0.20);

  backdrop-filter: blur(14px) saturate(92%);
  -webkit-backdrop-filter: blur(14px) saturate(92%);

  box-shadow:
    0 24px 70px rgba(4, 9, 9, 0.20),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
}

@media (max-width: 800px) {
  .hero-copy-panel {
    margin: 0 20px;
    width: calc(100% - 40px);
    padding: 28px;
  }
}`;

css = css.replace(heroRegex, newCss);

fs.writeFileSync('src/index.css', css);
