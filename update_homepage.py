import re
with open('src/HomePage.tsx', 'r') as f:
    content = f.read()

# 1. HOMEPAGE HERO
content = re.sub(
    r'<span className="type-hero-eyebrow[^>]*>.*?</span>\s*<h1 className="type-hero-heading[^>]*>.*?</h1>\s*<p className="type-hero-subhead[^>]*>.*?</p>',
    r'<span className="type-hero-eyebrow block mb-[24px]">For B2B software, enterprise, and venture-backed companies</span>\n<h1 className="type-hero-heading text-balance mb-[24px]">I build marketing that outlasts the campaign.</h1>\n<p className="type-hero-subhead max-w-[55ch] text-balance mb-[48px]">Content, brand, PR, and founder voice, earned rather than bought, for companies from seed to public. The engine I built at Zenskar closed $1.5M in deals without spending a dollar on ads.</p>',
    content,
    flags=re.DOTALL
)
# replace 'Past work' CTA with 'See the work'
content = content.replace('>Past work</a>', '>See the work</a>')
content = content.replace('>Past work</Link>', '>See the work</Link>')

# 2. INVESTOR LOGO BAR
# <div className="mt-20 pt-8 border-t border-divider-light/10"> ... </div>
# Wait, this might be hard to match with a simple regex. Let's match Trusted by founders
content = re.sub(
    r'<div className="mt-20 pt-8 border-t border-divider-light/10">.*?Trusted by founders and teams backed by.*?</div>\s*</div>\s*</div>\s*</div>',
    r'<div className="mt-20 pt-8 border-t border-divider-light/10"><p className="text-[15px] leading-relaxed text-warm-white/80 max-w-[65ch]">Marketing built for Champ AI, Zenskar, Web3Auth, Masai School, and YourStory. Consulting for Accel, Prime Venture Partners, BoldCap, and Anthill Ventures.</p></div></div></div></div>',
    content,
    flags=re.DOTALL
)

# 3. BY THE NUMBERS
# <section className="metrics-section ...> ... </section>
# Replace with 4 items proof strip
proof_strip = """<section className="metrics-section py-20 lg:py-[120px] px-[var(--page-gutter)] border-b border-divider-dark bg-parchment relative">
  <div className="section-row">
    <div className="section-label-container">
      <div className="section-label-panel">
        <h2 className="type-section-label">Documentation, not a highlight reel.</h2>
        <div className="section-label-rule w-12 h-px mt-4 md:mt-5" style={{ background: "var(--burgundy)" }}></div>
      </div>
    </div>
    <div className="flex-1 min-w-0">
      <FadePanel>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex flex-col">
            <p className="type-body-muted text-pretty">$1.5M in closed-won deals, influenced by the inbound engine at Zenskar. Nine-person team, 60+ search-led articles in 90 days, no paid spend.</p>
          </div>
          <div className="flex flex-col">
            <p className="type-body-muted text-pretty">Part of the engine that carried Web3Auth past $1M ARR, through PR, partner launches, customer stories, and events.</p>
          </div>
          <div className="flex flex-col">
            <p className="type-body-muted text-pretty">$8.5M seed round, covered by Business Standard when Champ AI left stealth. Backed by Redpoint, Defy VC, SV Angel, and Instacart founder Max Mullen.</p>
          </div>
          <div className="flex flex-col">
            <p className="type-body-muted text-pretty">Five marketing functions built from zero. Four of them as the first or founding marketing hire.</p>
          </div>
        </div>
      </FadePanel>
    </div>
  </div>
</section>"""
content = re.sub(
    r'<section className="metrics-section.*?<h2 className="type-section-label">BY THE NUMBERS</h2>.*?</section>',
    proof_strip,
    content,
    flags=re.DOTALL
)

# 4. HOW I HELP
# 01 Extract
content = re.sub(
    r'<h3 className="type-card-heading-1 mb-4">Extract</h3>\s*<p className="type-body-muted max-w-\[45ch\] mb-8">.*?</p>',
    r'<h3 className="type-card-heading-1 mb-4">Extract</h3><p className="type-body-muted max-w-[45ch] mb-8">Founder interviews, customer conversations, competitive research. I find the idea the company already knows and hasn\'t named yet.</p>',
    content,
    flags=re.DOTALL
)
# 02 Frame
content = re.sub(
    r'<h3 className="type-card-heading-1 mb-4">Frame</h3>\s*<p className="type-body-muted max-w-\[45ch\] mb-8">.*?</p>',
    r'<h3 className="type-card-heading-1 mb-4">Frame</h3><p className="type-body-muted max-w-[45ch] mb-8">Category language, a founding narrative, a framework people repeat back. The idea gets a shape.</p>',
    content,
    flags=re.DOTALL
)
# 03 Make it travel
content = re.sub(
    r'<h3 className="type-card-heading-1 mb-4">Make it travel</h3>\s*<p className="type-body-muted max-w-\[45ch\] mb-8">.*?</p>',
    r'<h3 className="type-card-heading-1 mb-4">Make it travel</h3><p className="type-body-muted max-w-[45ch] mb-8">I build the system that carries the idea across the website, sales, PR, and social, so the company says the same thing everywhere.</p>',
    content,
    flags=re.DOTALL
)

