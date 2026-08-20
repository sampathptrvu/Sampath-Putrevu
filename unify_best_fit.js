import fs from 'fs';

let content = fs.readFileSync('src/HomePage.tsx', 'utf-8');

const startIndex = content.indexOf('{/* Best Fit */}');
const endIndex = content.indexOf('{/* Final CTA */}');

const before = content.substring(0, startIndex);
const after = content.substring(endIndex);

const unified = `{/* Best Fit */}
        <section id="fit" className="site-container scroll-mt-[100px]">
          
          {/* Headers (Desktop Only) */}
          <div className="editorial-grid hidden lg:grid">
            <div className="editorial-reading grid grid-cols-[1fr_1px_1fr] gap-x-8 pb-[28px] border-b border-[var(--color-rule)]">
              <h2 className="type-fit-column-heading">Where I fit</h2>
              <div className="bg-[var(--color-rule)] w-px h-full"></div>
              <h2 className="type-fit-column-heading">Where I don't</h2>
            </div>
          </div>
          
          {/* Row 1 */}
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

          {/* Row 2 */}
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

          {/* Row 3 with MarginNote */}
          <div className="editorial-grid group">
            <div className="editorial-reading flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_1px_1fr] lg:gap-x-8 py-[32px] lg:py-[28px]">
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
                
                {/* Mobile MarginNote (inline below row 3 don't) */}
                <div className="lg:hidden editorial-margin mt-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="editorial-margin-tick"></div>
                  <p className="type-margin-note">I don't run paid campaigns.</p>
                </div>
              </div>
            </div>
            
            {/* Desktop MarginNote (right margin track) */}
            <div className="hidden lg:flex editorial-margin items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="editorial-margin-tick"></div>
              <p className="type-margin-note">I don't run paid campaigns.</p>
            </div>
          </div>
          
          <div className="rule-major mt-[48px] lg:mt-[64px] mb-[56px] lg:mb-[96px]"></div>
        </section>

        `;

fs.writeFileSync('src/HomePage.tsx', before + unified + after);
