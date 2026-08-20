import { useMetadata } from './useMetadata';
import { Link } from 'react-router-dom';
import Header from './Header';

export default function PublishedPage() {
  useMetadata({
    title: "Published — Sampath Putrevu",
    description: "Long-form resources, founder frameworks, and press coverage from ten years of work, grouped by where it ran.",
    canonical: "https://sampathputrevu.com/published",
    ogTitle: "Published — Sampath Putrevu",
    ogDescription: "Long-form resources, founder frameworks, and press coverage from ten years of work, grouped by where it ran.",
    ogUrl: "https://sampathputrevu.com/published",
    ogType: "website"
  });

  return (
    <div className="min-h-screen selection:bg-[var(--color-selection)] selection:text-[var(--color-text)] font-sans text-[var(--color-text)]">
      <Header />
      
      <main className="pb-12">
        <section className="reveal-section site-container pt-[48px] md:pt-[64px] lg:pt-[80px]">
          <div className="editorial-grid group">
            <div className="editorial-reading flex flex-col items-start">
              <Link 
                to="/" 
                className="inline-block mb-[40px] font-sans font-medium text-[14px] text-[var(--color-text)] hover:text-[var(--color-accent)] underline underline-offset-4 decoration-[1px] transition-colors"
              >
                &larr; Back to homepage
              </Link>
              <span className="font-sans font-medium text-[12px] lg:text-[13px] uppercase tracking-[0.08em] text-[var(--color-text-secondary)] mb-[12px] lg:mb-[16px] block">
                Published
              </span>
              <h1 className="font-serif font-semibold text-[34px] md:text-[44px] lg:text-[56px] leading-[1.12] tracking-[-0.005em] text-[var(--color-text)] mb-[16px] lg:mb-[24px]">
                The published record.
              </h1>
              <p className="font-sans font-normal text-[16px] lg:text-[17px] leading-[1.65] text-[var(--color-text)] max-w-[680px]">
                Long-form resources, founder frameworks, and press coverage from ten years of work, grouped by where it ran.
              </p>
            </div>
          </div>
          
          <div className="rule-major mt-[48px] lg:mt-[64px] mb-[48px] lg:mb-[64px]"></div>

          <div className="editorial-grid">
            <div className="editorial-reading flex flex-col items-start">
              
              <div className="w-full">
                <h3 className="font-serif font-semibold text-[22px] md:text-[24px] lg:text-[28px] text-[var(--color-text)] mb-[24px]">
                  At YourStory
                </h3>
                <ul className="flex flex-col gap-[16px]">
                  <li>
                    <a
                      href="https://yourstory.com/2019/11/techie-tuesday-crm-company-hubspot-cto-dharmesh-shah"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      He wanted to be a mechanical engineer, but blogged his way and built CRM company HubSpot
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://yourstory.com/2020/02/techie-tuesday-cadir-lee-zynga-ohm-connect-farmville-startup"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Meet ex-Zynga CTO Cadir Lee, who now dons many hats in the startup world and beyond
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://yourstory.com/2018/02/mapping-journey-lalitesh-katragadda-creator-google-maps-india"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Mapping the journey of Lalitesh Katragadda, the creator of Google Maps India
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://yourstory.com/2019/07/techie-tuesday-razorpay-shashank-kumar-payments-startups"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      How Razorpay’s Shashank Kumar built India’s first payment gateway for startups
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://yourstory.com/2019/09/lambda-school-coding-bootcamp-india-education"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      [YS Exclusive] Why San Francisco’s coding bootcamp Lambda School is placing its bets on India
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://yourstory.com/2019/11/paypal-penetrating-indias-vast-fintech-mark"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      How PayPal is penetrating India’s vast Fintech market
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://yourstory.com/2019/11/google-pay-user-experience-exclusive-india-fintech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      How Google Pay used user experience to make a mark in India’s congested fintech market
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://yourstory.com/2019/12/san-francisco-observe-ai-voice-customer-experience-product"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      SF-based voice AI platform Observe.ai found a target market first and then built a product
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://yourstory.com/2019/12/turning-point-jumbotail-kirana-stores-entrepreneurs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      When an apple farmer teamed up with a military veteran: The Jumbotail story
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://yourstory.com/2019/11/turning-point-yellow-messenger-conversational-ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      A breakfast meeting with friends led to the idea for Yellow Messenger
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://yourstory.com/2019/09/turning-point-zendesk-copenhagen-cx-customer-experience"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Three broke boys turned entrepreneurs built global customer service giant Zendesk
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://yourstory.com/2020/05/product-roadmap-postman-api-development-tech-startup"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      How a vision to play the long game in the industry helped Postman build a rockstar product
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://yourstory.com/2020/02/techie-tuesday-benson-samuel-cryptocurrency-bitcoin-blockchain-ico"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Meet the architect of India's first crypto algorithm
                    </a>
                  </li>
                </ul>
              </div>

              <div className="rule-major my-[48px] lg:my-[64px]"></div>

              <div className="w-full">
                <h3 className="font-serif font-semibold text-[22px] md:text-[24px] lg:text-[28px] text-[var(--color-text)] mb-[24px]">
                  At Accel's SeedToScale
                </h3>
                <h4 className="font-sans font-medium text-[16px] lg:text-[18px] text-[var(--color-text)] mb-[16px] ">First 500 Days</h4>
                <ul className="flex flex-col gap-[16px]">
                  <li>
                    <a
                      href="https://www.seedtoscale.com/video/scaling-a-consumer-tech-startup-in-its-first-500-days"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Scaling a Consumer-Tech Startup in Its First 500 Days
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.seedtoscale.com/podcast/untold-seed-stories-first-500-days-of-freshworks"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      The First 500 Days of Freshworks
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.seedtoscale.com/podcast/untold-seed-stories-first-500-days-of-swiggy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      The First 500 Days of Swiggy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.seedtoscale.com/podcast/untold-seed-stories-first-500-days-of-urban-company"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      The First 500 Days of Urban Company
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.seedtoscale.com/podcast/untold-seed-stories-first-500-days-of-ninjacart"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      The First 500 Days of Ninjacart
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.seedtoscale.com/video/the-first-500-days-of-building-ixigo-through-its-many-pivots"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      The First 500 Days of Building ixigo Through Its Many Pivots
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://atoms.accel.com/news/rigi-an-accel-atoms-cohort-company-raises-10-million-in-series-a"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Rigi Raises $10 Million in Series A Funding
                    </a>
                  </li>
                </ul>
                <h4 className="font-sans font-medium text-[16px] lg:text-[18px] text-[var(--color-text)] mb-[16px] mt-[32px]">FutureX</h4>
                <ul className="flex flex-col gap-[16px]">
                  <li>
                    <a
                      href="http://seedtoscale.com/video/scaling-a-consumer-tech-startup-in-its-first-500-days"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      The Future of Agritech
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.seedtoscale.com/podcast/future-of-digital-health"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      The Future of Digital Health
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.seedtoscale.com/podcast/understanding-the-value-of-ai-in-healthcare"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      The Future of AI in Healthcare
                    </a>
                  </li>
                </ul>
                <h4 className="font-sans font-medium text-[16px] lg:text-[18px] text-[var(--color-text)] mb-[16px] mt-[32px]">Other Resources</h4>
                <ul className="flex flex-col gap-[16px]">
                  <li>
                    <a
                      href="https://www.seedtoscale.com/content/the-scale-playbook-key-ingredients-to-drive-scale-value-creation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      The Scale Playbook: Key Ingredients to Drive Scale and Value Creation
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.seedtoscale.com/blog/kunal-shahs-delta-4-theory-of-successful-startups"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Kunal Shah’s Delta 4 Theory of Successful Startups
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.seedtoscale.com/blog/a-guide-to-hiring-great-engineering-leaders-at-a-startup"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      A Guide to Hiring Great Engineering Leaders at a Startup
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.seedtoscale.com/blog/airmeet-a-new-venue-for-all-community-events"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Airmeet: A New Venue for Community Events
                    </a>
                  </li>
                </ul>
              </div>

              <div className="rule-major my-[48px] lg:my-[64px]"></div>

              <div className="w-full">
                <h3 className="font-serif font-semibold text-[22px] md:text-[24px] lg:text-[28px] text-[var(--color-text)] mb-[24px]">
                  At Web3Auth
                </h3>
                <h4 className="font-sans font-medium text-[16px] lg:text-[18px] text-[var(--color-text)] mb-[16px] ">Brand and Content Platforms</h4>
                <ul className="flex flex-col gap-[16px]">
                  <li>
                    <a
                      href="https://blog.web3auth.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Web3Auth Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://web3auth.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Web3Auth Website
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/Web3Auth"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Web3Auth on X
                    </a>
                  </li>
                </ul>
                <h4 className="font-sans font-medium text-[16px] lg:text-[18px] text-[var(--color-text)] mb-[16px] mt-[32px]">Case Studies and Partnerships</h4>
                <ul className="flex flex-col gap-[16px]">
                  <li>
                    <a
                      href="https://blog.web3auth.io/pop-socials-35-surge-in-signups-after-web3auth-integration/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      How Pop Social Increased Signups by 35% With Web3Auth
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://blog.web3auth.io/the-story-of-web3auth-x-ronin-wallet-integration/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      The Story of the Web3Auth and Ronin Wallet Integration
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://blog.web3auth.io/how-keplr-pioneered-social-logins-for-web3-wallets-way-before-it-was-cool/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      How Keplr Pioneered Social Logins for Web3 Wallets
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://blog.web3auth.io/what-went-behind-25-of-biconomys-users-today-use-social-logins/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      How Social Logins Came to Power 25% of Biconomy’s Users
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://blog.web3auth.io/poko-x-web3auth-simplify-onramping-for-global-wallet-users/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Poko and Web3Auth: Simplifying On-Ramping for Global Wallet Users
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://blog.web3auth.io/treasure-chess-and-the-100-000-web3auth-wallets-we-built-together/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Treasure Chess and the 100,000+ Web3Auth Wallets We Built Together
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://blog.web3auth.io/launching-web3auth-firebase-extension-with-google-cloud-to-connect-millions-of-web2-businesses/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Launching the Web3Auth Firebase Extension With Google Cloud
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://blog.web3auth.io/a-step-by-step-guide-to-installing-the-web3auth-firebase-extension/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      A Step-by-Step Guide to Installing the Web3Auth Firebase Extension
                    </a>
                  </li>
                </ul>
                <h4 className="font-sans font-medium text-[16px] lg:text-[18px] text-[var(--color-text)] mb-[16px] mt-[32px]">SK Planet Launch</h4>
                <ul className="flex flex-col gap-[16px]">
                  <li>
                    <a
                      href="https://n.news.naver.com/mnews/article/119/0002762272?sid=105"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      SK Planet Adopts Web3Auth
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://toruslabs.medium.com/can-enterprises-augment-their-loyalty-programmes-with-web3-dd24f37c3a73"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Can Enterprises Augment Their Loyalty Programs With Web3?
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://blog.web3auth.io/gieobi-web3reul-tonghae-royeolti-peurogeuraemeul-ganghwahal-su-issnayo/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      SK Planet Partnership: Korean-Language Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/Web3Auth/status/1717392676281319523"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      SK Planet and Web3Auth Partnership Announcement on X
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.avax.network/about/blog/sk-planet-announces-uptn-south-koreas-long-awaited-web3-ecosystem-built-on-avalanche"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      SK Planet Launches UPTN, South Korea’s Web3 Ecosystem on Avalanche
                    </a>
                  </li>
                </ul>
                <h4 className="font-sans font-medium text-[16px] lg:text-[18px] text-[var(--color-text)] mb-[16px] mt-[32px]">Trust Wallet Launch</h4>
                <ul className="flex flex-col gap-[16px]">
                  <li>
                    <a
                      href="https://blog.web3auth.io/announcing-our-partnership-with-trust-wallet-to-offer-the-simplest-web3-onboarding-ever/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Web3Auth and Trust Wallet Partnership Announcement
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.globenewswire.com/en/news-release/2023/04/26/2655176/0/en/Trust-Wallet-Partners-With-Web3Auth-to-Simplify-Web3-Onboarding-Using-Social-Logins.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Trust Wallet Partners With Web3Auth to Simplify Web3 Onboarding
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/Web3Auth/status/1651587527952982018?s=20"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Trust Wallet Partnership Announcement Thread
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://toruslabs.medium.com/announcing-our-partnership-with-trust-wallet-to-offer-the-simplest-web3-onboarding-ever-f19b92a49fcd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Trust Wallet Partnership Announcement on Medium
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/Web3Auth/status/1651213630954954753"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Trust Wallet Partnership Brand Announcement
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/sampathptrvu/status/1653627430178017280"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      My Trust Wallet Partnership Thread
                    </a>
                  </li>
                </ul>
                <h4 className="font-sans font-medium text-[16px] lg:text-[18px] text-[var(--color-text)] mb-[16px] mt-[32px]">Product Updates, Conferences, and Research</h4>
                <ul className="flex flex-col gap-[16px]">
                  <li>
                    <a
                      href="https://toruslabs.medium.com/a-revamped-dashboard-and-the-updates-it-brings-along-81e939f1d137"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Introducing the Revamped Web3Auth Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://medium.com/toruslabs/important-product-updates-web3auth-self-host-and-plug-and-play-590bdf414ef6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Web3Auth Self-Host SDK Becomes Core Kit
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://toruslabs.medium.com/research-insights-optimal-mfa-options-for-web3-audiences-04f6bdab65bb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Research Insights: Optimal MFA Options for Web3 Audiences
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://toruslabs.medium.com/what-game-developers-want-from-the-next-generation-of-web3-games-insight-from-gdc-2023-4070c9494322"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      What Game Developers Want From the Next Generation of Web3 Games
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://blog.web3auth.io/its-time-for-the-sapphire-upgrade-faster-lighter-and-unmatched-globally-scalable-mpc/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      The Sapphire Upgrade: Faster, Lighter, and Globally Scalable MPC
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/Web3Auth/status/1701542727031365756?s=20"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Token2049: Wallets and UX Conference Coverage
                    </a>
                  </li>
                </ul>
                <h4 className="font-sans font-medium text-[16px] lg:text-[18px] text-[var(--color-text)] mb-[16px] mt-[32px]">Acquisitions and Security Communications</h4>
                <ul className="flex flex-col gap-[16px]">
                  <li>
                    <a
                      href="https://toruslabs.medium.com/announcing-web3auths-acquisition-of-poko-on-ramp-aggregator-2902e60284c8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Web3Auth Acquires On-Ramp Aggregator Poko
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://medium.com/toruslabs/web3auths-statement-on-the-recent-magic-link-phishing-attack-afd7f46566cf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Web3Auth’s Statement on the Magic Link Phishing Attack
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://blog.web3auth.io/web3auths-response-to-recent-attacks-on-mpc-protocols-tsshock-bitforge/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Web3Auth’s Response to TSSHOCK and BitForge
                    </a>
                  </li>
                </ul>
                <h4 className="font-sans font-medium text-[16px] lg:text-[18px] text-[var(--color-text)] mb-[16px] mt-[32px]">Thought Leadership</h4>
                <ul className="flex flex-col gap-[16px]">
                  <li>
                    <a
                      href="https://blog.web3auth.io/why-it-is-time-for-seedphrases-to-go-away-now-and-forever/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Why Seed Phrases Should Go Away Now and Forever
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://blog.web3auth.io/can-enterprises-augment-their-loyalty-programmes-with-web3/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Can Enterprises Augment Their Loyalty Programs With Web3?
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://blog.web3auth.io/all-you-need-to-know-about-erc-4337/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Everything You Need to Know About ERC-4337
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://blog.web3auth.io/what-on-earth-is-account-abstraction/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      What on Earth Is Account Abstraction?
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://blog.web3auth.io/how-do-you-truly-own-a-self-custodial-wallet/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      How Do You Truly Own a Self-Custodial Wallet?
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://blog.web3auth.io/the-curious-case-of-custodial-crypto-exchanges/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      The Curious Case of Custodial Crypto Exchanges
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://blog.web3auth.io/what-is-developer-trust-and-how-it-applies-to-self-custody/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      What Is Developer Trust, and How Does It Apply to Self-Custody?
                    </a>
                  </li>
                </ul>
              </div>

              <div className="rule-major my-[48px] lg:my-[64px]"></div>

              <div className="w-full">
                <h3 className="font-serif font-semibold text-[22px] md:text-[24px] lg:text-[28px] text-[var(--color-text)] mb-[24px]">
                  At Masai School
                </h3>
                <h4 className="font-sans font-medium text-[16px] lg:text-[18px] text-[var(--color-text)] mb-[16px] ">Brand and Content Platforms</h4>
                <ul className="flex flex-col gap-[16px]">
                  <li>
                    <a
                      href="https://www.masaischool.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Masai School Website
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.masaischool.com/blog/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Masai School Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/masaischool"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Masai School on X
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/school/masai-school/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Masai School on LinkedIn
                    </a>
                  </li>
                </ul>
                <h4 className="font-sans font-medium text-[16px] lg:text-[18px] text-[var(--color-text)] mb-[16px] mt-[32px]">Interviews and Earned Media</h4>
                <ul className="flex flex-col gap-[16px]">
                  <li>
                    <a
                      href="https://yourstory.com/2019/11/masai-school-bengaluru-engineers-coders-isa-bootcamp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      My Interview With the Founders of Masai School
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://yourstory.com/2021/03/masai-school-alternate-college-education-india-raises-5million-fund"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Masai School Raises $5 Million to Build an Alternative to College Education
                    </a>
                  </li>
                </ul>
                <h4 className="font-sans font-medium text-[16px] lg:text-[18px] text-[var(--color-text)] mb-[16px] mt-[32px]">Series A Funding</h4>
                <ul className="flex flex-col gap-[16px]">
                  <li>
                    <a
                      href="https://www.cnbctv18.com/startup/edtech-startup-masai-school-raises-5-million-led-by-omidyar-network-india-8722161.htm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      CNBC-TV18: Masai School Raises $5 Million Led by Omidyar Network India
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.masaischool.com/blog/we-raised-5m-in-series-a-funding-that-also-raised-our-own-limits/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Masai School’s Series A Announcement
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://inc42.com/buzz/masai-school-looks-to-bridge-skill-gap-among-indias-aspiring-techies-with-5-mn-series-a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Inc42: Masai School Raises $5 Million to Bridge India’s Technology Skills Gap
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://economictimes.indiatimes.com/tech/funding/edtech-startup-masai-school-gets-5-million-funding-led-by-omidyar/articleshow/81699496.cms?from=mdr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      The Economic Times: Masai School Raises $5 Million Led by Omidyar Network India
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.vccircle.com/omidyar-network-india-leads-series-a-round-in-masai-school"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      VCCircle: Omidyar Network India Leads Masai School’s Series A
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://yourstory.com/2021/10/funding-edtech-startup-masai-school-indian-cxos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      YourStory: Masai School Funding Coverage
                    </a>
                  </li>
                </ul>
                <h4 className="font-sans font-medium text-[16px] lg:text-[18px] text-[var(--color-text)] mb-[16px] mt-[32px]">Series A2 Bridge Round</h4>
                <ul className="flex flex-col gap-[16px]">
                  <li>
                    <a
                      href="https://yourstory.com/2021/10/funding-edtech-startup-masai-school-indian-cxos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      YourStory: Masai School Raises Funding From Indian CXOs
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://inc42.com/buzz/masai-school-raises-funds-from-21-angel-investors/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Inc42: Masai School Raises Funding From 21 Angel Investors
                    </a>
                  </li>
                </ul>
                <h4 className="font-sans font-medium text-[16px] lg:text-[18px] text-[var(--color-text)] mb-[16px] mt-[32px]">Series B Funding</h4>
                <ul className="flex flex-col gap-[16px]">
                  <li>
                    <a
                      href="https://www.theweekendleader.com/Headlines/77673/jobtech-startup-masai-school-raises-10-million-funding-and-ropes-in-mithali-raj-bhaichung-bhutia-as-investors.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      The Weekend Leader: Masai School Raises $10 Million and Brings on Mithali Raj and Bhaichung Bhutia as Investors
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.moneycontrol.com/news/business/startup/masai-school-onboards-mithali-raj-bhaichung-bhutia-as-investors-raises-10-mn-in-funding-9467551.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Moneycontrol: Masai School Raises $10 Million in Series B Funding
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://inc42.com/buzz/masai-school-secures-10-mn-to-add-scholarships-upskilling-courses/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Inc42: Masai School Secures $10 Million for Scholarships and Upskilling Courses
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://yourstory.com/2022/11/masai-school-seriesb-round-mithaliraj-bhaichung-bhutia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      YourStory: Masai School Raises Series B Funding
                    </a>
                  </li>
                </ul>
                <h4 className="font-sans font-medium text-[16px] lg:text-[18px] text-[var(--color-text)] mb-[16px] mt-[32px]">Prepleaf Acquisition</h4>
                <ul className="flex flex-col gap-[16px]">
                  <li>
                    <a
                      href="https://www.vccircle.com/masai-school-buys-data-analytics-institute-prepleaf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      VCCircle: Masai School Acquires Data Analytics Institute Prepleaf
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://economictimes.indiatimes.com/tech/startups/tech-skilling-startup-masai-school-acquires-data-analytics-firm-prepleaf-for-1-million/articleshow/88404992.cms?from=mdr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      The Economic Times: Masai School Acquires Prepleaf for $1 Million
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://yourstory.com/2021/12/masai-school-acquires-prepleaf-data-analytics-startup-1-million-edtech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      YourStory: Masai School Acquires Prepleaf
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.bwdisrupt.com/article/masai-school-acquires-data-analytics-institute-prepleaf-for-1-million-415406"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Business World: Masai School Acquires Prepleaf for $1 Million
                    </a>
                  </li>
                </ul>
                <h4 className="font-sans font-medium text-[16px] lg:text-[18px] text-[var(--color-text)] mb-[16px] mt-[32px]">Campaigns, Programs, and Other Announcements</h4>
                <ul className="flex flex-col gap-[16px]">
                  <li>
                    <a
                      href="https://brandequity.economictimes.indiatimes.com/news/research/advertising/masai-schools-digital-ad-film-employs-humour-to-encourage-enrolment/80682307"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      The Economic Times: Masai School’s Digital Ad Uses Humour to Encourage Enrolment
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://indianstartupnews.com/news/masai-school-launches-glide-program-to-reward-top-performing-students/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Masai School Launches the Glide Program
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.livemint.com/companies/news/education-startup-masai-school-acquires-design-shift-academy-11623237983955.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Mint: Masai School Acquires Design Shift Academy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://blog.masaischool.com/masai-school-acquisition-design-shift-ui-ux-product-management/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Masai School Announces the Acquisition of Design Shift Academy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://indianexpress.com/article/technology/artificial-intelligence/ai-is-revolutionising-tech-hiring-and-careers-in-india-masai-school-ceo-prateek-shukla-9020126/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      The Indian Express: How AI Is Revolutionising Technology Hiring and Careers in India
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.prnewswire.com/in/news-releases/masai-school-s-study-now-pay-later-option-gives-aspirants-an-opportunity-to-begin-a-career-in-software-development-857064871.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      PR Newswire: Masai School’s Study Now, Pay Later Program
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://timesofindia.indiatimes.com/masai-schools-study-now-pay-later-option-gives-aspirants-an-opportunity-to-begin-a-career-in-software-development/articleshow/86420433.cms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      The Times of India: Masai School’s Study Now, Pay Later Program
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://masaischool.medium.com/the-year-that-was-how-2020-treated-masai-school-and-the-vice-versa-354dd148a598"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      The Year That Was: How 2020 Treated Masai School—and Vice Versa
                    </a>
                  </li>
                </ul>
              </div>

              

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
