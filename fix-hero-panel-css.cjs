const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');

const oldHeroCopyPanelMobile = `@media \\(max-width: 767px\\) \\{
  \\.hero-copy-panel \\{
    margin: 0 20px;
    width: calc\\(100vw - 40px\\);
    padding: 24px;
  \\}
\\}`;

// We will use string replace with Regex for exact replacement
css = css.replace(/@media \(max-width: 767px\) \{\s*\.hero-copy-panel \{\s*margin: 0 20px;\s*width: calc\(100vw - 40px\);\s*padding: 24px;\s*\}\s*\}/g, 
`@media (max-width: 767px) {
  .hero-copy-panel {
    width: 100%;
    padding: 24px;
  }
}`);

// Also fix the main hero-copy-panel width
css = css.replace(/width: min\(760px, calc\(100vw - 48px\)\);/g, 'width: 100%; max-width: 760px;');

fs.writeFileSync('src/index.css', css);
