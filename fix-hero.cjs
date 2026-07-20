const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');

// Update .hero-copy-panel
css = css.replace(/\.hero-copy-panel\s*\{[\s\S]*?\}\s*\.hero-copy-panel:hover\s*\{[\s\S]*?\}/, `.hero-copy-panel {
  position: relative;
  width: min(650px, calc(100vw - 56px));
  height: auto;
  min-height: 0;
  box-sizing: border-box;
  overflow: visible;
  margin: 0;
  padding: 42px 46px 44px;
  border-radius: 24px;

  background: rgba(28, 38, 37, 0.46);
  border: 1px solid rgba(255, 255, 255, 0.20);

  backdrop-filter: blur(14px) saturate(92%);
  -webkit-backdrop-filter: blur(14px) saturate(92%);

  box-shadow:
    0 24px 70px rgba(4, 9, 9, 0.20),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-copy-panel:hover {
  background: rgba(28, 38, 37, 0.52);
  border-color: rgba(255, 255, 255, 0.32);
  box-shadow:
    0 24px 70px rgba(4, 9, 9, 0.22),
    0 0 32px rgba(255, 255, 255, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.22);
}`);

// Update .hero-section
css = css.replace(/\.hero-section\s*\{[\s\S]*?\}/, `.hero-section {
  position: relative;
  width: 100%;
  min-height: 100svh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding:
    clamp(120px, 15vh, 170px)
    clamp(28px, 7vw, 112px)
    clamp(72px, 9vh, 110px);
  overflow: hidden;
}`);

// Update .credibility-section
css = css.replace(/\.credibility-section\s*\{[\s\S]*?\}/, `.credibility-section {
  position: relative;
  width: 100%;
  margin: 0;
  transform: none;
  background: #f1ede3;
  padding: 40px clamp(28px, 7vw, 112px);
  box-sizing: border-box;
}`);

// Append .hero-actions
css += `
.hero-actions {
  position: static;
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 30px;
  transform: none;
}

.hero-actions a,
.hero-actions button {
  position: static;
  transform: none;
  margin: 0;
}
`;

fs.writeFileSync('src/index.css', css);
