const fs = require('fs');
const content = fs.readFileSync('src/HomePage.tsx', 'utf-8');

const replacement = `<div className="flex flex-col gap-[24px]">
              <div className="flex flex-col min-[768px]:grid min-[768px]:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] gap-[32px] min-[768px]:gap-[clamp(32px,4vw,52px)] items-start">
                <div className="flex flex-col gap-[20px] text-lg font-normal leading-relaxed text-panel-body w-full max-w-[58ch] min-w-0">
                  <p>
                    Many technical companies do not have a marketing problem. They have a language problem.
                  </p>
                  <p>
                    The product is clear inside the company. The founder can explain it across a table. But the idea changes shape as it travels: through the website, sales, launches, hiring and fundraising.
                  </p>
                  <p>
                    More content does not fix that. It multiplies the inconsistency.
                  </p>
                  <p className="font-medium text-panel-heading">
                    I treat narrative as infrastructure. It is the shared language a company uses to understand itself, and to teach the market to understand it.
                  </p>
                  <p>
                    Journalism trained me to find the thesis hidden in hours of noise. Startups taught me what happens next. The same idea has to hold up in a pitch, a landing page and a sales call without drifting.
                  </p>
                </div>
                <div className="w-full max-w-[420px] mx-auto min-[768px]:max-w-[360px] min-[768px]:justify-self-end min-[768px]:self-start">
                  <img 
                    src={portraitImg} 
                    alt="Illustrated portrait of Sampath Putrevu" loading="lazy" width="800" height="800" className="w-full h-auto aspect-auto object-contain object-top rounded-[12px] shadow-sm grayscale opacity-90 p-[10px] bg-transparent"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[20px] text-lg font-normal leading-relaxed text-panel-body w-full min-w-0">
                <p>
                  At <a href="https://www.zenskar.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Zenskar</a>, the work began with language, for a product buyers could not yet describe. Distribution came after the positioning was clear enough to build on.
                </p>
                <p>
                  At <a href="https://www.accel.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Accel</a>, I helped build SeedToScale. We turned what founders and investors knew privately into frameworks and company stories the ecosystem could use.
                </p>
                <p>
                  Today I lead marketing for <a href="https://www.champ.ai/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Champ AI</a>, built by former Instacart engineering leaders. I translate a technically complex product into a business outcome buyers can act on.
                </p>
                <p>
                  I have spent nearly a decade profiling, interviewing and working alongside technical founders. I know how to extract the conviction you already hold, and give it the form it needs to travel.
                </p>
              </div>
            </div>`;

// Use regex to replace the entire <FadePanel> inner content inside id="why-me"
const startTag = '<FadePanel className={panelClass}>';
const endTag = '</FadePanel>';

// Find the section id="why-me"
const whyMeStart = content.indexOf('id="why-me"');
const panelStart = content.indexOf(startTag, whyMeStart);
const panelEnd = content.indexOf(endTag, panelStart);

if (whyMeStart !== -1 && panelStart !== -1 && panelEnd !== -1) {
  const newContent = content.slice(0, panelStart + startTag.length) + '\n            ' + replacement + '\n          ' + content.slice(panelEnd);
  fs.writeFileSync('src/HomePage.tsx', newContent);
  console.log('Successfully patched HomePage.tsx');
} else {
  console.log('Failed to find markers.');
}
