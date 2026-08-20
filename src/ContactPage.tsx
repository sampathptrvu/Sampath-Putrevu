import { useMetadata } from './useMetadata';
import { Link, useLocation } from 'react-router-dom';
import Header from './Header';
import { Mail } from 'lucide-react';
import linkedinIcon from './linkedin-icon.png';

export default function ContactPage() {
  const location = useLocation();

  useMetadata({
    title: "Work with me — Sampath Putrevu",
    description: "Seed to public, in B2B software and venture capital. Narrative architecture and distribution.",
    canonical: "https://sampathputrevu.com/contact",
    ogTitle: "Work with me — Sampath Putrevu",
    ogDescription: "Seed to public, in B2B software and venture capital. Narrative architecture and distribution.",
    ogUrl: "https://sampathputrevu.com/contact",
    ogType: "website"
  });



  return (
    <div className="min-h-[100dvh] flex flex-col font-sans selection:bg-[var(--color-selection)] selection:text-[var(--color-text)]">
      <Header />
      
      <main className="flex-1 pb-16 lg:pb-32 pt-24 lg:pt-32">
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
