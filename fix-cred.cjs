const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');

css = css.replace(/\.credibility-section\s*\{[\s\S]*?\}/, `.credibility-section {
  position: relative;
  width: 100%;
  margin: 0;
  padding: clamp(40px, 5vw, 64px) clamp(28px, 7vw, 112px);
  background: transparent;
  box-sizing: border-box;
}`);

css = css.replace(/\.credibility-inner\s*\{[\s\S]*?\}/, `.credibility-inner {
  width: fit-content;
  max-width: 100%;
  margin: 0 auto;
  padding: 24px 34px;
  border-radius: 18px;
  background: #f1ede3;
  color: #252724;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: clamp(34px, 3vw, 52px);

  box-sizing: border-box;
}`);

css = css.replace(/\.credibility-logos\s*\{[\s\S]*?\}/, `.credibility-logos {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: clamp(28px, 2.5vw, 44px);
  margin: 0;
}`);

fs.writeFileSync('src/index.css', css);
