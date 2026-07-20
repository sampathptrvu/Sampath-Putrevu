const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');

const newCSS = `

.footer-cta {
  position: relative;
  min-height: 100svh;
  width: 100%;
  display: grid;
  place-items: center;
  box-sizing: border-box;
  padding: clamp(48px, 7vh, 88px) 24px;
  overflow: hidden;
}

.footer-cta-inner {
  width: min(100%, 1100px);
  margin: 0 auto;
  padding: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: none;
}

.credibility-strip {
  position: relative;
  isolation: isolate;
  display: flex;
  align-items: center;
  gap: clamp(24px, 3vw, 54px);
  width: fit-content;
}

.credibility-strip::before {
  content: "";
  position: absolute;
  z-index: -1;
  inset: -14px -24px;
  border-radius: 16px;
  background: rgba(7, 12, 13, 0.30);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.14);
  pointer-events: none;
}

.credibility-strip,
.credibility-strip img {
  filter: drop-shadow(0 2px 7px rgba(0, 0, 0, 0.58));
}

.problem-label {
  position: relative;
  isolation: isolate;
  color: #ffffff;
  text-shadow:
    0 2px 4px rgba(0, 0, 0, 0.72),
    0 7px 20px rgba(0, 0, 0, 0.46);
}

.problem-label::before {
  content: "";
  position: absolute;
  z-index: -1;
  inset: -18px -34px;
  background: radial-gradient(
    ellipse at center,
    rgba(7, 12, 13, 0.46) 0%,
    rgba(7, 12, 13, 0.28) 48%,
    rgba(7, 12, 13, 0) 100%
  );
  pointer-events: none;
}

.past-work-intro {
  position: relative;
  isolation: isolate;
}

.past-work-intro::before {
  content: "";
  position: absolute;
  z-index: -1;
  inset: -48px -110px -52px -58px;
  background: radial-gradient(
    ellipse at 36% 46%,
    rgba(7, 12, 13, 0.58) 0%,
    rgba(7, 12, 13, 0.42) 42%,
    rgba(7, 12, 13, 0.18) 70%,
    rgba(7, 12, 13, 0) 100%
  );
  filter: blur(14px);
  pointer-events: none;
}

.past-work-intro h1,
.past-work-intro h2 {
  text-shadow:
    0 2px 5px rgba(0, 0, 0, 0.68),
    0 9px 28px rgba(0, 0, 0, 0.42);
}

.past-work-intro p,
.past-work-intro a,
.past-work-intro .eyebrow {
  text-shadow:
    0 1px 3px rgba(0, 0, 0, 0.76),
    0 6px 18px rgba(0, 0, 0, 0.40);
}
`;

if (!css.includes('.footer-cta')) {
  fs.writeFileSync('src/index.css', css + newCSS);
}
