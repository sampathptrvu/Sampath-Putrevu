import { useMetadata } from './useMetadata';
import { Link } from 'react-router-dom';
import Header from './Header';

export default function AboutPage() {
  useMetadata({
    title: "About — Sampath Putrevu",
    description: "Ten years learning what makes an idea travel.",
    canonical: "https://sampathputrevu.com/about",
    ogTitle: "About — Sampath Putrevu",
    ogDescription: "Ten years learning what makes an idea travel.",
    ogUrl: "https://sampathputrevu.com/about",
    ogType: "website"
  });

  return (
    <div className="min-h-screen selection:bg-[var(--color-selection)] selection:text-[var(--color-text)] font-sans text-[var(--color-text)]">
      <Header />
      
      <main className="pb-12">
        <section className="reveal-section site-container pt-[48px] md:pt-[64px] lg:pt-[80px]">
          <div className="editorial-grid">
            <div className="editorial-reading flex flex-col items-start">
              <Link 
                to="/" 
                className="inline-block mb-[40px] font-['Cabin'] font-medium text-[14px] text-[var(--color-text)] hover:text-[var(--color-accent)] underline underline-offset-4 decoration-[1px] transition-colors"
              >
                &larr; Back to homepage
              </Link>
              <span className="font-['Cabin'] font-medium text-[12px] lg:text-[13px] uppercase tracking-[0.08em] text-[var(--color-text-secondary)] mb-[12px] lg:mb-[16px] block">
                About
              </span>
              <h1 className="font-['Cabin'] font-semibold text-[34px] md:text-[44px] lg:text-[56px] leading-[1.12] tracking-[-0.005em] text-[var(--color-text)] mb-[16px] lg:mb-[24px]">
                Ten years learning what makes an idea travel.
              </h1>
              <div className="w-full h-px bg-[var(--color-rule)] mb-[32px] lg:mb-[48px]"></div>
            </div>
          </div>

          <div className="editorial-grid reveal-section">
            <div className="editorial-reading flex flex-col gap-[24px] items-start">
              <p className="font-['Cabin'] font-normal text-[16px] lg:text-[17px] leading-[1.7] text-[var(--color-text)] max-w-[680px]">
                I’m a writer, marketer, and a former tech journalist. I began as an engineer, learned to listen as a journalist, and found my life's work in marketing.
              </p>
              <p className="font-['Cabin'] font-normal text-[16px] lg:text-[17px] leading-[1.7] text-[var(--color-text)] max-w-[680px]">
                For 10 years, I’ve worked across technology journalism, venture capital, and startup marketing. I’m deeply invested in how tech companies are understood — how complex products find the right language, how founders build a voice, how ideas travel from the company to the market.
              </p>
              <p className="font-['Cabin'] font-normal text-[16px] lg:text-[17px] leading-[1.7] text-[var(--color-text)] max-w-[680px]">
                Today, I build marketing functions inside B2B software and venture-backed companies. I work closely with founders and CMOs on positioning, brand, content, PR, founder voice, and organic growth. All of it earned. No paid campaigns.
              </p>
              <p className="font-['Cabin'] font-normal text-[16px] lg:text-[17px] leading-[1.7] text-[var(--color-text)] max-w-[680px]">
                I spent 4 years as a tech journalist at YourStory — interviewing 350+ founders and operators including Dharmesh Shah (HubSpot), Cadir Lee (Zynga), and the founders of Zendesk and Postman.
              </p>
              <p className="font-['Cabin'] font-normal text-[16px] lg:text-[17px] leading-[1.7] text-[var(--color-text)] max-w-[680px]">
                I was the founding marketing hire at venture-backed startups including Champ AI, Zenskar, Web3Auth, and Masai School, building their marketing engines from zero.
              </p>
              <p className="font-['Cabin'] font-normal text-[16px] lg:text-[17px] leading-[1.7] text-[var(--color-text)] max-w-[680px]">
                At Accel, I helped build SeedToScale — the website, editorial voice, publishing engine, and long-form blogs and podcasts that followed.
              </p>
              <p className="font-['Cabin'] font-normal text-[16px] lg:text-[17px] leading-[1.7] text-[var(--color-text)] max-w-[680px]">
                The thread across all of it is the same: find the idea a company already believes but hasn’t said out loud, give it a shape the market can repeat, and build the system that helps it travel. I usually step in when a product is strong, but the story hasn't caught up.
              </p>
              <p className="font-['Cabin'] font-normal text-[16px] lg:text-[17px] leading-[1.7] text-[var(--color-text)] max-w-[680px]">
                Based in Bengaluru, India — usually somewhere in the middle of a long piece I haven't finished.
              </p>
              <p className="font-['Cabin'] font-normal text-[16px] lg:text-[17px] leading-[1.7] text-[var(--color-text)] max-w-[680px]">
                Reach out.
              </p>
              
              <div className="mt-[8px]">
                <Link to="/work" className="inline-flex items-center text-[16px] font-['Cabin'] font-semibold text-[var(--color-accent)] hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-page)] rounded-[2px]">
                  See past work &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
