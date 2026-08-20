import { Link } from 'react-router-dom';
import { useMetadata } from './useMetadata';
import Header from './Header';

export default function HomePage() {
  useMetadata({
    title: "Sampath Putrevu — Marketing for B2B & Venture-Backed Companies",
    description: "Earned attention and organic growth for companies from seed to public.",
    canonical: "https://sampathputrevu.com/",
    ogTitle: "Sampath Putrevu",
    ogDescription: "Earned attention and organic growth for companies from seed to public.",
    ogUrl: "https://sampathputrevu.com/",
    ogType: "website"
  });


  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col font-sans selection:bg-[var(--color-selection)] selection:text-[var(--color-text)]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/images/sp-hero.jpg" 
          alt="" 
          aria-hidden="true" 
          className="w-full h-full object-cover object-[center_30%] md:object-[center_40%]"
        />
        {/* Very subtle warm haze overlay to ensure text readability without overpowering the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-page)]/95 via-[var(--color-page)]/70 to-[var(--color-page)]/30 backdrop-blur-[2px] md:backdrop-blur-sm pointer-events-none"></div>
      </div>

      <Header />
      {/* Hero Content */}
      <main className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-[80px] py-6 md:py-8 max-w-[1600px] mx-auto w-full">
        <div className="max-w-[720px] reveal-section mt-[4vh] lg:mt-[5vh] mb-auto">
          <span className="font-['Cabin'] font-bold text-[14px] uppercase tracking-[0.15em] text-[var(--color-text-secondary)] mb-[16px] block">
            FOR B2B SOFTWARE, ENTERPRISE, AND VENTURE-BACKED COMPANIES
          </span>
          <h1 className="font-serif text-[42px] md:text-[56px] lg:text-[68px] leading-[1.05] tracking-[-0.01em] text-[var(--color-text)] mb-[20px] lg:mb-[24px] text-balance">
            Marketing that outlasts the campaign.
          </h1>
          <p className="font-['Cabin'] font-normal not-italic text-[17px] md:text-[18px] leading-[1.5] text-[var(--color-text-secondary)] mb-[32px] max-w-[620px] text-balance">
            Earned attention and organic growth for companies from seed to public: brand, content, PR, founder-led distribution, social, and inbound demand generation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 mb-[32px] lg:mb-[40px]">
            <Link to="/contact"  className="font-['Cabin'] text-[18px] font-medium text-[var(--color-text)] hover:opacity-70 transition-opacity">
              Work with me &rarr;
            </Link>
            <Link 
              to="/work"
              className="inline-flex items-center justify-center h-[44px] px-8 font-sans font-medium text-[14px] bg-[var(--color-text)] text-[var(--color-page)] hover:bg-[var(--color-accent)] transition-colors rounded-none focus:outline-none focus:ring-2 focus:ring-[var(--color-text)] focus:ring-offset-2 focus:ring-offset-[var(--color-page)] cursor-pointer"
            >
              View past work
            </Link>
          </div>

          {/* Rule line */}
          <div className="w-full h-px bg-[var(--color-text)] opacity-15 mb-[24px] max-w-[1024px]"></div>
          
          {/* Credibility */}
          <p className="font-['Cabin'] font-normal text-[14px] md:text-[15px] text-[var(--color-text)] mb-[24px] max-w-[620px]">
            Built marketing for Accel and companies backed by Redpoint, Sequoia, and Bessemer.
          </p>

          {/* Stats Row */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-0 md:justify-between max-w-[1024px]">
            {/* Stat 1 */}
            <div className="flex-1 md:pr-6 md:border-r border-[var(--color-text)]/15">
              <p className="font-['Cabin'] text-[16px] leading-[1.4] text-[var(--color-text)]">
                <span className="block mb-1">10 years</span>
                in tech, VC,<br/>and startup<br/>marketing
              </p>
            </div>
            
            {/* Stat 2 */}
            <div className="flex-1 md:px-6 md:border-r border-[var(--color-text)]/15">
              <p className="font-['Cabin'] text-[16px] leading-[1.4] text-[var(--color-text)]">
                <span className="block mb-1">350+</span>
                founders and<br/>CTOs<br/>interviewed
              </p>
            </div>
            
            {/* Stat 3 */}
            <div className="flex-1 md:px-6 md:border-r border-[var(--color-text)]/15">
              <p className="font-['Cabin'] text-[16px] leading-[1.4] text-[var(--color-text)]">
                <span className="block mb-1">5</span>
                marketing functions<br/>built from<br/>zero
              </p>
            </div>
            
            {/* Stat 4 */}
            <div className="flex-1 md:pl-6">
              <p className="font-['Cabin'] text-[16px] leading-[1.4] text-[var(--color-text)]">
                <span className="block mb-1">$2.5M+</span>
                in content-assisted<br/>pipeline and<br/>closed revenue
              </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

// Ensure legacy content is not lost from codebase
function LegacyContent() {
  return null; // The old components are saved in src/LegacyContent.tsx
}
