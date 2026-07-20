const fs = require('fs');
const file = 'src/WorkPage.tsx';
let content = fs.readFileSync(file, 'utf8');

const newWorkSection = `        {/* Selected Work */}
        <section className="max-w-5xl mx-auto px-6 py-8 md:py-12">
          <FadePanel className="w-full">
            <h2 className="font-display font-normal text-[32px] md:text-[40px] text-text-on-glass mb-10 leading-[1.05]">Work across venture, AI, SaaS, and startup media.</h2>
            
            <div className="flex flex-col border-b border-surface-divider pb-8 mb-8">
              <h3 className="font-sans text-[20px] font-bold text-[#6A2B2B] mb-1">Champ AI</h3>
              <p className="font-sans text-[18px] font-semibold text-text-on-glass-secondary mb-3">Redpoint-backed AI automation platform built by ex-Instacart founders.</p>
              <p className="font-sans text-[16px] leading-[1.6] text-text-on-glass-secondary max-w-[76ch]">
                Joined as fractional VP Marketing at the seed stage to define how the company talked about itself. Developed the category narrative positioning Champ as a way to buy outcomes without building infrastructure — moving the conversation away from software and toward business results. Owned the seed round announcement, built the founder voice across LinkedIn and X, and ran the webinar engine as the primary demand channel.
              </p>
            </div>
            
            <div className="flex flex-col border-b border-surface-divider pb-8 mb-8">
              <h3 className="font-sans text-[20px] font-bold text-[#6A2B2B] mb-1">Zenskar</h3>
              <p className="font-sans text-[18px] font-semibold text-text-on-glass-secondary mb-3">Bessemer-backed billing and revenue infrastructure for modern SaaS.</p>
              <p className="font-sans text-[16px] leading-[1.6] text-text-on-glass-secondary max-w-[76ch]">
                Built the brand and inbound engine for a product that required the market to unlearn how it thought about pricing software. Developed the positioning, website narrative, and content system that contributed to a $2M sales pipeline. One of the harder narrative problems. The category did not yet exist when we started.
              </p>
            </div>
            
            <div className="flex flex-col border-b border-surface-divider pb-8 mb-8">
              <h3 className="font-sans text-[20px] font-bold text-[#6A2B2B] mb-1">Web3Auth</h3>
              <p className="font-sans text-[18px] font-semibold text-text-on-glass-secondary mb-3">Sequoia-backed wallet infrastructure, acquired by MetaMask in 2025.</p>
              <p className="font-sans text-[16px] leading-[1.6] text-text-on-glass-secondary max-w-[76ch]">
                Built the content and brand engine from scratch — CMS, style guides, SEO foundation, verbal tone. Owned PR end to end for global partner launches including Fox.com, Trust Wallet, SK Planet, and Google Firebase. Wrote the case studies that proved the product worked: Pop Social surged 35% in signups, Treasure Chess onboarded 100,000+ wallets. Also handled crisis communications during the Magic Link phishing attack and the MPC protocol attacks — some of the hardest writing the job asked for.
              </p>
            </div>
            
            <div className="flex flex-col border-b border-surface-divider pb-8 mb-8">
              <h3 className="font-sans text-[20px] font-bold text-[#6A2B2B] mb-1">Accel</h3>
              <p className="font-sans text-[18px] font-semibold text-text-on-glass-secondary mb-3">The knowledge platform of one of India's most active early-stage funds.</p>
              <p className="font-sans text-[16px] leading-[1.6] text-text-on-glass-secondary max-w-[76ch]">
                As Consulting Marketer in Residence, built SeedToScale, Accel's editorial platform, from the ground up. Helped turn the tacit knowledge of founders and investors into frameworks the ecosystem could actually use. The Delta 4 theory — Kunal Shah's now widely cited mental model — was named, structured, and published through this platform.
              </p>
            </div>
            
            <div className="flex flex-col border-b border-surface-divider pb-8 mb-8">
              <h3 className="font-sans text-[20px] font-bold text-[#6A2B2B] mb-1">Masai School</h3>
              <p className="font-sans text-[18px] font-semibold text-text-on-glass-secondary mb-3">India Quotient-backed edtech that went from Series A to Series B and two acquisitions.</p>
              <p className="font-sans text-[16px] leading-[1.6] text-text-on-glass-secondary max-w-[76ch]">
                Came in as the first marketing hire and defined the brand from zero — content guidelines, style guides, web layouts, social presence. PR lead across every significant company moment: Series A in CNBC and Economic Times, Series B in MoneyControl, and two acquisitions covered in Mint, VCCircle, and Business World. Also placed a thought leadership piece in the Indian Express. The kind of role where you own whatever the company needs said next.
              </p>
            </div>
            
            <div className="flex flex-col">
              <h3 className="font-sans text-[20px] font-bold text-[#6A2B2B] mb-1">YourStory</h3>
              <p className="font-sans text-[18px] font-semibold text-text-on-glass-secondary mb-3">India's most-read startup media publication.</p>
              <p className="font-sans text-[16px] leading-[1.6] text-text-on-glass-secondary max-w-[76ch]">
                Spent 3.5 years profiling the founders building India's internet economy — across Techie Tuesdays, The Turning Point, and The Product Roadmap. Interviewed Dharmesh Shah, the Postman founders, and hundreds of operators at inflection points in their companies. This is where I learned that the most important thing a founder says is rarely the first thing they say.
              </p>
            </div>
          </FadePanel>
        </section>`;

// Let's replace the Featured Case Studies and Work History with the new section
const startRegex = /\{\/\* Featured Case Studies \*\/\}/;
const endRegex = /\{\/\* Final CTA \*\/\}/;

const before = content.substring(0, content.search(startRegex));
const after = content.substring(content.search(endRegex));

content = before + newWorkSection + '\n\n        ' + after;

// Also remove `pastWorkCategories` from WorkPage.tsx
const pastWorkCategoriesRegex = /const pastWorkCategories = \[[\s\S]*?\];\n/;
content = content.replace(pastWorkCategoriesRegex, '');

fs.writeFileSync(file, content, 'utf8');
console.log('Work page updated.');
