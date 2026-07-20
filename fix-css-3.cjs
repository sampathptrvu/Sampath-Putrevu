const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

css = css.replace(/@media\s*\(max-width:\s*800px\)\s*\{\s*\.hero-copy-panel\s*\{[\s\S]*?\}\s*\}/, `@media (max-width: 800px) {
  .hero-copy-panel {
    margin-left: 20px;
    margin-right: 20px;
    width: calc(100% - 40px);
    padding: 28px;
  }
}`);

css = css.replace(/\.credibility-inner\s*\{\s*flex-direction:\s*column;\s*align-items:\s*flex-start;\s*\}/, `.credibility-inner {
    flex-direction: column;
    align-items: center;
  }`);

fs.writeFileSync('src/index.css', css);
