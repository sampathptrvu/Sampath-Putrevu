import re

with open('src/HomePage.tsx', 'r') as f:
    content = f.read()

old_content = """          <FadePanel className={panelClass}>
            <div className="flex flex-col min-[768px]:grid min-[768px]:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] gap-[clamp(32px,4vw,52px)] items-start">
              <div className="flex flex-col gap-5 text-lg font-normal leading-relaxed text-panel-body w-full max-w-[58ch] min-w-0">
                <p>
                  Many technical companies do not have a marketing problem. They have a language problem.
                </p>
                <p>
                  The product is clear inside the company. The founder can explain it across a table. But the idea changes shape as it moves through the website, sales, launches, hiring and fundraising. More content does not fix that. It usually multiplies the inconsistency.
                </p>
                <p className="font-medium text-panel-heading">
                  I treat narrative as infrastructure: the shared language a company uses to understand itself and to teach the market to understand it.
                </p>
                <p>
                  Journalism trained me to find the thesis hidden in hours of noise. Startups taught me what happens after you find it, when the same idea has to hold up in a pitch, a landing page and a sales call without drifting.
                </p>
                <p>
                  At <a href="https://www.zenskar.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Zenskar</a>, the work began by finding language for a product buyers did not yet know how to describe. Distribution came after the positioning was clear enough to build on.
                </p>
                <p>
                  At <a href="https://www.accel.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Accel</a>, I helped build SeedToScale by turning what founders and investors knew privately into frameworks and company stories the wider ecosystem could use.
                </p>
                <p>
                  Today I lead marketing for <a href="https://www.champ.ai/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Champ AI</a>, a company built by former Instacart engineering leaders, translating a technically complex product into a business outcome buyers can act on.
                </p>
                <p>
                  I have spent nearly a decade profiling, interviewing and working alongside technical founders. I know how to extract the conviction you already hold and give it the form it needs to travel.
                </p>
              </div>
              <div className="w-full max-w-[420px] mx-auto min-[768px]:max-w-[360px] min-[768px]:justify-self-end min-[768px]:self-start">
                <img 
                  src={portraitImg} 
                  alt="Illustrated portrait of Sampath Putrevu" loading="lazy" width="800" height="800" className="w-full h-auto aspect-auto object-contain object-top rounded-[12px] shadow-sm grayscale opacity-90 p-[10px] bg-transparent"
                />
              </div>
            </div>
          </FadePanel>"""

new_content = """          <FadePanel className={panelClass}>
            <div className="flex flex-col gap-8 md:gap-10">
              <div className="flex flex-col min-[768px]:grid min-[768px]:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] gap-[clamp(32px,4vw,52px)] items-start">
                <div className="flex flex-col gap-5 text-lg font-normal leading-relaxed text-panel-body w-full max-w-[58ch] min-w-0">
                  <p>
                    Many technical companies do not have a marketing problem. They have a language problem.
                  </p>
                  <p>
                    The product is clear inside the company. The founder can explain it across a table. But the idea changes shape as it moves through the website, sales, launches, hiring and fundraising. More content does not fix that. It usually multiplies the inconsistency.
                  </p>
                  <p className="font-medium text-panel-heading">
                    I treat narrative as infrastructure: the shared language a company uses to understand itself and to teach the market to understand it.
                  </p>
                  <p>
                    Journalism trained me to find the thesis hidden in hours of noise. Startups taught me what happens after you find it, when the same idea has to hold up in a pitch, a landing page and a sales call without drifting.
                  </p>
                </div>
                <div className="w-full max-w-[420px] mx-auto min-[768px]:max-w-[360px] min-[768px]:justify-self-end min-[768px]:self-start">
                  <img 
                    src={portraitImg} 
                    alt="Illustrated portrait of Sampath Putrevu" loading="lazy" width="800" height="800" className="w-full h-auto aspect-auto object-contain object-top rounded-[12px] shadow-sm grayscale opacity-90 p-[10px] bg-transparent"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-5 text-lg font-normal leading-relaxed text-panel-body w-full min-w-0">
                <p>
                  At <a href="https://www.zenskar.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Zenskar</a>, the work began by finding language for a product buyers did not yet know how to describe. Distribution came after the positioning was clear enough to build on.
                </p>
                <p>
                  At <a href="https://www.accel.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Accel</a>, I helped build SeedToScale by turning what founders and investors knew privately into frameworks and company stories the wider ecosystem could use.
                </p>
                <p>
                  Today I lead marketing for <a href="https://www.champ.ai/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Champ AI</a>, a company built by former Instacart engineering leaders, translating a technically complex product into a business outcome buyers can act on.
                </p>
                <p>
                  I have spent nearly a decade profiling, interviewing and working alongside technical founders. I know how to extract the conviction you already hold and give it the form it needs to travel.
                </p>
              </div>
            </div>
          </FadePanel>"""

if old_content in content:
    content = content.replace(old_content, new_content)
    with open('src/HomePage.tsx', 'w') as f:
        f.write(content)
    print("Replaced Why me layout successfully.")
else:
    print("Could not find old content block exactly as expected.")

