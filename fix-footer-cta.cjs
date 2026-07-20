const fs = require('fs');
let content = fs.readFileSync('src/HomePage.tsx', 'utf8');

// Replace h2
content = content.replace(
  '<h2 className="font-display font-normal text-[36px] mb-6 text-warm-white leading-[1.05] tracking-[-0.015em]">',
  '<h2 className="font-display font-normal text-warm-white tracking-[-0.015em]">'
);

// Replace p
content = content.replace(
  '<p className="text-[20px] text-text-on-dark font-medium mb-16">',
  '<p className="font-sans font-medium text-text-on-dark">'
);

// Add social-links class to the div containing links
content = content.replace(
  '<div className="flex justify-center items-center gap-8 mt-16">',
  '<div className="social-links flex justify-center items-center gap-8">'
);

fs.writeFileSync('src/HomePage.tsx', content);

let css = fs.readFileSync('src/index.css', 'utf8');

const footerRegex = /\.footer-cta\s*\{[\s\S]*?\}\s*\.footer-cta-inner\s*\{[\s\S]*?\}/;
const newFooterCss = `.footer-cta {
  position: relative;
  min-height: 82svh;
  width: 100%;
  display: grid;
  place-items: center;
  padding: 80px 24px;
  box-sizing: border-box;
  overflow: hidden;
}

.footer-cta-inner {
  position: relative;
  width: min(720px, calc(100vw - 48px));
  margin: 0 auto;
  padding: clamp(42px, 5vw, 66px);
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
}

.footer-cta h2 {
  font-size: clamp(46px, 5vw, 70px);
  line-height: 1.04;
  margin: 0 0 24px;
}

.footer-cta p {
  font-size: clamp(18px, 1.6vw, 22px);
  line-height: 1.5;
  margin: 0 0 42px;
}

.footer-cta .social-links {
  margin-top: 42px;
}`;

css = css.replace(footerRegex, newFooterCss);

fs.writeFileSync('src/index.css', css);
