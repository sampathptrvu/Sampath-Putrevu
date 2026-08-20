import fs from 'fs';

let content = fs.readFileSync('src/HomePage.tsx', 'utf-8');

const replacement = `          {/* Row 3 with ONE MarginNote */}
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
              </div>
            </div>
            
            {/* ONE MarginNote for both mobile and desktop */}
            <div className="editorial-margin opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="editorial-margin-tick"></div>
              <p className="type-margin-note">I don't run paid campaigns.</p>
            </div>
          </div>`;

// Find the start of Row 3
const startStr = '{/* Row 3 with ONE MarginNote */}';
const endStr = '          <div className="rule-major mt-[48px] lg:mt-[64px] mb-[56px] lg:mb-[96px]"></div>';

const startIndex = content.indexOf(startStr);
const endIndex = content.indexOf(endStr);

if (startIndex !== -1 && endIndex !== -1) {
  content = content.substring(0, startIndex) + replacement + '\n          \n' + content.substring(endIndex);
  fs.writeFileSync('src/HomePage.tsx', content);
  console.log("Successfully replaced Row 3.");
} else {
  console.log("Could not find start/end markers.");
}
