import { Link } from 'react-router-dom';

export default function LegacyContent() {
  return (
    <>
      <section id="expertise" className="reveal-section site-container scroll-mt-[100px] mt-[-8px] lg:mt-[16px]">
        <h2 className="type-h2-statement mb-[32px] lg:mb-[48px] text-balance">
          A three-step loop, run the same way every time.
        </h2>
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-0 lg:gap-8">
          <div className="py-[24px] lg:py-[32px] border-b border-[var(--color-rule)] lg:border-none lg:p-0">
            <span className="type-step-numeral mb-[16px] block">01</span>
            <h3 className="type-step-title mb-[12px]">The underlying truth</h3>
            <p className="type-step-body">
              Every strong company is built around a single, undeniable conviction. We find it, separate it from the product features, and turn it into a position the market can't ignore.
            </p>
          </div>
          <div className="py-[24px] lg:py-[32px] border-b border-[var(--color-rule)] lg:border-none lg:p-0">
            <span className="type-step-numeral mb-[16px] block">02</span>
            <h3 className="type-step-title mb-[12px]">The narrative architecture</h3>
            <p className="type-step-body">
              We build the structure to carry that truth. Pitch decks, web copy, brand guidelines, and the foundational assets that ensure everyone tells the same story.
            </p>
          </div>
          <div className="pt-[24px] lg:pt-[32px] lg:border-none lg:p-0">
            <span className="type-step-numeral mb-[16px] block">03</span>
            <h3 className="type-step-title mb-[12px]">The distribution engine</h3>
            <p className="type-step-body">
              We create the systems to put that story in front of the right people repeatedly. Founder-led content, earned media, SEO, and social distribution that compounds.
            </p>
          </div>
        </div>
        <div className="rule-major mt-[48px] lg:mt-[64px] mb-[40px] lg:mb-[64px]"></div>
      </section>

      <section id="fit" className="reveal-section site-container scroll-mt-[100px]">
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
        <div className="editorial-grid reveal-section">
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
          <div className="editorial-margin reveal-annotation">
            <div className="editorial-margin-tick"></div>
            <p className="type-margin-note">I don't run paid campaigns.</p>
          </div>
        </div>
        <div className="rule-major mt-[48px] lg:mt-[64px] mb-[56px] lg:mb-[96px]"></div>
      </section>
    </>
  );
}
