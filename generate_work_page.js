import fs from 'fs';

const content = `import { useMetadata } from './useMetadata';
import { Link } from 'react-router-dom';
import Header from './Header';

export default function WorkPage() {
  useMetadata({
    title: "Past Work — Sampath Putrevu",
    description: "Ideas that outgrew the companies that made them. Past work across Champ AI, Zenskar, Web3Auth, Accel, Masai School, and YourStory.",
    canonical: "https://sampathputrevu.com/work",
    ogTitle: "Past Work — Sampath Putrevu",
    ogDescription: "Ideas that outgrew the companies that made them. Past work across Champ AI, Zenskar, Web3Auth, Accel, Masai School, and YourStory.",
    ogUrl: "https://sampathputrevu.com/work",
    ogType: "website"
  });

  return (
    <div className="min-h-screen selection:bg-[var(--color-selection)] selection:text-[var(--color-text)] font-sans text-[var(--color-text)]">
      <Header />
      
      <main className="pb-12">
        {/* Hero Section */}
        <section className="site-container pt-[48px] md:pt-[64px] lg:pt-[80px]">
          <div className="editorial-grid">
            <div className="editorial-reading flex flex-col items-start">
              <Link 
                to="/" 
                className="inline-block mb-[40px] font-[var(--font-sans)] font-medium text-[14px] text-[var(--color-text)] hover:text-[var(--color-accent)] underline underline-offset-4 decoration-[1px] transition-colors"
              >
                &larr; Back to homepage
              </Link>
              <span className="font-[var(--font-sans)] font-medium text-[12px] lg:text-[13px] uppercase tracking-[0.08em] text-[var(--color-text-secondary)] mb-[12px] lg:mb-[16px] block">
                Past work
              </span>
              <h1 className="font-[var(--font-serif)] font-semibold text-[34px] md:text-[44px] lg:text-[56px] leading-[1.12] tracking-[-0.005em] text-[var(--color-text)] mb-[16px] lg:mb-[24px]">
                Ideas that outgrew the companies that made them.
              </h1>
              <p className="font-[var(--font-sans)] font-normal text-[16px] lg:text-[17px] leading-[1.65] text-[var(--color-text)] max-w-[680px]">
                Roughly a decade across technology journalism, venture capital, and venture-backed startups. Five marketing functions built from zero, four of them as the first or founding hire.
              </p>
            </div>
          </div>
        </section>

        {/* Major Rule */}
        <div className="site-container">
          <div className="rule-major my-[40px] lg:my-[64px]"></div>
        </div>

        {/* Case 1: Champ AI */}
        <section className="site-container">
          <div className="editorial-grid">
            <div className="editorial-reading flex flex-col">
              <h2 className="font-[var(--font-serif)] font-semibold text-[22px] md:text-[26px] lg:text-[30px] leading-[1.2] tracking-[-0.005em] text-[var(--color-text)] max-w-[680px]">
                Moved the conversation from software to outcomes.
              </h2>
              <div className="h-[12px]"></div>
              <p className="font-[var(--font-sans)] font-medium text-[12px] lg:text-[13px] leading-[1.5] tracking-[0.01em] text-[var(--color-text-secondary)]">
                Champ AI &middot; Fractional VP Marketing &middot; Redpoint-backed, built by former Instacart engineering leaders
              </p>
              <div className="h-[16px] lg:h-[24px]"></div>
              <p className="font-[var(--font-sans)] font-normal text-[16px] lg:text-[17px] leading-[1.7] text-[var(--color-text)] max-w-[680px]">
                Joined at the seed stage to define how the company talked about itself. Built the category narrative that positions Champ as a way to buy outcomes without building infrastructure, competing against legacy outsourcing rather than on AI features alone. Led the launch out of stealth, including Business Standard coverage, alongside an $8.5M seed round backed by Redpoint, Defy VC, SV Angel, and Instacart founder Max Mullen. The category had no settled name, so the language had to teach the market what it was looking at while the product was still proving it.
              </p>
              <div className="h-[24px]"></div>
              <p className="font-[var(--font-sans)] font-medium text-[14px] text-[var(--color-text)]">
                Links: <a href="https://www.champ.ai/" className="underline underline-offset-4 decoration-[1px] text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors">Champ AI</a> &middot; <a href="[[LINK:BUSINESS_STANDARD_CHAMP_AI]]" className="underline underline-offset-4 decoration-[1px] text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors">Business Standard coverage</a>
              </p>
            </div>
          </div>
        </section>

        {/* Major Rule */}
        <div className="site-container">
          <div className="rule-major my-[40px] lg:my-[64px]"></div>
        </div>

        {/* Case 2: Zenskar */}
        <section className="site-container">
          <div className="editorial-grid">
            <div className="editorial-reading flex flex-col">
              <h2 className="font-[var(--font-serif)] font-semibold text-[22px] md:text-[26px] lg:text-[30px] leading-[1.2] tracking-[-0.005em] text-[var(--color-text)] max-w-[680px]">
                Built the inbound engine behind $1.5M in closed-won deals.
              </h2>
              <div className="h-[12px]"></div>
              <p className="font-[var(--font-sans)] font-medium text-[12px] lg:text-[13px] leading-[1.5] tracking-[0.01em] text-[var(--color-text-secondary)]">
                Zenskar &middot; Head of Content and Brand &middot; Bessemer-backed billing and revenue infrastructure
              </p>
              <div className="h-[16px] lg:h-[24px]"></div>
              <p className="font-[var(--font-sans)] font-normal text-[16px] lg:text-[17px] leading-[1.7] text-[var(--color-text)] max-w-[680px]">
                Led brand and inbound for a product that asked the market to unlearn how it priced software. Built and led a nine-person team across brand, founder marketing, editorial, search, design, and distribution. Developed the positioning and website narrative, and shipped 60+ search-led articles in under 90 days. The engine influenced $1.5M in closed-won deals with no paid spend, alongside a newsletter that held a 45% average open rate and TechCrunch coverage of the company's announcements. The product challenged an established billing model, so every piece had to teach the problem before it could sell the answer.
              </p>
              <div className="h-[24px]"></div>
              <p className="font-[var(--font-sans)] font-medium text-[14px] text-[var(--color-text)]">
                Links: <a href="https://www.zenskar.com/" className="underline underline-offset-4 decoration-[1px] text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors">Zenskar</a>
              </p>
            </div>
          </div>
        </section>

        {/* Major Rule */}
        <div className="site-container">
          <div className="rule-major my-[40px] lg:my-[64px]"></div>
        </div>

        {/* Case 3: Web3Auth */}
        <section className="site-container">
          <div className="editorial-grid">
            <div className="editorial-reading flex flex-col">
              <h2 className="font-[var(--font-serif)] font-semibold text-[22px] md:text-[26px] lg:text-[30px] leading-[1.2] tracking-[-0.005em] text-[var(--color-text)] max-w-[680px]">
                Ran the story end to end, from partner launches to crisis response.
              </h2>
              <div className="h-[12px]"></div>
              <p className="font-[var(--font-sans)] font-medium text-[12px] lg:text-[13px] leading-[1.5] tracking-[0.01em] text-[var(--color-text-secondary)]">
                Web3Auth &middot; Head of Content and Brand Marketing &middot; Sequoia-backed wallet infrastructure, later acquired by Consensys
              </p>
              <div className="h-[16px] lg:h-[24px]"></div>
              <p className="font-[var(--font-sans)] font-normal text-[16px] lg:text-[17px] leading-[1.7] text-[var(--color-text)] max-w-[680px]">
                Built the content and brand engine from nothing: CMS, style guides, SEO foundation, verbal tone. Owned PR for global partner launches including Fox.com, Trust Wallet, SK Planet, and Google Firebase, earning coverage in Bloomberg and TechCrunch. The work contributed to Web3Auth crossing $1M ARR. Wrote the case studies documenting what customers achieved on the product: Pop Social's 35% rise in signups after integrating, the 100,000+ wallets created with Treasure Chess, and social logins reaching a quarter of Biconomy's users. When the Magic Link phishing attack and the MPC protocol vulnerability disclosure hit, I wrote the public statements.
              </p>
              <div className="h-[24px]"></div>
              <p className="font-[var(--font-sans)] font-medium text-[14px] text-[var(--color-text)]">
                Links: <a href="https://web3auth.io/" className="underline underline-offset-4 decoration-[1px] text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors">Web3Auth</a> &middot; <a href="https://www.fox.com/" className="underline underline-offset-4 decoration-[1px] text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors">Fox.com</a> &middot; <a href="https://trustwallet.com/" className="underline underline-offset-4 decoration-[1px] text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors">Trust Wallet</a> &middot; <a href="https://firebase.google.com/" className="underline underline-offset-4 decoration-[1px] text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors">Google Firebase</a>
              </p>
            </div>
          </div>
        </section>

        {/* Major Rule */}
        <div className="site-container">
          <div className="rule-major my-[40px] lg:my-[64px]"></div>
        </div>

        {/* Case 4: Accel */}
        <section className="site-container">
          <div className="editorial-grid">
            <div className="editorial-reading flex flex-col">
              <h2 className="font-[var(--font-serif)] font-semibold text-[22px] md:text-[26px] lg:text-[30px] leading-[1.2] tracking-[-0.005em] text-[var(--color-text)] max-w-[680px]">
                Turned a fund's private conviction into public reference material.
              </h2>
              <div className="h-[12px]"></div>
              <p className="font-[var(--font-sans)] font-medium text-[12px] lg:text-[13px] leading-[1.5] tracking-[0.01em] text-[var(--color-text-secondary)]">
                Accel &middot; Marketing Consultant, Brand and Content
              </p>
              <div className="h-[16px] lg:h-[24px]"></div>
              <p className="font-[var(--font-sans)] font-normal text-[16px] lg:text-[17px] leading-[1.7] text-[var(--color-text)] max-w-[680px]">
                Helped build SeedToScale from the ground up: website design, brand language, CMS, and publishing infrastructure, followed by the writing and production of about 100 long-form resources, founder frameworks, and podcasts. Also consulted on brand and content for Prime Venture Partners, BoldCap, and Anthill Ventures. The work translated knowledge held by experienced founders, operators, and investors into material the wider startup ecosystem could understand and use.
              </p>
              <div className="h-[24px]"></div>
              <p className="font-[var(--font-sans)] font-medium text-[14px] text-[var(--color-text)]">
                Links: <a href="https://www.accel.com/" className="underline underline-offset-4 decoration-[1px] text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors">Accel</a> &middot; <a href="https://primevp.in/" className="underline underline-offset-4 decoration-[1px] text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors">Prime Venture Partners</a>
              </p>
            </div>
          </div>
        </section>

        {/* Major Rule */}
        <div className="site-container">
          <div className="rule-major my-[40px] lg:my-[64px]"></div>
        </div>

        {/* Case 5: Masai School */}
        <section className="site-container">
          <div className="editorial-grid">
            <div className="editorial-reading flex flex-col">
              <h2 className="font-[var(--font-serif)] font-semibold text-[22px] md:text-[26px] lg:text-[30px] leading-[1.2] tracking-[-0.005em] text-[var(--color-text)] max-w-[680px]">
                First marketing hire through Series A, Series B, and two acquisitions.
              </h2>
              <div className="h-[12px]"></div>
              <p className="font-[var(--font-sans)] font-medium text-[12px] lg:text-[13px] leading-[1.5] tracking-[0.01em] text-[var(--color-text-secondary)]">
                Masai School &middot; First Marketing Hire &middot; Omidyar-backed edtech
              </p>
              <div className="h-[16px] lg:h-[24px]"></div>
              <p className="font-[var(--font-sans)] font-normal text-[16px] lg:text-[17px] leading-[1.7] text-[var(--color-text)] max-w-[680px]">
                Came in as the first marketing hire and defined the brand from zero: content guidelines, style guides, web layouts, social presence. Led PR across every significant company moment, working directly with the founders on each one. Series A landed in CNBC and Economic Times, Series B in MoneyControl, and the two acquisitions in Mint, VCCircle, and Business World, with a thought leadership piece for the CEO placed in the Indian Express.
              </p>
              <div className="h-[24px]"></div>
              <p className="font-[var(--font-sans)] font-medium text-[14px] text-[var(--color-text)]">
                Links: <a href="https://www.masaischool.com/" className="underline underline-offset-4 decoration-[1px] text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors">Masai School</a>
              </p>
            </div>
          </div>
        </section>

        {/* Major Rule */}
        <div className="site-container">
          <div className="rule-major my-[40px] lg:my-[64px]"></div>
        </div>

        {/* Case 6: YourStory */}
        <section className="site-container">
          <div className="editorial-grid">
            <div className="editorial-reading flex flex-col">
              <h2 className="font-[var(--font-serif)] font-semibold text-[22px] md:text-[26px] lg:text-[30px] leading-[1.2] tracking-[-0.005em] text-[var(--color-text)] max-w-[680px]">
                Learned to find the real idea beneath a founder's first answer.
              </h2>
              <div className="h-[12px]"></div>
              <p className="font-[var(--font-sans)] font-medium text-[12px] lg:text-[13px] leading-[1.5] tracking-[0.01em] text-[var(--color-text-secondary)]">
                YourStory &middot; Technology Journalist &middot; India's largest startup publication
              </p>
              <div className="h-[16px] lg:h-[24px]"></div>
              <p className="font-[var(--font-sans)] font-normal text-[16px] lg:text-[17px] leading-[1.7] text-[var(--color-text)] max-w-[680px]">
                Owned Techie Tuesdays, created The Turning Point, and built The Product Roadmap from the ground up. Spent four years profiling the founders building India's internet economy, interviewing Dharmesh Shah, Razorpay's Shashank Kumar, Google Maps India creator Lalitesh Katragadda, the Postman founders, and 350+ operators at inflection points in their companies. This is where I learned that the most important thing a founder says is rarely the first thing they say.
              </p>
              <div className="h-[24px]"></div>
              <p className="font-[var(--font-sans)] font-medium text-[14px] text-[var(--color-text)]">
                Links: <a href="https://yourstory.com/" className="underline underline-offset-4 decoration-[1px] text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors">YourStory</a>
              </p>
            </div>
          </div>
        </section>

        {/* Major Rule */}
        <div className="site-container">
          <div className="rule-major my-[40px] lg:my-[64px]"></div>
        </div>

        {/* Final CTA */}
        <section className="site-container mb-[40px] lg:mb-[64px]">
          <div className="editorial-grid">
            <div className="editorial-reading flex flex-col items-start max-w-[680px]">
              <p className="font-[var(--font-serif)] font-semibold text-[22px] md:text-[24px] lg:text-[28px] leading-[1.3] text-[var(--color-text)] mb-[32px] text-balance">
                Seed to public, in B2B software and venture capital. If the fit is right, the first call will make that obvious.
              </p>
              <a 
                href="https://cal.com/sampath-putrevu-z6jq0i"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[44px] px-8 font-[var(--font-sans)] font-medium text-[14px] bg-[var(--color-text)] text-[var(--color-page)] hover:bg-[var(--color-accent)] transition-colors rounded-none focus:outline-none focus:ring-2 focus:ring-[var(--color-text)] focus:ring-offset-2 focus:ring-offset-[var(--color-page)] cursor-pointer"
              >
                Book a call
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
`;
fs.writeFileSync('src/WorkPage.tsx', content);
