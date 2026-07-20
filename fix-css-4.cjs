const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');

css = css.replace(/\.hero-copy-panel h1\s*\{[\s\S]*?\}/, `.hero-copy-panel h1 {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.08;
  letter-spacing: -0.025em;
  max-width: none;
  white-space: nowrap;
  margin: 0 0 30px;
}`);

css = css.replace(/\.hero-copy-panel \.hero-description\s*\{[\s\S]*?\}/, `.hero-copy-panel .hero-description {
  font-style: italic;
  font-size: clamp(18px, 1.45vw, 21px);
  line-height: 1.5;
  max-width: 560px;
  margin-bottom: 32px;
}`);

// Inject import statement at top if not present
if (!css.includes('Plus+Jakarta+Sans')) {
  css = "@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,700;1,400&display=swap');\n" + css;
}

fs.writeFileSync('src/index.css', css);