# 4b. Condense the 6 cards 
# "Brand and founder positioning"
content = re.sub(
    r'(<h4 className="type-card-heading-3 mb-2 font-semibold">Brand and founder positioning\.</h4>\s*<p className="type-body-muted max-w-\[55ch\] mb-6 text-pretty">.*?)</p>\s*<ul.*?(?=<div className="bg-white)',
    r'\1</p><p className="type-body-muted max-w-[55ch]">Company positioning, founder narrative, website messaging, brand guidelines.</p></div>',
    content,
    flags=re.DOTALL
)
# Content and editorial systems
content = re.sub(
    r'(<h4 className="type-card-heading-3 mb-2 font-semibold">Content and editorial systems\.</h4>\s*<p className="type-body-muted max-w-\[55ch\] mb-6 text-pretty">.*?)</p>\s*<ul.*?(?=<div className="bg-white)',
    r'\1</p><p className="type-body-muted max-w-[55ch]">Long-form articles, newsletters, customer stories, SEO content.</p></div>',
    content,
    flags=re.DOTALL
)
# LinkedIn and X
content = re.sub(
    r'(<h4 className="type-card-heading-3 mb-2 font-semibold">LinkedIn and X\.</h4>\s*<p className="type-body-muted max-w-\[55ch\] mb-6 text-pretty">.*?)</p>\s*<ul.*?(?=<div className="bg-white|<div className="w-full flex)',
    r'\1</p><p className="type-body-muted max-w-[55ch]">Founder voice and pillars, posts and threads, launch distribution, publishing cadence.</p></div>',
    content,
    flags=re.DOTALL
)
# PR and crisis
content = re.sub(
    r'(<h4 className="type-card-heading-3 mb-2 font-semibold">PR and crisis communications\.</h4>\s*<p className="type-body-muted max-w-\[55ch\] mb-6 text-pretty">.*?)</p>\s*<ul.*?(?=<div className="bg-white)',
    r'\1</p><p className="type-body-muted max-w-[55ch]">Media strategy, press releases, spokesperson preparation, crisis response.</p></div>',
    content,
    flags=re.DOTALL
)
# Fundraises and launches
content = re.sub(
    r'(<h4 className="type-card-heading-3 mb-2 font-semibold">Fundraises and launches\.</h4>\s*<p className="type-body-muted max-w-\[55ch\] mb-6 text-pretty">.*?)</p>\s*<ul.*?(?=<div className="bg-white)',
    r'\1</p><p className="type-body-muted max-w-[55ch]">Announcement positioning, investor and partner coordination, launch-day sequencing, customer proof.</p></div>',
    content,
    flags=re.DOTALL
)
# Webinars and podcasts
content = re.sub(
    r'(<h4 className="type-card-heading-3 mb-2 font-semibold">Webinars and podcasts\.</h4>\s*<p className="type-body-muted max-w-\[55ch\] mb-6 text-pretty">.*?)</p>\s*<ul.*?(?=<div className="w-full flex)',
    r'\1</p><p className="type-body-muted max-w-[55ch]">Format strategy, guest booking, speaker preparation, production.</p></div>',
    content,
    flags=re.DOTALL
)

# 5. REMOVE WHY ME SECTION ENTIRELY
content = re.sub(
    r'<section id="why-me".*?</section>\s*(?=<section id="fit")',
    '',
    content,
    flags=re.DOTALL
)

# 6. BEST FIT
# Delete rows 2 and 5 from the current structure, and replace row 3
# Current rows:
# ROW 1: "Your product is strong..." / "Positioning that lives in a deck"
# ROW 2: "You're tired of translating..." / "Ghostwriting that floats above the product."
# ROW 3: "A defining moment is coming." / "Blog volume on a retainer."
# ROW 4: "You want a public voice with weight." / "A social calendar hunting for content."
# Wait, "Best fit" has "Where I fit" and "Where I don't".
# Section 12 says:
# Where I fit:
# 1. Your product is strong and the market still can't place it.
# 2. You want a public voice with weight.
# 3. Your story hasn't kept up with what the company became. -> "The product, the team, and the customer base outgrew the narrative you raised your last round on."
# Where I don't:
# 1. Ghostwriting that floats above the product.
# 2. A social calendar hunting for content.
# 3. Rented attention with a deadline. -> "Paid acquisition and performance marketing that stop producing the day the spending stops. I don't run paid campaigns."
# Let's replace the whole inner structure of the "Best fit" section

