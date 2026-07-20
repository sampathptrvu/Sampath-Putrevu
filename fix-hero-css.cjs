const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');

// Remove .hero-copy::before block completely
css = css.replace(/\.hero-copy::before\s*\{[\s\S]*?\}/g, '');

// Also remove media query for .hero-copy::before
css = css.replace(/@media\s*\(max-width:\s*767px\)\s*\{\s*\.hero-copy::before\s*\{[\s\S]*?\}\s*\}/g, '');

// Update text shadows for hero-copy
const oldH1Shadow = /\.hero-copy h1\s*\{[\s\S]*?\}/;
const newH1Shadow = `.hero-copy h1 {
  color: #fffdf7;
  -webkit-text-stroke: 0.45px rgba(10, 14, 14, 0.42);
  text-shadow:
    0 2px 3px rgba(0, 0, 0, 0.68),
    0 8px 24px rgba(0, 0, 0, 0.34);
}`;
css = css.replace(oldH1Shadow, newH1Shadow);

const oldPShadow = /\.hero-copy p,\s*\.hero-copy \.eyebrow\s*\{[\s\S]*?\}/;
const newPShadow = `.hero-copy .eyebrow,
.hero-copy p {
  color: rgba(255, 255, 255, 0.98);
  -webkit-text-stroke: 0.25px rgba(10, 14, 14, 0.38);
  text-shadow:
    0 1px 2px rgba(0, 0, 0, 0.78),
    0 5px 16px rgba(0, 0, 0, 0.36);
}`;
css = css.replace(oldPShadow, newPShadow);

fs.writeFileSync('src/index.css', css);
