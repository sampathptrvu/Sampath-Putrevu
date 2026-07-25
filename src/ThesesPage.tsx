import { useEffect } from 'react';
import { useMetadata } from './useMetadata';
import Header from './Header';

export default function ThesesPage() {
  useMetadata({
    title: "Theses | Sampath Putrevu",
    description: "Working theses on narrative, founders, and how markets learn",
    canonical: "https://sampathputrevu.com/theses",
    ogTitle: "Theses | Sampath Putrevu",
    ogDescription: "Working theses on narrative, founders, and how markets learn",
    ogUrl: "https://sampathputrevu.com/theses",
    ogType: "website"
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="work-page selection:bg-burgundy selection:text-warm-white font-sans text-warm-white relative">
      
      
      <Header />
      
      <main className="work-page-main work-page-content pb-16">
        <div className="work-page-container max-w-[1040px] mx-auto flex flex-col" style={{ gap: "var(--site-section-gap)" }}>
          
          {/* Manifesto Opening */}
          <section>
            <div className="glass-surface rounded-[24px] md:rounded-[28px] p-[28px_24px] md:p-[32px_40px] lg:p-[40px_48px] w-full md:w-fit max-w-full">
              <span className="type-hero-eyebrow mb-4 tracking-wide text-warm-white/70">Theses</span>
              <h1 className="type-hero-headline tracking-tight max-w-[850px] text-balance !mb-0">
                Working theses on narrative, founders, and how markets learn
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6">
              <div className="bg-parchment border border-divider-light p-8 md:p-10 flex flex-col" style={{ borderRadius: "var(--panel-radius)" }}>
                <span className="type-label-small mb-4 block">01</span>
                <h3 className="type-card-heading-1 mb-3 leading-snug">The product is often ahead of its language</h3>
                <p className="type-body-muted text-pretty">
                  Strong products lose ground when the market cannot understand, remember, and repeat what makes them different.
                </p>
              </div>
              
              <div className="bg-parchment border border-divider-light p-8 md:p-10 flex flex-col" style={{ borderRadius: "var(--panel-radius)" }}>
                <span className="type-label-small mb-4 block">02</span>
                <h3 className="type-card-heading-1 mb-3 leading-snug">Clarity is an aggressive act</h3>
                <p className="type-body-muted text-pretty">
                  Specific language forces attention because it makes the company harder to confuse with anyone else.
                </p>
              </div>

              <div className="bg-parchment border border-divider-light p-8 md:p-10 flex flex-col" style={{ borderRadius: "var(--panel-radius)" }}>
                <span className="type-label-small mb-4 block">03</span>
                <h3 className="type-card-heading-1 mb-3 leading-snug">The founder is the source material</h3>
                <p className="type-body-muted text-pretty">
                  The strongest narrative comes from extracting the conviction the founder is already executing and making it legible to the market.
                </p>
              </div>

              <div className="bg-parchment border border-divider-light p-8 md:p-10 flex flex-col" style={{ borderRadius: "var(--panel-radius)" }}>
                <span className="type-label-small mb-4 block">04</span>
                <h3 className="type-card-heading-1 mb-3 leading-snug">Judgment gets more valuable as production gets cheaper</h3>
                <p className="type-body-muted text-pretty">
                  AI can generate endless drafts, but choosing the right idea, tension, angle, and language remains scarce.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
