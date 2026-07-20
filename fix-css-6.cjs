const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

// Update .hero-section
css = css.replace(/\.hero-section\s*\{[\s\S]*?\}/, `.hero-section {
  position: relative;
  width: 100%;
  min-height: 100svh;
  box-sizing: border-box;
  display: grid;
  place-items: center;
  padding:
    clamp(120px, 15vh, 170px)
    clamp(28px, 7vw, 112px)
    clamp(72px, 9vh, 110px);
  overflow: hidden;
}`);

// Update .hero-copy-panel 
css = css.replace(/\.hero-copy-panel\s*\{[\s\S]*?\}\s*\.hero-copy-panel:hover\s*\{[\s\S]*?\}/, `.hero-copy-panel {
  position: relative;
  width: min(617px, calc(100vw - 40px));
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

// Update .hero-copy-panel h1
css = css.replace(/\.hero-copy-panel h1\s*\{[\s\S]*?\}/, `.hero-copy-panel h1 {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 38px;
  font-weight: bold;
  line-height: 1.08;
  letter-spacing: -0.025em;
  max-width: none;
  white-space: nowrap;
  margin: 0 0 30px;
  text-align: center;
}`);

// Update .hero-copy-panel .hero-description
css = css.replace(/\.hero-copy-panel \.hero-description\s*\{[\s\S]*?\}/, `.hero-copy-panel .hero-description {
  font-style: normal;
  font-size: clamp(18px, 1.45vw, 21px);
  line-height: 1.5;
  width: max-content;
  max-width: none;
  white-space: nowrap;
  margin-bottom: 32px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}`);

// Update .hero-actions
css = css.replace(/\.hero-actions\s*\{[\s\S]*?\}/, `.hero-actions {
  position: static;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 30px;
  transform: none;
}`);

// Update @media (max-width: 800px) .hero-copy-panel
css = css.replace(/@media\s*\(max-width:\s*800px\)\s*\{\s*\.hero-copy-panel\s*\{[\s\S]*?\}\s*\}/, `@media (max-width: 800px) {
  .hero-copy-panel {
    width: calc(100% - 40px);
    padding: 28px;
  }
}`);

// Add @media for wrapping .hero-description
css += `
@media (max-width: 900px) {
  .hero-copy-panel .hero-description {
    white-space: normal;
    width: 100%;
  }
}
`;

fs.writeFileSync('src/index.css', css);
