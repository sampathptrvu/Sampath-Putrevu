import fs from 'fs';

let content = fs.readFileSync('src/HomePage.tsx', 'utf-8');

const splitIndex = content.indexOf('<ByTheNumbersSection />');
if (splitIndex === -1) throw new Error("Could not find <ByTheNumbersSection />");

const before = content.substring(0, splitIndex + '<ByTheNumbersSection />'.length);
const closingTagsIndex = content.lastIndexOf('</main>');
if (closingTagsIndex === -1) throw new Error("Could not find </main>");

const after = content.substring(closingTagsIndex);

const pass2 = `

        {/* How I help */}
        <section id="expertise" className="site-container scroll-mt-[100px] pt-[40px] lg:pt-[64px]">
          <h2 className="type-h2-statement mb-[32px] lg:mb-[48px] text-balance">
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
          <div className="rule-major mt-[48px] lg:mt-[64px] mb-[40px] lg:mb-[64px]"></div>
        </section>

        {/* Where the narrative runs */}
        <section className="site-container scroll-mt-[100px]">
          <h2 className="type-capability-heading mb-[32px] lg:mb-[40px] text-balance">
            Where the narrative runs.
          </h2>
          <div className="editorial-grid">
            <div className="editorial-reading flex flex-col">
              {/* Cap 1 */}
              <div className="py-[24px] lg:py-[32px] border-b border-[var(--color-rule)]">
                <h3 className="type-capability-title mb-[12px]">1. Brand and founder positioning.</h3>
                <p className="type-capability-body">
                  The company gets easier to explain, and every founder tells the story the same way to a customer, an investor, and a candidate. Company positioning, founder narrative, website messaging, brand guidelines.
                </p>
              </div>
              {/* Cap 2 */}
              <div className="py-[24px] lg:py-[32px] border-b border-[var(--color-rule)]">
                <h3 className="type-capability-title mb-[12px]">2. Content and editorial systems.</h3>
                <p className="type-capability-body">
                  The company builds a library that keeps earning attention instead of starting over with every push. Long-form articles, newsletters, customer stories, SEO content.
                </p>
              </div>
              {/* Cap 3 */}
              <div className="py-[24px] lg:py-[32px] border-b border-[var(--color-rule)]">
                <h3 className="type-capability-title mb-[12px]">3. LinkedIn and X.</h3>
                <p className="type-capability-body">
                  The founder builds a public voice people follow, one that becomes shorthand for what the company believes. Founder voice and pillars, posts and threads, launch distribution, publishing cadence.
                </p>
              </div>
              {/* Cap 4 */}
              <div className="py-[24px] lg:py-[32px] border-b border-[var(--color-rule)]">
                <h3 className="type-capability-title mb-[12px]">4. PR and crisis communications.</h3>
                <p className="type-capability-body">
                  The company earns coverage in outlets the market already trusts, and has language ready when scrutiny is highest. Media strategy, press releases, spokesperson preparation, crisis response.
                </p>
              </div>
              {/* Cap 5 */}
              <div className="py-[24px] lg:py-[32px] border-b border-[var(--color-rule)]">
                <h3 className="type-capability-title mb-[12px]">5. Fundraises and launches.</h3>
                <p className="type-capability-body">
                  A raise or a launch lands with a story that outlives the news cycle. Announcement positioning, investor and partner coordination, launch-day sequencing, customer proof.
                </p>
              </div>
              {/* Cap 6 */}
              <div className="py-[24px] lg:py-[32px]">
                <h3 className="type-capability-title mb-[12px]">6. Webinars and podcasts.</h3>
                <p className="type-capability-body">
                  The company turns what it knows into a recurring format people come back to. Format strategy, guest booking, speaker preparation, production.
                </p>
              </div>
              <div className="pt-[32px]">
                <Link to="/work" className="font-[var(--font-sans)] font-medium text-[14px] text-[var(--color-text)] hover:text-[var(--color-accent)] underline underline-offset-4 decoration-[1px]">
                  See the work &rarr;
                </Link>
              </div>
            </div>
          </div>
          <div className="rule-major mt-[48px] lg:mt-[64px] mb-[40px] lg:mb-[64px]"></div>
        </section>

        {/* Best Fit */}
        <section id="fit" className="site-container scroll-mt-[100px]">
          {/* DESKTOP/TABLET GRID (hidden on narrow mobile) */}
          <div className="hidden lg:block">
            {/* Headers */}
            <div className="editorial-grid">
              <div className="editorial-reading grid grid-cols-[1fr_1px_1fr] gap-x-8 pb-[28px] border-b border-[var(--color-rule)]">
                <h2 className="type-fit-column-heading">Where I fit</h2>
                <div className="bg-[var(--color-rule)] w-px h-full"></div>
                <h2 className="type-fit-column-heading">Where I don't</h2>
              </div>
            </div>
            
            {/* Row 1 */}
            <div className="editorial-grid">
              <div className="editorial-reading grid grid-cols-[1fr_1px_1fr] gap-x-8 py-[28px] border-b border-[var(--color-rule)] items-start">
                <div className="flex flex-col">
                  <h3 className="type-fit-row-headline mb-[10px]">Your product is strong and the market still can't place it.</h3>
                  <p className="type-fit-row-body">Buyers understand what it does. Nobody, including the sales deck, can say why it wins.</p>
                </div>
                <div className="bg-[var(--color-rule)] w-px h-full"></div>
                <div className="flex flex-col">
                  <h3 className="type-fit-row-headline mb-[10px]">Ghostwriting that floats above the product.</h3>
                  <p className="type-fit-row-body">Posts assembled from interviews, written by someone who's never opened the docs or joined a customer call.</p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="editorial-grid">
              <div className="editorial-reading grid grid-cols-[1fr_1px_1fr] gap-x-8 py-[28px] border-b border-[var(--color-rule)] items-start">
                <div className="flex flex-col">
                  <h3 className="type-fit-row-headline mb-[10px]">You want a public voice with weight.</h3>
                  <p className="type-fit-row-body">The company needs to be heard. You'd rather stay quiet than post engagement bait under your own name.</p>
                </div>
                <div className="bg-[var(--color-rule)] w-px h-full"></div>
                <div className="flex flex-col">
                  <h3 className="type-fit-row-headline mb-[10px]">A social calendar hunting for content.</h3>
                  <p className="type-fit-row-body">Slots to fill every week, with the search for something worth saying starting after the calendar's built.</p>
                </div>
              </div>
            </div>

            {/* Row 3 with MarginNote */}
            <div className="editorial-grid group">
              <div className="editorial-reading grid grid-cols-[1fr_1px_1fr] gap-x-8 py-[28px] items-start">
                <div className="flex flex-col">
                  <h3 className="type-fit-row-headline mb-[10px]">Your story hasn't kept up with what the company became.</h3>
                  <p className="type-fit-row-body">The product, the team, and the customer base outgrew the narrative you raised your last round on.</p>
                </div>
                <div className="bg-[var(--color-rule)] w-px h-full"></div>
                <div className="flex flex-col">
                  <h3 className="type-fit-row-headline mb-[10px]">Rented attention with a deadline.</h3>
                  <p className="type-fit-row-body">Paid acquisition and performance marketing that stop producing the day the spending stops. I don't run paid campaigns.</p>
                </div>
              </div>
              <div className="editorial-margin lg:justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="editorial-margin-tick hidden lg:block"></div>
                <p className="type-margin-note">I don't run paid campaigns.</p>
              </div>
            </div>
          </div>

          {/* MOBILE LIST (visible only on screens < 1024px) */}
          <div className="lg:hidden flex flex-col">
            {/* Pair 1 */}
            <div className="py-[32px] border-b border-[var(--color-rule)] flex flex-col gap-8">
              <div className="flex flex-col">
                <span className="font-[var(--font-sans)] font-500 text-[12px] uppercase tracking-wider mb-[12px] block text-[var(--color-text)]">Where I fit</span>
                <h3 className="type-fit-row-headline mb-[10px]">Your product is strong and the market still can't place it.</h3>
                <p className="type-fit-row-body">Buyers understand what it does. Nobody, including the sales deck, can say why it wins.</p>
              </div>
              <div className="flex flex-col">
                <span className="font-[var(--font-sans)] font-500 text-[12px] uppercase tracking-wider mb-[12px] block text-[var(--color-text)]">Where I don't</span>
                <h3 className="type-fit-row-headline mb-[10px]">Ghostwriting that floats above the product.</h3>
                <p className="type-fit-row-body">Posts assembled from interviews, written by someone who's never opened the docs or joined a customer call.</p>
              </div>
            </div>

            {/* Pair 2 */}
            <div className="py-[32px] border-b border-[var(--color-rule)] flex flex-col gap-8">
              <div className="flex flex-col">
                <span className="font-[var(--font-sans)] font-500 text-[12px] uppercase tracking-wider mb-[12px] block text-[var(--color-text)]">Where I fit</span>
                <h3 className="type-fit-row-headline mb-[10px]">You want a public voice with weight.</h3>
                <p className="type-fit-row-body">The company needs to be heard. You'd rather stay quiet than post engagement bait under your own name.</p>
              </div>
              <div className="flex flex-col">
                <span className="font-[var(--font-sans)] font-500 text-[12px] uppercase tracking-wider mb-[12px] block text-[var(--color-text)]">Where I don't</span>
                <h3 className="type-fit-row-headline mb-[10px]">A social calendar hunting for content.</h3>
                <p className="type-fit-row-body">Slots to fill every week, with the search for something worth saying starting after the calendar's built.</p>
              </div>
            </div>

            {/* Pair 3 */}
            <div className="py-[32px] flex flex-col gap-8 group">
              <div className="flex flex-col">
                <span className="font-[var(--font-sans)] font-500 text-[12px] uppercase tracking-wider mb-[12px] block text-[var(--color-text)]">Where I fit</span>
                <h3 className="type-fit-row-headline mb-[10px]">Your story hasn't kept up with what the company became.</h3>
                <p className="type-fit-row-body">The product, the team, and the customer base outgrew the narrative you raised your last round on.</p>
              </div>
              <div className="flex flex-col">
                <span className="font-[var(--font-sans)] font-500 text-[12px] uppercase tracking-wider mb-[12px] block text-[var(--color-text)]">Where I don't</span>
                <h3 className="type-fit-row-headline mb-[10px]">Rented attention with a deadline.</h3>
                <p className="type-fit-row-body">Paid acquisition and performance marketing that stop producing the day the spending stops. I don't run paid campaigns.</p>
                <div className="editorial-margin opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="editorial-margin-tick"></div>
                  <p className="type-margin-note">I don't run paid campaigns.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rule-major mt-[40px] lg:mt-[0px]"></div>
        </section>

        {/* Final CTA */}
        <section className="pt-[56px] lg:pt-[96px] pb-[40px] lg:pb-[64px]">
          <div className="site-container flex flex-col items-center text-center">
            <p className="type-cta-statement max-w-[680px] mb-[32px] text-balance">
              Seed to public, in B2B software and venture capital. If the fit is right, the first call will make that obvious.
            </p>
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
`;

fs.writeFileSync('src/HomePage.tsx', before + pass2 + after);
