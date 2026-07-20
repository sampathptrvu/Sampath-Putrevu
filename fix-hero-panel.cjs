const fs = require('fs');

let content = fs.readFileSync('src/HomePage.tsx', 'utf8');

// 1. Wrap the content of motion.div with <div className="hero-copy-panel">
const oldMotionContentStart = `<span className="eyebrow`;
const oldMotionContentEnd = `</Link>
              </div>`;

content = content.replace(
  oldMotionContentStart,
  `<div className="hero-copy-panel">\n              <span className="eyebrow`
);

content = content.replace(
  oldMotionContentEnd,
  `</Link>\n              </div>\n            </div>`
);

// 2. Remove the credibility-strip from hero section
const credRegex = /<div className="absolute bottom-6 md:bottom-12 left-0 right-0 flex justify-center w-full min-\[1200px\]:justify-start min-\[1200px\]:pl-\[clamp\(80px,10vw,155px\)\] px-6">[\s\S]*?<\/div>\s*<\/section>/;

content = content.replace(credRegex, '</section>');

// 3. Add credibility section before Problem Section
const problemRegex = /\{\/\*\s*Problem Section\s*\*\/\}/;

const newCredSection = `
        {/* Credibility Section */}
        <section className="credibility-section">
          <div className="credibility-inner">
            <p className="font-bold tracking-[0.03em] uppercase text-[12px] md:text-[13px] opacity-80 whitespace-nowrap text-center md:text-left w-full md:w-auto mb-4 md:mb-0">Trusted by founders and teams backed by:</p>
            <div className="credibility-logos">
              <img src={sequoiaLogo} alt="Sequoia" className="h-[20px] md:h-[22px] w-auto object-contain shrink-0 mix-blend-multiply opacity-80" />
              <img src={accelLogo} alt="Accel" className="h-[23px] md:h-[25px] w-auto object-contain shrink-0 mix-blend-multiply opacity-80" />
              <img src={bessemerLogo} alt="Bessemer Venture Partners" className="h-[34px] md:h-[36px] w-auto object-contain shrink-0 mix-blend-multiply opacity-80" />
            </div>
          </div>
        </section>

        {/* Problem Section */}`;

content = content.replace(problemRegex, newCredSection);

fs.writeFileSync('src/HomePage.tsx', content);

let css = fs.readFileSync('src/index.css', 'utf8');

// Add .hero-copy-panel styles
const newCSS = `
.hero-copy-panel {
  width: min(760px, calc(100vw - 48px));
  padding: clamp(28px, 3.2vw, 48px);
  border-radius: 24px;
  background: rgba(18, 24, 23, 0.38);
  border: 1px solid rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(14px) saturate(105%);
  -webkit-backdrop-filter: blur(14px) saturate(105%);
  box-shadow:
    0 24px 70px rgba(0, 0, 0, 0.22),
    inset 0 1px 0 rgba(255, 255, 255, 0.14);
}

@media (max-width: 767px) {
  .hero-copy-panel {
    margin: 0 20px;
    width: calc(100vw - 40px);
    padding: 24px;
  }
}

.credibility-section {
  position: relative;
  background: #f1ede3;
  color: #202321;
  padding: clamp(32px, 4vw, 56px) clamp(24px, 7vw, 112px);
  border-top: 1px solid rgba(32, 35, 33, 0.10);
  border-bottom: 1px solid rgba(32, 35, 33, 0.10);
}

.credibility-inner {
  width: min(1280px, 100%);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
}

.credibility-logos {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: clamp(30px, 4vw, 64px);
}

@media (max-width: 767px) {
  .credibility-inner {
    flex-direction: column;
    gap: 24px;
  }
  .credibility-logos {
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px 32px;
  }
}
`;

// Remove old credibility-strip css
css = css.replace(/\.credibility-strip\s*\{[\s\S]*?\}/g, '');
css = css.replace(/\.credibility-strip::before\s*\{[\s\S]*?\}/g, '');
css = css.replace(/\.credibility-strip,\s*\.credibility-strip img\s*\{[\s\S]*?\}/g, '');

if (!css.includes('.hero-copy-panel')) {
  fs.writeFileSync('src/index.css', css + newCSS);
} else {
  fs.writeFileSync('src/index.css', css);
}
