import re

with open('src/WorkPage.tsx', 'r') as f:
    content = f.read()

# 1. Update VC Marketer metric
vc_marketer_old = """                  <div>
                    <div className="font-sans font-bold text-[18px] text-panel-heading mb-1 tabular-nums">4</div>
                    <div className="text-[15px] font-normal leading-[1.5] text-panel-body">Venture Capital firms where I shaped founder-education platforms and portfolio marketing</div>
                  </div>"""
vc_marketer_new = """                  <div>
                    <div className="font-sans font-bold text-[18px] text-panel-heading mb-1 tabular-nums">4 VC firms</div>
                    <div className="text-[15px] font-normal leading-[1.5] text-panel-body">Where I shaped founder-education platforms and portfolio marketing</div>
                  </div>"""
content = content.replace(vc_marketer_old, vc_marketer_new)

# 2. Update Startup Marketer column order and insert new metric
startup_marketer_old = """                  <div>
                    <div className="font-sans font-bold text-[18px] text-panel-heading mb-1 tabular-nums">$2.5M in closed-won revenue</div>
                    <div className="text-[15px] font-normal leading-[1.5] text-panel-body">Influenced by the organic inbound engine built at <a href="https://www.zenskar.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Zenskar</a>.</div>
                  </div>
                  <div>
                    <div className="font-sans font-bold text-[18px] text-panel-heading mb-1 tabular-nums">Contributed to <a href="https://web3auth.io/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Web3Auth</a> crossing $1M ARR</div>
                    <div className="text-[15px] font-normal leading-[1.5] text-panel-body">Through PR, X, customer stories, partner marketing, and events.</div>
                  </div>
                  <div>
                    <div className="font-sans font-bold text-[18px] text-panel-heading mb-1 tabular-nums">45% average newsletter open rate</div>
                    <div className="text-[15px] font-normal leading-[1.5] text-panel-body">Across <a href="https://www.zenskar.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Zenskar</a>'s owned audience.</div>
                  </div>
                  <div>
                    <div className="font-sans font-bold text-[18px] text-panel-heading mb-1 tabular-nums">9-person creative team</div>
                    <div className="text-[15px] font-normal leading-[1.5] text-panel-body">Scaled and led across content, design, and production.</div>
                  </div>"""
                  
startup_marketer_new = """                  <div>
                    <div className="font-sans font-bold text-[18px] text-panel-heading mb-1 tabular-nums">$2.5M in closed-won revenue</div>
                    <div className="text-[15px] font-normal leading-[1.5] text-panel-body">Influenced by the organic inbound engine built at <a href="https://www.zenskar.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Zenskar</a>.</div>
                  </div>
                  <div>
                    <div className="font-sans font-bold text-[18px] text-panel-heading mb-1 tabular-nums">Contributed to <a href="https://web3auth.io/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Web3Auth</a> crossing $1M ARR</div>
                    <div className="text-[15px] font-normal leading-[1.5] text-panel-body">Through PR, X, customer stories, partner marketing, and events.</div>
                  </div>
                  <div>
                    <div className="font-sans font-bold text-[18px] text-panel-heading mb-1 tabular-nums">6 startups</div>
                    <div className="text-[15px] font-normal leading-[1.5] text-panel-body">Venture-backed tech startups where I built inbound marketing engines</div>
                  </div>
                  <div>
                    <div className="font-sans font-bold text-[18px] text-panel-heading mb-1 tabular-nums">9-person creative team</div>
                    <div className="text-[15px] font-normal leading-[1.5] text-panel-body">Scaled and led across content, design, and production.</div>
                  </div>
                  <div>
                    <div className="font-sans font-bold text-[18px] text-panel-heading mb-1 tabular-nums">45% average newsletter open rate</div>
                    <div className="text-[15px] font-normal leading-[1.5] text-panel-body">Across <a href="https://www.zenskar.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Zenskar</a>'s owned audience.</div>
                  </div>"""
                  
content = content.replace(startup_marketer_old, startup_marketer_new)

# 3. Realign columns
# Changing <div className="flex flex-col gap-6 flex-grow"> to 
# <div className="flex flex-col gap-6 flex-grow justify-between">
content = content.replace('<div className="flex flex-col gap-6 flex-grow">', '<div className="flex flex-col gap-6 flex-grow justify-between">')

with open('src/WorkPage.tsx', 'w') as f:
    f.write(content)

print("Patched WorkPage.tsx")
