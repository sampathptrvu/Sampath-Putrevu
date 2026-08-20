import fs from 'fs';

let content = fs.readFileSync('src/HomePage.tsx', 'utf-8');

const startIndex = content.indexOf('{/* Final CTA */}');
const endIndex = content.lastIndexOf('</main>');

const before = content.substring(0, startIndex);
const after = content.substring(endIndex);

const cta = `{/* Final CTA */}
        <section className="site-container mb-[40px] lg:mb-[64px]">
          <div className="editorial-grid">
            <div className="editorial-reading flex flex-col items-start">
              <p className="type-cta-statement max-w-[680px] mb-[32px] text-left text-balance">
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
          </div>
        </section>
      `;

fs.writeFileSync('src/HomePage.tsx', before + cta + after);
