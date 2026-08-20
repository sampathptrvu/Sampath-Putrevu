import { useMetadata } from './useMetadata';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './Header';
import { Mail } from 'lucide-react';
import linkedinIcon from './linkedin-icon.png';

export default function HowIHelpPage() {
  const location = useLocation();

  useMetadata({
    title: "How I help — Sampath Putrevu",
    description: "Seed to public, in B2B software and venture capital. Narrative architecture and distribution.",
    canonical: "https://sampathputrevu.com/how-i-help",
    ogTitle: "How I help — Sampath Putrevu",
    ogDescription: "Seed to public, in B2B software and venture capital. Narrative architecture and distribution.",
    ogUrl: "https://sampathputrevu.com/how-i-help",
    ogType: "website"
  });

  useEffect(() => {
    if (location.hash === '#fit') {
      const el = document.getElementById('fit');
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-[100dvh] flex flex-col font-sans selection:bg-[var(--color-selection)] selection:text-[var(--color-text)]">
      <Header />
      
      <main className="flex-1 pb-16 lg:pb-32 pt-24 lg:pt-32">
        <section className="reveal-section site-container mb-[80px] lg:mb-[120px]">
          <h2 className="type-h2-statement mb-[48px] lg:mb-[64px] text-balance">
            A three-step loop, run the same way every time.
          </h2>
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-0 lg:gap-8">
            {/* Step 1 */}
            <div className="flex flex-col pb-[40px] lg:pb-0 border-b border-[var(--color-rule)] lg:border-b-0">
              <span className="type-step-numeral mb-[16px]">01</span>
              <h3 className="type-step-title mb-[12px]">Extract</h3>
              <p className="type-step-body">
                Founder interviews, customer conversations, competitive research. I find the idea the company already knows and hasn't named yet.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col py-[40px] lg:py-0 border-b border-[var(--color-rule)] lg:border-b-0">
              <span className="type-step-numeral mb-[16px]">02</span>
              <h3 className="type-step-title mb-[12px]">Frame</h3>
              <p className="type-step-body">
                Category language, a founding narrative, a framework people repeat back. The idea gets a shape.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col pt-[40px] lg:pt-0">
              <span className="type-step-numeral mb-[16px]">03</span>
              <h3 className="type-step-title mb-[12px]">Make it travel</h3>
              <p className="type-step-body">
                I build the system that carries the idea across the website, sales, PR, and social, so the company says the same thing everywhere.
              </p>
            </div>
          </div>
        </section>

        <section className="reveal-section site-container mb-[80px] lg:mb-[120px]">
          <h2 className="font-serif font-medium text-[32px] md:text-[40px] text-[var(--color-text)] mb-[48px] lg:mb-[64px]">
            Where the narrative runs.
          </h2>
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-x-8 gap-y-0 lg:gap-y-[64px]">
            {/* Cap 1 */}
            <div className="py-[32px] lg:py-0 border-b border-[var(--color-rule)] lg:border-none">
              <h3 className="type-capability-title mb-[12px]">1. Brand and founder positioning.</h3>
              <p className="type-capability-body">
                The company gets easier to explain, and every founder tells the story the same way to a customer, an investor, and a candidate. Company positioning, founder narrative, website messaging, brand guidelines.
              </p>
            </div>
            
            {/* Cap 2 */}
            <div className="py-[32px] lg:py-0 border-b border-[var(--color-rule)] lg:border-none">
              <h3 className="type-capability-title mb-[12px]">2. Content and editorial systems.</h3>
              <p className="type-capability-body">
                The company builds a library that keeps earning attention instead of starting over with every push. Long-form articles, newsletters, customer stories, SEO content.
              </p>
            </div>
            
            {/* Cap 3 */}
            <div className="py-[32px] lg:py-0 border-b border-[var(--color-rule)] lg:border-none">
              <h3 className="type-capability-title mb-[12px]">3. LinkedIn and X.</h3>
              <p className="type-capability-body">
                The founder builds a public voice people follow, one that becomes shorthand for what the company believes. Founder voice and pillars, posts and threads, launch distribution, publishing cadence.
              </p>
            </div>
            
            {/* Cap 4 */}
            <div className="py-[32px] lg:py-0 border-b border-[var(--color-rule)] lg:border-none">
              <h3 className="type-capability-title mb-[12px]">4. PR and crisis communications.</h3>
              <p className="type-capability-body">
                The company earns coverage in outlets the market already trusts, and has language ready when scrutiny is highest. Media strategy, press releases, spokesperson preparation, crisis response.
              </p>
            </div>
            
            {/* Cap 5 */}
            <div className="py-[32px] lg:py-0 border-b border-[var(--color-rule)] lg:border-none">
              <h3 className="type-capability-title mb-[12px]">5. Fundraises and launches.</h3>
              <p className="type-capability-body">
                A raise or a launch lands with a story that outlives the news cycle. Announcement positioning, investor and partner coordination, launch-day sequencing, customer proof.
              </p>
            </div>
            
            {/* Cap 6 */}
            <div className="py-[32px] lg:py-0 border-b border-[var(--color-rule)] lg:border-none">
              <h3 className="type-capability-title mb-[12px]">6. Webinars and podcasts.</h3>
              <p className="type-capability-body">
                The company turns what it knows into a recurring format people come back to. Format strategy, guest booking, speaker preparation, production.
              </p>
            </div>
          </div>
        </section>

        

        <section id="fit" className="reveal-section site-container scroll-mt-[120px] mb-[80px] lg:mb-[120px]">
          <div className="editorial-grid hidden lg:grid">
            <div className="editorial-reading grid grid-cols-[1fr_1px_1fr] gap-x-8 pb-[28px] border-b border-[var(--color-rule)]">
              <h2 className="type-fit-column-heading">Where I fit</h2>
              <div className="bg-[var(--color-rule)] w-px h-full"></div>
              <h2 className="type-fit-column-heading">Where I don't</h2>
            </div>
          </div>

          <div className="editorial-grid">
            <div className="editorial-reading flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_1px_1fr] lg:gap-x-8 py-[32px] lg:py-[28px] border-b border-[var(--color-rule)]">
              <div className="flex flex-col">
                <span className="lg:hidden font-[var(--font-sans)] font-medium text-[12px] uppercase tracking-wider mb-[12px] block text-[var(--color-text)]">Where I fit</span>
                <h3 className="type-fit-row-headline mb-[10px]">Your product is strong and the market still can't place it.</h3>
                <p className="type-fit-row-body">Buyers understand what it does. Nobody, including the sales deck, can say why it wins.</p>
              </div>
              <div className="hidden lg:block bg-[var(--color-rule)] w-px h-full"></div>
              <div className="flex flex-col">
                <span className="lg:hidden font-[var(--font-sans)] font-medium text-[12px] uppercase tracking-wider mb-[12px] block text-[var(--color-text)]">Where I don't</span>
                <h3 className="type-fit-row-headline mb-[10px]">Ghostwriting that floats above the product.</h3>
                <p className="type-fit-row-body">Posts assembled from interviews, written by someone who's never opened the docs or joined a customer call.</p>
              </div>
            </div>
          </div>

          <div className="editorial-grid">
            <div className="editorial-reading flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_1px_1fr] lg:gap-x-8 py-[32px] lg:py-[28px] border-b border-[var(--color-rule)]">
              <div className="flex flex-col">
                <span className="lg:hidden font-[var(--font-sans)] font-medium text-[12px] uppercase tracking-wider mb-[12px] block text-[var(--color-text)]">Where I fit</span>
                <h3 className="type-fit-row-headline mb-[10px]">You want a public voice with weight.</h3>
                <p className="type-fit-row-body">The company needs to be heard. You'd rather stay quiet than post engagement bait under your own name.</p>
              </div>
              <div className="hidden lg:block bg-[var(--color-rule)] w-px h-full"></div>
              <div className="flex flex-col">
                <span className="lg:hidden font-[var(--font-sans)] font-medium text-[12px] uppercase tracking-wider mb-[12px] block text-[var(--color-text)]">Where I don't</span>
                <h3 className="type-fit-row-headline mb-[10px]">A social calendar hunting for content.</h3>
                <p className="type-fit-row-body">Slots to fill every week, with the search for something worth saying starting after the calendar's built.</p>
              </div>
            </div>
          </div>

          <div className="editorial-grid reveal-section group">
            <div className="editorial-reading flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_1px_1fr] lg:gap-x-8 pt-[32px] pb-0 lg:py-[28px]">
              <div className="flex flex-col">
                <span className="lg:hidden font-[var(--font-sans)] font-medium text-[12px] uppercase tracking-wider mb-[12px] block text-[var(--color-text)]">Where I fit</span>
                <h3 className="type-fit-row-headline mb-[10px]">Your story hasn't kept up with what the company became.</h3>
                <p className="type-fit-row-body">The product, the team, and the customer base outgrew the narrative you raised your last round on.</p>
              </div>
              <div className="hidden lg:block bg-[var(--color-rule)] w-px h-full"></div>
              <div className="flex flex-col relative">
                <span className="lg:hidden font-[var(--font-sans)] font-medium text-[12px] uppercase tracking-wider mb-[12px] block text-[var(--color-text)]">Where I don't</span>
                <h3 className="type-fit-row-headline mb-[10px]">Rented attention with a deadline.</h3>
                <p className="type-fit-row-body">Paid acquisition and performance marketing that stop producing the day the spending stops. I don't run paid campaigns.</p>
              </div>
            </div>
            <div className="editorial-margin reveal-annotation lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
              <div className="editorial-margin-tick"></div>
              <p className="type-margin-note">I don't run paid campaigns.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="reveal-section site-container pt-[32px] flex flex-col items-center text-center">
          <p className="type-cta-statement max-w-[680px] mb-[32px] text-balance">
            Seed to public, in B2B software and venture capital. If the fit is right, the first call will make that obvious.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/in/sampathputrevu/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-text)] focus:ring-offset-2 focus:ring-offset-[var(--color-page)]" aria-label="LinkedIn">
                <div className="w-[28px] h-[28px] bg-current shrink-0" style={{ maskImage: `url(${linkedinIcon})`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskImage: `url(${linkedinIcon})`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center' }} />
              </a>
              <a href="mailto:sampathptrvu@gmail.com" className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-text)] focus:ring-offset-2 focus:ring-offset-[var(--color-page)]" aria-label="Email">
                <Mail className="w-[28px] h-[28px] shrink-0" />
              </a>
            </div>
            <a 
                        href="https://cal.com/sampath-putrevu-z6jq0i"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center h-[44px] px-8 type-cta-button bg-[var(--color-text)] text-[var(--color-page)] hover:bg-[var(--color-accent)] transition-colors rounded-none focus:outline-none focus:ring-2 focus:ring-[var(--color-text)] focus:ring-offset-2 focus:ring-offset-[var(--color-page)] cursor-pointer"
                      >
                        Book a call
                      </a>
          </div>
        </section>
      </main>
    </div>
  );
}
