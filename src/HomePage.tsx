import accelLogo from './accel-logo.png';
import bessemerLogo from './bessemer-logo.svg';
import redpointLogo from './Redpoint.png';
import sequoiaLogo from './sequoia-logo.svg';
import { useMetadata } from './useMetadata';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import ByTheNumbersSection from './ByTheNumbersSection';
import { motion, useScroll, useTransform } from 'motion/react';
import { Mail, ScanSearch, Crop, Send, ExternalLink, ArrowRight } from 'lucide-react';
import { journalismStories } from './data/journalismData';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import linkedinIcon from './linkedin-icon.png';
import whatsappIcon from './whatsapp-icon.png';

import portraitImg from './assets/portrait.png';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const fitCriteria = [
  {
    lead: "The market still cannot see what makes the product matter",
    explanation: "You have built something strong, but the market still cannot see what makes it matter or why it should win."
  },
  {
    lead: "You're tired of explaining your product to marketers",
    explanation: "You need someone who can understand technical nuance, infrastructure-heavy products, and complex categories without months of translation."
  },
  {
    lead: "You're entering a moment that will define perception",
    explanation: "A launch, fundraise, category shift, or acquisition is coming up. The story around it needs to be sharper than a generic press release or rushed founder post."
  },
  {
    lead: "You want authority without performative founder content",
    explanation: "You know the company needs a stronger public voice, but you do not want engagement bait or a manufactured personal brand."
  }
];

function FadePanel({ children, className, variants, initial, whileInView, animate, transition, viewport, ...props }: any) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const bgOpacity = useTransform(scrollYProgress, [0, 0.4, 0.5, 0.6, 1], [1, 1, 1, 1, 1]);
  const backgroundColor = useTransform(bgOpacity, (alpha) => `rgba(255, 250, 242, 0.96)`);

  return (
    <motion.div
      ref={ref}
      className={cn("relative", className)}
      variants={variants}
      initial={initial}
      whileInView={whileInView}
      animate={animate}
      transition={transition}
      viewport={viewport}
      {...props}
    >
      {children}
    </motion.div>
  );
}

const panelClass = "section-card";

