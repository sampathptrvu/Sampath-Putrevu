import re

with open('src/WorkPage.tsx', 'r') as f:
    content = f.read()

# 1. Intro
old_intro = """            <p className="font-sans text-[19px] font-semibold text-warm-white mb-2">
              Fractional VP Marketing, narrative, brand, and PR for AI-native and technical companies.
            </p>
            <p className="type-hero-description mb-[32px]">
              Work across startup journalism, venture editorial platforms, AI and B2B SaaS. Each project began with something the company understood internally and needed the market to understand clearly.
            </p>"""
new_intro = """            <p className="type-hero-description mb-[32px]">
              Fractional VP Marketing, narrative, brand and PR for AI-native and technical companies. Each project began with something the company understood internally and needed the market to understand clearly.
            </p>"""
content = content.replace(old_intro, new_intro)

old_h2 = """            <h2 className="type-section-heading mb-8 text-balance">Work across venture, AI, SaaS, and startup media.</h2>"""
content = content.replace(old_h2, "")

# 2. Champ AI
content = content.replace("built by former Instacart founders", "built by former Instacart engineering leaders")

# 3. Zenskar
content = content.replace("Built the inbound engine behind $1.5M in qualified pipeline.", "Built the inbound engine behind $1.5M in closed-won deals.")
content = content.replace("the content system that contributed to a $1.5M qualified sales pipeline", "the content system that influenced about $1.5M in closed-won deals")

# 4. Web3Auth
content = content.replace("Sequoia-backed", "Peak XV-backed")
content = content.replace("acquired by MetaMask in 2025", "acquired by Consensys in 2025")
content = content.replace("from scratch:", "from nothing:")
content = content.replace(" Some of the hardest writing the job asked for.", "")

# 5. Accel
content = content.replace("Consulting Marketer in Residence", "Marketer in Residence")

# 6. Masai School
content = content.replace("India Quotient-backed edtech", "Omidyar-backed edtech")
content = content.replace(" The kind of role where you own whatever the company needs said next.", "")

# 7. YourStory
content = content.replace("India's most-read startup media publication", "India’s TechCrunch")
content = content.replace("built The Product Roadmap from scratch", "built The Product Roadmap from the ground up")
content = content.replace("interviewing Dharmesh Shah, the Postman founders, and 350+ operators", "interviewing Dharmesh Shah, Razorpay’s Shashank Kumar, Google Maps India creator Lalitesh Katragadda, the Postman founders, and 350+ operators")
content = content.replace("Spent 4 years", "Spent four years")

# 8. Closing CTA
content = content.replace('<h2 className="type-cta-heading mb-4 tracking-[-0.015em] text-center">The story is the strategy.</h2>\n        ', '')

with open('src/WorkPage.tsx', 'w') as f:
    f.write(content)
print("Patched WorkPage.tsx")
