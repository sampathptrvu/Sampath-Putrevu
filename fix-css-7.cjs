const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');

// Update .footer-cta-inner
css = css.replace(/\.footer-cta-inner\s*\{[\s\S]*?\}/, `.footer-cta-inner {
  position: relative;
  width: min(900px, calc(100vw - 40px));
  margin: 0 auto;
  padding: clamp(29px, 3.5vw, 46px);
  border-radius: 24px;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: rgba(28, 38, 37, 0.48);
  border: 1px solid rgba(255, 255, 255, 0.20);

  backdrop-filter: blur(14px) saturate(92%);
  -webkit-backdrop-filter: blur(14px) saturate(92%);

  box-shadow:
    0 24px 70px rgba(4, 9, 9, 0.22),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
}`);

// Update .footer-cta h2
css = css.replace(/\.footer-cta h2\s*\{[\s\S]*?\}/, `.footer-cta h2 {
  font-size: clamp(32px, 4vw, 49px);
  line-height: 1.04;
  margin: 0 0 16px;
}`);

// Update .footer-cta p
css = css.replace(/\.footer-cta p\s*\{[\s\S]*?\}/, `.footer-cta p {
  font-size: clamp(18px, 1.6vw, 22px);
  line-height: 1.5;
  margin: 0 0 29px;
}`);

// Update .footer-cta .social-links
css = css.replace(/\.footer-cta \.social-links\s*\{[\s\S]*?\}/, `.footer-cta .social-links {
  margin-top: 29px;
}`);

fs.writeFileSync('src/index.css', css);
