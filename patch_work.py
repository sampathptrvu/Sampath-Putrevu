import re

with open('src/WorkPage.tsx', 'r') as f:
    content = f.read()

# 1. Add numbers strip
old_strip = """          <section className="work-list-panel">
            
            <div className="work-entry">"""
new_strip = """          <section className="work-list-panel">
            <p className="font-sans text-[14px] md:text-[15px] font-medium text-burgundy mb-10 md:whitespace-nowrap text-center text-balance leading-relaxed">
              $2.5M closed-won influenced · 9-person team built and led · 350+ founders and investors interviewed · 6 venture-backed startups · 4 venture capital firms
            </p>
            
            <div className="work-entry">"""
content = content.replace(old_strip, new_strip)


# 2. Champ AI
old_champ = """            <div className="work-entry">
              <h3 className="type-card-heading-1 mb-3">Moved the conversation from software to outcomes.</h3>
              <p className="type-card-heading-3 mt-4"><a href="https://www.champ.ai/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Champ AI</a> &middot; Fractional VP Marketing &middot; <a href="https://www.redpoint.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Redpoint</a>-backed, built by former Instacart engineering leaders</p>
              <p className="work-body">
                Joined at the seed stage to define how the company talked about itself. Developed the category narrative that positions Champ as a way to buy outcomes without building infrastructure. Owned the seed round announcement from first draft to distribution, built the founder's voice across LinkedIn and X, and ran the webinar engine as the primary demand channel. The category had no settled name, so the language had to teach the market what it was looking at while the product was still proving it.
              </p>
            </div>"""
new_champ = """            <div className="work-entry">
              <h3 className="type-card-heading-1 mb-3">Moved the conversation from software to outcomes.</h3>
              <p className="type-card-heading-3 mt-4"><a href="https://www.champ.ai/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Champ AI</a> &middot; Fractional VP Marketing &middot; <a href="https://www.redpoint.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Redpoint</a>-backed, built by former Instacart engineering leaders</p>
              <p className="work-body">
                Joined at the seed stage to define how the company talked about itself. Developed the category narrative that positions Champ as a way to buy outcomes without building infrastructure, and against legacy outsourcing rather than competing on AI features alone. Owned the $8.5M seed announcement from first draft to distribution, including coverage in Business Standard, built the founder’s voice across LinkedIn and X, and ran the webinar engine as the primary demand channel. The category had no settled name, so the language had to teach the market what it was looking at while the product was still proving it.
              </p>
            </div>"""
content = content.replace(old_champ, new_champ)

# 3. Zenskar
old_zen = """            <div className="work-entry">
              <h3 className="type-card-heading-1 mb-3">Built the inbound engine behind $1.5M in closed-won deals.</h3>
              <p className="type-card-heading-3 mt-4"><a href="https://www.zenskar.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Zenskar</a> &middot; Head of Content and Brand &middot; <a href="https://www.bvp.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Bessemer</a>-backed billing and revenue infrastructure</p>
              <p className="work-body">
                Led brand and inbound for a product that asked the market to unlearn how it priced software. Developed the positioning, the website narrative, and the content system that influenced about $1.5M in closed-won deals, alongside a newsletter that held a 45% average open rate. The product challenged an established billing model, so every piece had to teach the problem before it could sell the answer.
              </p>
            </div>"""
new_zen = """            <div className="work-entry">
              <h3 className="type-card-heading-1 mb-3">Built the inbound engine behind $1.5M in closed-won deals.</h3>
              <p className="type-card-heading-3 mt-4"><a href="https://www.zenskar.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Zenskar</a> &middot; Head of Content and Brand &middot; <a href="https://www.bvp.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Bessemer</a>-backed billing and revenue infrastructure</p>
              <p className="work-body">
                Led brand and inbound for a product that asked the market to unlearn how it priced software. Built and led a nine-person team across brand, founder marketing, editorial, search, design and distribution, developed the positioning and website narrative, and shipped 60+ search-led articles in under 90 days. The system influenced about $1.5M in closed-won deals, alongside a newsletter that held a 45% average open rate and TechCrunch coverage of the company’s announcements. The product challenged an established billing model, so every piece had to teach the problem before it could sell the answer.
              </p>
            </div>"""
content = content.replace(old_zen, new_zen)