new_best_fit = """<div className="bg-white rounded-[4px] p-8 md:p-12 lg:p-16 border border-divider-dark/10 shadow-sm relative overflow-hidden">
              {/* Desktop Headers */}
              <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-12 mb-8 pb-4 border-b border-divider-light">
                <h3 className="type-section-heading-burgundy !font-normal text-[20px]">Where I fit</h3>
                <h3 className="type-section-heading-burgundy !font-normal text-[20px]">Where I don't</h3>
              </div>
              
              {/* ROW 1 */}
              <div className="flex flex-col md:grid md:grid-cols-2 gap-8 lg:gap-12 pb-8 border-b border-divider-light">
                <div className="flex flex-col">
                  <div className="md:hidden mb-3">
                    <span className="type-section-heading-burgundy !font-normal text-[20px]">Where I fit</span>
                  </div>
                  <h4 className="type-card-heading-3 mb-2 font-semibold">Your product is strong and the market still can't place it.</h4>
                  <p className="type-body-muted max-w-[55ch] text-pretty">Buyers understand what it does. Nobody, including the sales deck, can say why it wins.</p>
                </div>
                <div className="flex flex-col">
                  <div className="md:hidden mb-3 mt-4 pt-6 border-t border-divider-light/50">
                    <span className="type-section-heading-burgundy !font-normal text-[20px]">Where I don't</span>
                  </div>
                  <h4 className="type-card-heading-3 mb-2 font-semibold">Ghostwriting that floats above the product.</h4>
                  <p className="type-body-muted max-w-[55ch] text-pretty">Posts assembled from interviews, written by someone who's never opened the docs or joined a customer call.</p>
                </div>
              </div>
              
              {/* ROW 2 */}
              <div className="flex flex-col md:grid md:grid-cols-2 gap-8 lg:gap-12 py-8 border-b border-divider-light">
                <div className="flex flex-col">
                  <div className="md:hidden mb-3">
                    <span className="type-section-heading-burgundy !font-normal text-[20px]">Where I fit</span>
                  </div>
                  <h4 className="type-card-heading-3 mb-2 font-semibold">You want a public voice with weight.</h4>
                  <p className="type-body-muted max-w-[55ch] text-pretty">The company needs to be heard. You'd rather stay quiet than post engagement bait under your own name.</p>
                </div>
                <div className="flex flex-col">
                  <div className="md:hidden mb-3 mt-4 pt-6 border-t border-divider-light/50">
                    <span className="type-section-heading-burgundy !font-normal text-[20px]">Where I don't</span>
                  </div>
                  <h4 className="type-card-heading-3 mb-2 font-semibold">A social calendar hunting for content.</h4>
                  <p className="type-body-muted max-w-[55ch] text-pretty">Slots to fill every week, with the search for something worth saying starting after the calendar's built.</p>
                </div>
              </div>

              {/* ROW 3 */}
              <div className="flex flex-col md:grid md:grid-cols-2 gap-8 lg:gap-12 pt-8">
                <div className="flex flex-col">
                  <div className="md:hidden mb-3">
                    <span className="type-section-heading-burgundy !font-normal text-[20px]">Where I fit</span>
                  </div>
                  <h4 className="type-card-heading-3 mb-2 font-semibold">Your story hasn't kept up with what the company became.</h4>
                  <p className="type-body-muted max-w-[55ch] text-pretty">The product, the team, and the customer base outgrew the narrative you raised your last round on.</p>
                </div>
                <div className="flex flex-col">
                  <div className="md:hidden mb-3 mt-4 pt-6 border-t border-divider-light/50">
                    <span className="type-section-heading-burgundy !font-normal text-[20px]">Where I don't</span>
                  </div>
                  <h4 className="type-card-heading-3 mb-2 font-semibold">Rented attention with a deadline.</h4>
                  <p className="type-body-muted max-w-[55ch] text-pretty">Paid acquisition and performance marketing that stop producing the day the spending stops. I don't run paid campaigns.</p>
                </div>
              </div>
            </div>"""

content = re.sub(
    r'<div className="bg-white rounded-\[4px\].*?</div>\s*</FadePanel>',
    new_best_fit + '\n          </FadePanel>',
    content,
    flags=re.DOTALL
)

# 7. FINAL CTA
# "If your product is ahead of its language, that's where we start." -> "Seed to public, in B2B software and venture capital. If the fit is right, the first call will make that obvious."
content = content.replace(
    "If your product is ahead of its language, that's where we start.",
    "Seed to public, in B2B software and venture capital. If the fit is right, the first call will make that obvious."
)

with open('src/HomePage.tsx', 'w') as f:
    f.write(content)