export default function HomePage() {
  useMetadata({
    title: "Sampath Putrevu — Narratives for technical founders",
    description: "Turn product truth into market language. Narrative, positioning and marketing for AI and B2B SaaS founders.",
    canonical: "https://sampathputrevu.com/",
    ogTitle: "Sampath Putrevu — Narratives for technical founders",
    ogDescription: "Turn product truth into market language. Narrative, positioning and marketing for AI and B2B SaaS founders.",
    ogUrl: "https://sampathputrevu.com/",
    ogType: "website"
  });



  return (
    <div className="min-h-screen selection:bg-burgundy selection:text-warm-white font-sans text-warm-white">
      <Header />

      <main className="homepage-content-stack pb-12">


        {/* Hero Section */}
        <section className="hero-panel-stage">
          <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="hero-copy-panel z-10"
            >
                <span className="type-hero-eyebrow mb-[26px]" style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.38)" }}>
                  Narratives for technical founders
                </span>
                <h1 className="type-hero-headline mb-[30px]" style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.38)" }}>
                  Great products are often lost in translation
                </h1>
                <p className="type-hero-description mb-[32px]" style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.38)" }}>
                  I find the idea only your company can own, and give it language the market can repeat.
                </p>

                <div className="hero-actions">
                  <a
                    href="https://cal.com/sampath-putrevu-z6jq0i"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto text-center inline-flex items-center justify-center px-5 md:px-[22px] py-[11px] bg-burgundy text-warm-white rounded-[4px] type-button hover:bg-burgundy-dark transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent cursor-pointer shadow-sm"
                  >
                    Book a call
                  </a>
                  <Link
                    to="/work"
                    className="w-full md:w-auto text-center inline-flex items-center justify-center px-5 md:px-[22px] py-[11px] bg-white/10 backdrop-blur-sm border border-white/20 text-warm-white rounded-[4px] type-button hover:bg-white/15 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent cursor-pointer shadow-sm"
                  >
                    Past work
                  </Link>
                                                </div>
            </motion.div>
        </section>


        {/* Credibility Section */}
        <section className="credibility-row">
          <div className="credibility-strip credibility-inner flex flex-wrap min-[1100px]:grid min-[1100px]:grid-cols-[max-content_max-content_max-content_max-content_max-content] min-[1100px]:justify-center min-[1100px]:items-center justify-center items-center gap-y-4 gap-x-6 min-[1100px]:gap-x-[32px] min-[1100px]:gap-y-0 py-5 md:py-4 min-[1100px]:py-[24px] px-4 md:px-6 min-[1100px]:px-[40px]">
            <p className="w-full min-[1100px]:w-auto font-medium text-[18px] text-center leading-snug text-[#252724] whitespace-normal md:whitespace-nowrap">
              Trusted by founders and teams backed by
            </p>
            <a href="https://www.accel.com/" target="_blank" rel="noopener noreferrer" aria-label="Accel" className="flex items-center justify-center min-w-0 w-auto">
              <img src={accelLogo} alt="" className="h-[24px] md:h-[26px] min-[1100px]:h-[22px] w-auto object-contain block" />
            </a>
            <a href="https://www.bvp.com/" target="_blank" rel="noopener noreferrer" aria-label="Bessemer" className="flex items-center justify-center min-w-0 w-auto">
              <img src={bessemerLogo} alt="" className="h-[20px] md:h-[22px] min-[1100px]:h-[18px] w-auto object-contain block" />
            </a>
            <a href="https://www.redpoint.com/" target="_blank" rel="noopener noreferrer" aria-label="Redpoint" className="flex items-center justify-center min-w-0 w-auto">
              <img src={redpointLogo} alt="" className="h-[28px] md:h-[30px] min-[1100px]:h-[24px] w-auto object-contain block" />
            </a>
            <a href="https://www.sequoiacap.com/" target="_blank" rel="noopener noreferrer" aria-label="Sequoia" className="flex items-center justify-center min-w-0 w-auto">
              <img src={sequoiaLogo} alt="" className="h-[16px] md:h-[18px] min-[1100px]:h-[15px] w-auto object-contain block" />
            </a>
          </div>
        </section>

        <section className="home-section scroll-mt-[100px]">
          <div className="w-full max-w-[var(--page-max-width)] mx-auto px-[var(--page-gutter)]">
            <ByTheNumbersSection />
          </div>
        </section>

        {/* How I help */}
        <section id="expertise" className="home-section scroll-mt-[100px]">
          <div className="section-row">
          <div className="section-label-container">
            <div className="section-label-panel">
              <h2 className="type-section-label">How I help</h2>
              <div className="section-label-rule w-12 h-px mt-4 md:mt-5" style={{ background: "var(--burgundy)" }}></div>
            </div>
          </div>

          <FadePanel className={panelClass}>
            <div className="flex flex-col min-[900px]:grid min-[900px]:grid-cols-3 gap-0 min-[900px]:gap-8">

                {/* 01 */}
                <div className="flex flex-col pb-6 min-[900px]:pb-0 border-b border-divider-light min-[900px]:border-b-0 min-[900px]:border-r min-[900px]:pr-8 group hover:-translate-y-1 transition-transform duration-300 ease-out">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="type-label-small">01</span>
                    <ScanSearch className="w-5 h-5 text-panel-muted group-hover:text-burgundy transition-colors" />
                  </div>
                  <h3 className="type-card-heading-1 mb-3">Extract</h3>
                  <p className="type-body-muted mb-6 flex-grow">
                    Founder interviews, customer conversations, competitive context. I find the idea the company already knows but has not yet named.
                  </p>
                  <div className="pt-4 border-t border-divider-light mt-auto">
                    <p className="text-[15px] font-semibold text-burgundy">
                      The idea has a name.
                    </p>
                  </div>
                </div>

                {/* 02 */}
                <div className="flex flex-col py-6 min-[900px]:py-0 border-b border-divider-light min-[900px]:border-b-0 min-[900px]:border-r min-[900px]:pr-8 group hover:-translate-y-1 transition-transform duration-300 ease-out">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="type-label-small">02</span>
                    <Crop className="w-5 h-5 text-panel-muted group-hover:text-burgundy transition-colors" />
                  </div>
                  <h3 className="type-card-heading-1 mb-3">Frame</h3>
                  <p className="type-body-muted mb-6 flex-grow">
                    Category language, founding narrative, memorable frameworks. I give the idea a form people can understand and repeat.
                  </p>
                  <div className="pt-4 border-t border-divider-light mt-auto">
                    <p className="text-[15px] font-semibold text-burgundy">
                      The idea has a form.
                    </p>
                  </div>
                </div>

                {/* 03 */}
                <div className="flex flex-col pt-6 min-[900px]:pt-0 group hover:-translate-y-1 transition-transform duration-300 ease-out">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="type-label-small">03</span>
                    <Send className="w-5 h-5 text-panel-muted group-hover:text-burgundy transition-colors" />
                  </div>
                  <h3 className="type-card-heading-1 mb-3">Make it travel</h3>
                  <p className="type-body-muted mb-6 flex-grow">
                    I turn the narrative into a working system across the company, so every channel reinforces the same idea.
                  </p>
                  <div className="pt-4 border-t border-divider-light mt-auto">
                    <p className="text-[15px] font-semibold text-burgundy">
                      The market can repeat it.
                    </p>
                  </div>
                </div>

              </div>
              <div className="mt-12 pt-10 border-t border-divider-light">
                <h3 className="type-section-heading mb-8 text-balance !text-[32px] !font-normal">
                  One narrative. The full range.
                </h3>

                <div className="flex flex-col md:grid md:grid-cols-2 gap-y-8 md:gap-y-10 md:gap-x-12">
                  {/* Block 1 */}
                  <div className="flex flex-col pb-8 md:pb-0 border-b border-divider-light md:border-b-0 md:border-r md:pr-12 group">
                    <h4 className="type-card-heading-2 mb-2 text-balance">Brand and founder positioning</h4>
                    <p className="type-body mb-4 !font-normal">
                      The company becomes easier to understand, harder to confuse with competitors, and its founders can explain it the same way whether they're pitching a customer, an investor, or a candidate.
                    </p>
                    <ul className="type-body space-y-1 list-disc pl-4 !font-normal">
                      <li>Company positioning</li>
                      <li>Core narrative</li>
                      <li>Founder narrative</li>
                      <li>Website messaging</li>
                      <li>Verbal identity and tone</li>
                      <li>Language for sales, hiring, and fundraising</li>
                      <li>Internal messaging consistency</li>
                      <li>Brand guidelines</li>
                    </ul>
                  </div>

                  {/* Block 2 */}
                  <div className="flex flex-col pb-8 md:pb-0 border-b border-divider-light md:border-b-0 group">
                    <h4 className="type-card-heading-2 mb-2 text-balance">Content and editorial systems</h4>
                    <p className="type-body mb-4 !font-normal">
                      The company builds a body of work that keeps earning attention long after a single campaign ends, instead of starting over with every new push.
                    </p>
                    <ul className="type-body space-y-1 list-disc pl-4 !font-normal">
                      <li>Editorial strategy</li>
                      <li>Long-form articles</li>
                      <li>Newsletters</li>
                      <li>Research and reports</li>
                      <li>Customer stories</li>
                      <li>SEO content</li>
                      <li>Content distribution</li>
                      <li>Editorial operations</li>
                    </ul>
                  </div>

                  {/* Block 3 */}
                  <div className="flex flex-col pb-8 md:pb-0 border-b border-divider-light md:border-b-0 md:border-r md:pr-12 md:border-t md:border-divider-light md:pt-10 group">
                    <h4 className="type-card-heading-2 mb-2 text-balance">LinkedIn and X</h4>
                    <p className="type-body mb-4 !font-normal">
                      The founder develops a public voice people recognize and follow, one that becomes shorthand for the company's point of view.
                    </p>
                    <ul className="type-body space-y-1 list-disc pl-4 !font-normal">
                      <li>Founder voice and pillars</li>
                      <li>Posts and threads</li>
                      <li>Technical and category education</li>
                      <li>Founder stories</li>
                      <li>Launch distribution</li>
                      <li>Publishing cadence</li>
                      <li>Community engagement</li>
                      <li>Cross-handle repurposing</li>
                    </ul>
                  </div>

                  {/* Block 4 */}
                  <div className="flex flex-col pb-8 md:pb-0 border-b border-divider-light md:border-b-0 md:border-t md:border-divider-light md:pt-10 group">
                    <h4 className="type-card-heading-2 mb-2 text-balance">PR and crisis communications</h4>
                    <p className="type-body mb-4 !font-normal">
                      The company earns credibility in outlets the market already trusts, and has language ready that holds up when scrutiny is highest.
                    </p>
                    <ul className="type-body space-y-1 list-disc pl-4 !font-normal">
                      <li>Media strategy</li>
                      <li>Press releases</li>
                      <li>Journalist outreach</li>
                      <li>Press kits</li>
                      <li>Spokesperson preparation</li>
                      <li>Agency management</li>
                      <li>Crisis response</li>
                      <li>Post-coverage amplification</li>
                    </ul>
                  </div>

                  {/* Block 5 */}
                  <div className="flex flex-col pb-8 md:pb-0 border-b border-divider-light md:border-b-0 md:border-r md:pr-12 md:border-t md:border-divider-light md:pt-10 group">
                    <h4 className="type-card-heading-2 mb-2 text-balance">Fundraises and launches</h4>
                    <p className="type-body mb-4 !font-normal">
                      Important company moments land with a story clear enough to outlast the news cycle, so the announcement strengthens how the market understands the business.
                    </p>
                    <ul className="type-body space-y-1 list-disc pl-4 !font-normal">
                      <li>Announcement positioning</li>
                      <li>Founder messaging</li>
                      <li>Press strategy</li>
                      <li>Website messaging</li>
                      <li>Investor and partner coordination</li>
                      <li>Launch-day sequencing</li>
                      <li>Customer proof</li>
                      <li>Follow-up distribution</li>
                    </ul>
                  </div>

                  {/* Block 6 */}
                  <div className="flex flex-col md:border-t md:border-divider-light md:pt-10 group">
                    <h4 className="type-card-heading-2 mb-2 text-balance">Webinars and podcasts</h4>
                    <p className="type-body mb-4 !font-normal">
                      The company turns its expertise into a recurring format people return to, building authority and a library of material that keeps working long after it airs.
                    </p>
                    <ul className="type-body space-y-1 list-disc pl-4 !font-normal">
                      <li>Format strategy</li>
                      <li>Guest booking</li>
                      <li>Editorial development</li>
                      <li>Speaker preparation</li>
                      <li>Promotion and registration</li>
                      <li>Live production</li>
                      <li>Podcast production</li>
                      <li>Content repurposing</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 md:mt-10 pt-8 border-t border-divider-light flex">
                  <Link to="/work" className="font-sans text-[16px] md:text-[17px] font-bold text-burgundy hover:text-burgundy-dark transition-colors inline-flex items-center">
                    See the work <span className="ml-1" aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
          </FadePanel>
          </div>
        </section>

        {/* Why me */}
        <section id="why-me" className="home-section scroll-mt-[100px]">
          <div className="section-row">
          <div className="section-label-container">
            <div className="section-label-panel">
              <h2 className="type-section-label">Why me</h2>
              <div className="section-label-rule w-12 h-px mt-4 md:mt-5" style={{ background: "var(--burgundy)" }}></div>
            </div>
          </div>

          <FadePanel className={panelClass}>
            <div className="flex flex-col gap-[24px]">
              <div className="flex flex-col min-[768px]:grid min-[768px]:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] gap-[32px] min-[768px]:gap-[clamp(32px,4vw,52px)] items-start">
                <div className="flex flex-col gap-[20px] text-lg font-normal leading-relaxed text-panel-body w-full max-w-[58ch] min-w-0">
                  <p>
                    Many technical companies do not have a marketing problem. They have a language problem.
                  </p>
                  <p>
                    The product is clear inside the company. The founder can explain it across a table. But the idea changes shape as it travels: through the website, sales, launches, hiring and fundraising.
                  </p>
                  <p>
                    More content does not fix that. It multiplies the inconsistency.
                  </p>
                  <p className="font-medium text-panel-heading">
                    I treat narrative as infrastructure. It is the shared language a company uses to understand itself, and to teach the market to understand it.
                  </p>
                  <p>
                    Journalism trained me to find the thesis hidden in hours of noise. Startups taught me what happens next. The same idea has to hold up in a pitch, a landing page and a sales call without drifting.
                  </p>
                </div>
                <div className="w-full max-w-[420px] mx-auto min-[768px]:max-w-[360px] min-[768px]:justify-self-end min-[768px]:self-start">
                  <img
                    src={portraitImg}
                    alt="Illustrated portrait of Sampath Putrevu" loading="lazy" width="800" height="800" className="w-full h-auto aspect-auto object-contain object-top rounded-[12px] shadow-sm grayscale opacity-90 p-[10px] bg-transparent"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[20px] text-lg font-normal leading-relaxed text-panel-body w-full min-w-0">
                <p>
                  At <a href="https://www.zenskar.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Zenskar</a>, the work began with language, for a product buyers could not yet describe. Distribution came after the positioning was clear enough to build on.
                </p>
                <p>
                  At <a href="https://www.accel.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Accel</a>, I helped build SeedToScale. We turned what founders and investors knew privately into frameworks and company stories the ecosystem could use.
                </p>
                <p>
                  Today I lead marketing for <a href="https://www.champ.ai/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Champ AI</a>, built by former Instacart engineering leaders. I translate a technically complex product into a business outcome buyers can act on.
                </p>
                <p>
                  I have spent nearly a decade profiling, interviewing and working alongside technical founders. I know how to extract the conviction you already hold, and give it the form it needs to travel.
                </p>
              </div>
            </div>
          </FadePanel>
          </div>
        </section>



        {/* Selected reporting */}
        <section id="selected-reporting" className="home-section scroll-mt-[100px]">
          <div className="section-row">
          <div className="section-label-container">
            <div className="section-label-panel">
              <h2 className="type-section-label">Selected reporting</h2>
              <div className="section-label-rule w-12 h-px mt-4 md:mt-5" style={{ background: "var(--burgundy)" }}></div>
            </div>
          </div>

          <FadePanel className={panelClass}>
            <div className="flex flex-col gap-8 md:gap-10">
              <div className="flex flex-col gap-6 text-lg font-normal leading-relaxed text-panel-body max-w-[65ch]">
                <p>
                  Before I worked inside startups, I spent four years reporting on how technical companies were built. That work taught me to find the idea beneath the product and give it a form other people can understand.
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[15px] font-medium text-panel-muted pt-2 border-t border-divider-dark/10">
                  <span>4 years at YourStory</span>
                  <span className="w-1 h-1 rounded-full bg-divider-dark opacity-30"></span>
                  <span>406 published stories</span>
                  <span className="w-1 h-1 rounded-full bg-divider-dark opacity-30"></span>
                  <span>350+ interviews</span>
                </div>
              </div>

              <div className="flex flex-col xl:grid xl:grid-cols-3 gap-0 xl:gap-8">
                {journalismStories.filter(s => ['postman', 'hubspot', 'google-maps-india'].includes(s.slug)).map((story, idx, arr) => (
                  <div key={story.slug} className={`flex flex-col pb-8 xl:pb-0 ${idx !== arr.length - 1 ? 'border-b border-divider-dark/10 mb-8 xl:mb-0 xl:border-b-0 xl:border-r xl:border-divider-dark/10 xl:pr-8' : ''} group hover:-translate-y-1 transition-transform duration-300 ease-out`}>
                    <span className="type-label-small mb-4 block text-panel-muted">{story.label}</span>
                    <h3 className="type-card-heading-1 mb-3 text-panel-heading">{story.headline}</h3>
                    <p className="mb-4 text-panel-body text-[17px] leading-[1.7]">{story.description}</p>
                    <p className="mb-6 text-sm flex-grow text-panel-muted">{story.metadata}</p>
                    <div className="flex flex-col items-start gap-3 mt-auto">
                      <Link to={`/journalism/${story.slug}`} className="type-button-ghost inline-flex items-center text-burgundy font-medium hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-burgundy rounded-sm">
                        View story <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                      <a href={story.originalUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-panel-muted text-sm font-medium hover:text-burgundy transition-colors focus:outline-none focus:ring-2 focus:ring-burgundy rounded-sm text-left">
                        Read the original article <ExternalLink className="w-[14px] h-[14px] ml-1" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-divider-dark/10">
                <Link to="/journalism" className="inline-flex items-center text-[17px] font-semibold text-burgundy hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-burgundy focus:ring-offset-2 focus:ring-offset-parchment rounded-[2px] mt-2">
                  View all five selected stories <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </FadePanel>
          </div>
        </section>

        {/* Best Fit */}
        <section id="fit" className="home-section scroll-mt-[100px]">
          <div className="section-row">
          <div className="section-label-container">
            <div className="section-label-panel">
              <h2 className="type-section-label">Best fit</h2>
              <div className="section-label-rule w-12 h-px mt-4 md:mt-5" style={{ background: "var(--burgundy)" }}></div>
            </div>
          </div>

          <FadePanel className={panelClass}>
            <h3 className="type-section-heading-burgundy mb-6 md:mb-[30px] text-balance !font-normal !text-[34px]">Who should hire me?</h3>
            <div className="flex flex-col">
              {fitCriteria.map((item, idx) => (
                <div key={idx} className={`flex flex-col ${idx !== fitCriteria.length - 1 ? 'pb-[26px] md:pb-[30px] mb-[26px] md:mb-[30px] border-b border-divider-light' : ''}`}>
                  <h4 className="type-card-heading-3 mb-3 text-balance">{item.lead}</h4>
                  <p className="type-body-muted max-w-[72ch] text-pretty">{item.explanation}</p>
                </div>
              ))}
            </div>

            <div className="pt-[26px] md:pt-[30px] mt-[26px] md:mt-[30px] border-t border-divider-light">
              <h4 className="type-card-heading-3 mb-3 text-balance !text-[34px] !font-normal">Not the right fit</h4>
              <div className="type-body-muted space-y-2 max-w-[72ch] text-pretty">
                <p>Blog-volume retainers with no positioning foundation.</p>
                <p>Ghostwriting disconnected from the product.</p>
                <p>Social calendars searching for something meaningful to say.</p>
                <p>Positioning built in a workshop and abandoned in a deck.</p>
              </div>
            </div>
          </FadePanel>
          </div>
        </section>


            {/* Final CTA */}
      <section className="footer-cta">
        <div className="footer-cta-inner">
          <p className="type-cta-body mb-[29px]">If your product is ahead of its language, that's where we start.</p>
          <div className="flex justify-center items-center">
            <a
              href="https://cal.com/sampath-putrevu-z6jq0i"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-burgundy text-warm-white rounded-[4px] type-button hover:-translate-y-[1px] hover:bg-burgundy-dark transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent cursor-pointer"
            >
              Book a call
            </a>
          </div>

          <div className="social-links flex justify-center items-center gap-8">
            <a
              href="https://www.linkedin.com/in/sampathputrevu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white transition-colors flex items-center p-3 -m-3 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded-sm"
              aria-label="LinkedIn"
            >
              <div
                className="w-[28px] h-[28px] bg-current"
                style={{
                  maskImage: `url(${linkedinIcon})`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskImage: `url(${linkedinIcon})`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center'
                }}
              />
            </a>
            <a
              href="mailto:sampathptrvu@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white transition-colors flex items-center p-3 -m-3 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded-sm"
              aria-label="Email"
            >
              <Mail className="w-[28px] h-[28px]" />
            </a>
            <a
              href="https://wa.me/919989546250"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white transition-colors flex items-center p-3 -m-3 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded-sm"
              aria-label="WhatsApp"
            >
              <div
                className="w-[28px] h-[28px] bg-current"
                style={{
                  maskImage: `url(${whatsappIcon})`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskImage: `url(${whatsappIcon})`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center'
                }}
              />
            </a>
          </div>
        </div>
        </section>
      </main>
    </div>
  );
}
