import re

with open('src/HomePage.tsx', 'r') as f:
    content = f.read()

old_content = """              <div className="flex flex-col gap-5 text-lg font-normal leading-relaxed text-panel-body w-full max-w-[58ch] min-w-0">
                <p>
                  Journalism trained me to find the thesis hidden in hours of noise. Then came the startups, which taught me what happens next: that same instinct built pipeline, earned press, and closed funding rounds.
                </p>
                <p>
                  Today, I lead marketing for <a href="https://www.champ.ai/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Champ AI</a>, a <a href="https://www.redpoint.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Redpoint</a>-backed company built by former Instacart engineering leaders that sells outcomes instead of infrastructure.
                </p>
                <p>
                  Before that, I led brand at <a href="https://www.zenskar.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Zenskar</a>, a <a href="https://www.bvp.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Bessemer</a>-backed AI billing platform, building the inbound marketing vehicle that drove its qualified pipeline.
                </p>
                <p>
                  Before that, I built the SeedToScale editorial platform at <a href="https://www.accel.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Accel</a>, turning the private conviction of founders and investors into public frameworks the ecosystem still returns to.
                </p>
                <p>
                  I have spent a decade profiling, interviewing, and working alongside technical founders. I know how to extract the conviction you already hold, and how to give it the form it needs to travel.
                </p>
              </div>"""

new_content = """              <div className="flex flex-col gap-5 text-lg font-normal leading-relaxed text-panel-body w-full max-w-[58ch] min-w-0">
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
              </div>"""

if old_content in content:
    content = content.replace(old_content, new_content)
    with open('src/HomePage.tsx', 'w') as f:
        f.write(content)
    print("Replaced Why me content successfully.")
else:
    print("Could not find old content block exactly as expected.")

