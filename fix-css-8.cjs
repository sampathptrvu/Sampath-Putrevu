const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

css = css.replace(/\.hero-copy-panel\s*\{[\s\S]*?\}\s*\.hero-copy-panel:hover\s*\{[\s\S]*?\}/, `.hero-copy-panel {
  position: relative;
  width: fit-content;
  max-width: calc(100vw - 40px);
  height: auto;
  min-height: 0;
  box-sizing: border-box;
  overflow: visible;
  padding: 38px 41px 40px;
  border-radius: 24px;

  text-align: center;
  align-items: center;

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

fs.writeFileSync('src/index.css', css);
