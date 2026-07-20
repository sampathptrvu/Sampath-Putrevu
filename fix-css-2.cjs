const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');

css += `
.credibility-label {
  flex: 0 0 auto;
  margin: 0;
  white-space: nowrap;
  color: #252724;
}
`;

css = css.replace(/\.hero-copy-panel\s*\{[\s\S]*?\}\s*\.hero-copy-panel:hover\s*\{[\s\S]*?\}/, `.hero-copy-panel {
  position: relative;
  width: min(980px, calc(100vw - 300px));
  margin-left: clamp(150px, 11vw, 220px);
  height: auto;
  min-height: 0;
  box-sizing: border-box;
  overflow: visible;
  padding: 42px 46px 44px;
  border-radius: 24px;

  background: rgba(20, 28, 27, 0.24);
  border: 1px solid rgba(255, 255, 255, 0.18);

  backdrop-filter: blur(10px) saturate(102%);
  -webkit-backdrop-filter: blur(10px) saturate(102%);

  box-shadow:
    0 20px 54px rgba(4, 9, 9, 0.14),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-copy-panel:hover {
  background: rgba(20, 28, 27, 0.32);
  border-color: rgba(255, 255, 255, 0.28);
  box-shadow:
    0 24px 70px rgba(4, 9, 9, 0.22),
    0 0 32px rgba(255, 255, 255, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.22);
}`);

css = css.replace(/\.hero-copy-panel h1\s*\{[\s\S]*?\}/, `.hero-copy-panel h1 {
  font-size: clamp(42px, 3.25vw, 55px);
  line-height: 1.08;
  letter-spacing: -0.025em;
  max-width: none;
  white-space: nowrap;
  margin: 0 0 30px;
}`);

css += `
@media (max-width: 1200px) {
  .hero-copy-panel h1 {
    white-space: normal;
  }
}
`;

css = css.replace(/\.hero-copy-panel h1,\s*\.hero-copy-panel .eyebrow,\s*\.hero-copy-panel .hero-description\s*\{[\s\S]*?\}/, `.hero-copy-panel h1,
.hero-copy-panel .eyebrow,
.hero-copy-panel .hero-description {
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.38);
}`);

fs.writeFileSync('src/index.css', css);