# 4. Web3Auth
old_web = """            <div className="work-entry">
              <h3 className="type-card-heading-1 mb-3">Ran the story end to end, from partner launches to crisis response.</h3>
              <p className="type-card-heading-3 mt-4"><a href="https://web3auth.io/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Web3Auth</a> &middot; Communications and Content Lead &middot; <a href="https://www.peakxv.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Peak XV</a>-backed wallet infrastructure, acquired by Consensys in 2025</p>
              <p className="work-body">
                Built the content and brand engine from nothing: CMS, style guides, SEO foundation, verbal tone. Owned PR for global partner launches including <a href="https://www.fox.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Fox.com</a>, <a href="https://trustwallet.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Trust Wallet</a>, <a href="https://www.skplanet.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">SK Planet</a>, and <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Google Firebase</a>. Wrote the case studies documenting what customers achieved on the product, including Pop Social's 35% rise in signups after integrating and the 100,000+ wallets created with Treasure Chess. When the Magic Link phishing attack and the MPC protocol attacks hit, I wrote the public statements.
              </p>
            </div>"""
new_web = """            <div className="work-entry">
              <h3 className="type-card-heading-1 mb-3">Ran the story end to end, from partner launches to crisis response.</h3>
              <p className="type-card-heading-3 mt-4"><a href="https://web3auth.io/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Web3Auth</a> &middot; Communications and Content Lead &middot; <a href="https://www.peakxv.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Peak XV</a>-backed wallet infrastructure, acquired by Consensys in 2025</p>
              <p className="work-body">
                Built the content and brand engine from nothing: CMS, style guides, SEO foundation, verbal tone. Owned PR for global partner launches including <a href="https://www.fox.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Fox.com</a>, <a href="https://trustwallet.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Trust Wallet</a>, <a href="https://www.skplanet.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">SK Planet</a> and <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Google Firebase</a>, earning coverage in Bloomberg and TechCrunch. Wrote the case studies documenting what customers achieved on the product: Pop Social’s 35% rise in signups after integrating, the 100,000+ wallets created with Treasure Chess, and social logins reaching a quarter of Biconomy’s users. When the Magic Link phishing attack and the MPC protocol attacks hit, I wrote the public statements.
              </p>
            </div>"""
content = content.replace(old_web, new_web)

# 5. Accel
old_accel = """            <div className="work-entry">
              <h3 className="type-card-heading-1 mb-3">Turned a fund's private conviction into public reference material.</h3>
              <p className="type-card-heading-3 mt-4"><a href="https://www.accel.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Accel</a> &middot; Marketer in Residence &middot; SeedToScale, the knowledge platform of one of India's most active early-stage funds</p>
              <p className="work-body">
                Built SeedToScale with the team from the ground up and produced 100+ editorial assets across foundational long-form resources, founder frameworks, and podcasts. The job was turning the tacit knowledge of founders and investors into frameworks the ecosystem could actually use. Kunal Shah's Delta 4 theory is the clearest example: the conviction was his, and the work here named it, structured it, and published it in a form founders still cite.
              </p>
            </div>"""
new_accel = """            <div className="work-entry">
              <h3 className="type-card-heading-1 mb-3">Turned a fund’s private conviction into public reference material.</h3>
              <p className="type-card-heading-3 mt-4"><a href="https://www.accel.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Accel</a> &middot; Marketing Consultant - Brand and Content</p>
              <p className="work-body">
                Built SeedToScale.com with the team from the ground up and produced 100+ editorial assets across foundational long-form resources, founder frameworks and podcasts. The job was turning the tacit knowledge of founders and investors into frameworks the ecosystem could actually use. Kunal Shah’s Delta 4 theory is the clearest example: the conviction was his, and the work here named it, structured it, and published it in a form founders still cite. The same work later extended to editorial and thought leadership for Prime Venture Partners, BoldCap and Anthill Ventures.
              </p>
            </div>"""
content = content.replace(old_accel, new_accel)

with open('src/WorkPage.tsx', 'w') as f:
    f.write(content)

print(content.count("closed-won influenced · 9-person team built and led"))
print(content.count("Moved the conversation from software to outcomes."))
print(content.count("Built the inbound engine behind $1.5M in closed-won deals."))
print(content.count("Ran the story end to end, from partner launches to crisis response."))
print(content.count("Turned a fund’s private conviction into public reference material."))

