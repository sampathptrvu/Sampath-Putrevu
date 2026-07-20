import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { motion, useScroll, useTransform } from 'motion/react';
import { Mail, ScanSearch, Crop, Send, ArrowRight } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import linkedinIcon from './linkedin-icon.png';

import portraitImg from './assets/portrait.png';
import accelLogo from './accel-logo.png';
import bessemerLogo from './bessemer-logo.svg';
import sequoiaLogo from './sequoia-logo.svg';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const fitCriteria = [
  {
    lead: "Your product is ahead of your story",
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
      className={className}
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
  

  return (
    <div className="min-h-screen selection:bg-burgundy selection:text-warm-white font-sans text-warm-white">
      <Header />
      
      <main className="pb-12">
        {/* Fixed Background Image Layers */}
        
        {/* Layer 1: Sharp (Original) */}
        <div 
          className={cn(
            "fixed inset-0 w-full h-[100dvh] overflow-hidden pointer-events-none z-[-2] transition-opacity duration-[400ms] ease-in-out motion-reduce:transition-none",
            "opacity-100"
          )}
        >
          <img style={{ filter: "brightness(1.12) contrast(1.03) saturate(0.96) hue-rotate(3deg)" }} src="https://res.cloudinary.com/wljosnwf/image/upload/v1784421613/sampathputrevu_replace_the_removed_areas_with_marina_bay_sands__165ca779-2407-4a89-9c82-1934d0a14161_mr5tej.png" alt="" fetchPriority="high" className="w-full h-[100dvh] object-cover object-center " />
          
        </div>
        
        {/* Hero Section */}
        <section className="hero-section">
          <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="hero-copy-panel z-10"
            >
                <span className="eyebrow font-bold font-sans text-[rgba(255,250,242,0.92)] text-center block">
                  Narratives for technical founders
                </span>
                <h1 className="font-display font-normal not-italic text-balance text-warm-white text-center">
                  Great products are often lost in translation
                </h1>
                <p className="hero-description font-sans font-normal text-text-on-dark text-center">
                  I find the idea only your company can own, and give it language the market can repeat.
                </p>
                
                <div className="hero-actions">
                  <a 
                    href="https://cal.com/sampath-putrevu-z6jq0i"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto text-center inline-flex items-center justify-center px-6 md:px-[28px] py-[14px] bg-burgundy text-warm-white rounded-[4px] text-[15px] font-bold hover:bg-burgundy-dark transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent cursor-pointer shadow-sm"
                  >
                    Book a call
                  </a>
                  <Link 
                    to="/work"
                    className="w-full md:w-auto text-center inline-flex items-center justify-center px-6 md:px-[28px] py-[14px] bg-white/10 backdrop-blur-sm border border-white/20 text-warm-white rounded-[4px] text-[15px] font-bold hover:bg-white/15 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent cursor-pointer shadow-sm"
                  >
                    Past work
                  </Link>
                                                </div>
            </motion.div>
        </section>

        
        {/* Credibility Section */}
        <section className="credibility-section">
          <div className="credibility-inner">
            <p className="credibility-label font-bold tracking-[0.03em] uppercase text-[12px] md:text-[13px] opacity-80">Trusted by founders and teams backed by:</p>
            <div className="credibility-logos">
              <img src={sequoiaLogo} alt="Sequoia" className="h-[20px] md:h-[22px] w-auto object-contain shrink-0 brightness-0 opacity-[0.85]" />
              <img src={accelLogo} alt="Accel" className="h-[23px] md:h-[25px] w-auto object-contain shrink-0 brightness-0 opacity-[0.85]" />
              <img src={bessemerLogo} alt="Bessemer Venture Partners" className="h-[34px] md:h-[36px] w-auto object-contain shrink-0 brightness-0 opacity-[0.85]" />
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problem" className="home-section scroll-mt-[100px]">
          <div className="section-inner">
          <div className="section-label-container">
            <div className="section-label-glass glass-surface">
              <h2 className="section-label problem-label text-xl md:text-2xl font-semibold tracking-tight text-warm-white">The problem</h2>
              <div className="w-12 h-px bg-burgundy mt-4 md:mt-5"></div>
            </div>
          </div>
          
          <FadePanel className={panelClass}>
              <h3 className="font-display font-normal text-[22px] md:text-[26px] mb-6 text-burgundy leading-[1.05] tracking-[-0.015em] max-w-[58ch]">
                Your product is ahead of its language
              </h3>
              <div className="flex flex-col gap-5 text-lg font-normal leading-relaxed text-panel-body max-w-[68ch]">
                <p className="font-medium text-panel-heading">
                  Most technical products are undersold by their own language.
                </p>
                <p>
                  Founders build profound infrastructure, but describe it using the same generic categories as their weakest competitors. Or they build something entirely new, but struggle to explain it to anyone outside their engineering team.
                </p>
                <p>
                  The result is a product that has to fight for attention it should naturally command.
                </p>
                <p>
                  A strong narrative closes that gap. It gives the market a way to understand your conviction, remember your difference, and repeat your value to others.
                </p>
              </div>
            </FadePanel>
          </div>
        </section>

        {/* How I Help */}
        <section id="expertise" className="home-section scroll-mt-[100px]">
          <div className="section-inner">
          <div className="section-label-container">
            <div className="section-label-glass glass-surface">
              <h2 className="section-label text-xl md:text-2xl font-semibold tracking-tight text-warm-white">How I help</h2>
              <div className="w-12 h-px bg-burgundy mt-4 md:mt-5"></div>
            </div>
          </div>
          
          <FadePanel className={panelClass}>
            <div className="flex flex-col min-[900px]:grid min-[900px]:grid-cols-3 gap-0 min-[900px]:gap-8">
                
                {/* 01 */}
                <div className="flex flex-col pb-6 min-[900px]:pb-0 border-b border-divider-light min-[900px]:border-b-0 min-[900px]:border-r min-[900px]:pr-8 group hover:-translate-y-1 transition-transform duration-300 ease-out">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[14px] font-bold text-panel-muted">01</span>
                    <ScanSearch className="w-5 h-5 text-panel-muted group-hover:text-burgundy transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-burgundy mb-3">Extract</h3>
                  <p className="text-[16px] md:text-[17px] leading-[1.6] text-panel-body mb-6 flex-grow">
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
                    <span className="text-[14px] font-bold text-panel-muted">02</span>
                    <Crop className="w-5 h-5 text-panel-muted group-hover:text-burgundy transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-burgundy mb-3">Frame</h3>
                  <p className="text-[16px] md:text-[17px] leading-[1.6] text-panel-body mb-6 flex-grow">
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
                    <span className="text-[14px] font-bold text-panel-muted">03</span>
                    <Send className="w-5 h-5 text-panel-muted group-hover:text-burgundy transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-burgundy mb-3">Make it travel</h3>
                  <p className="text-[16px] md:text-[17px] leading-[1.6] text-panel-body mb-6 flex-grow">
                    Website, founder voice, sales narrative, launches, essays, customer proof. I carry the idea into every place the company has to explain itself.
                  </p>
                  <div className="pt-4 border-t border-divider-light mt-auto">
                    <p className="text-[15px] font-semibold text-burgundy">
                      The market can repeat it.
                    </p>
                  </div>
                </div>

              </div>
          </FadePanel>
          </div>
        </section>

        {/* Why me */}
        <section id="why-me" className="home-section scroll-mt-[100px]">
          <div className="section-inner">
          <div className="section-label-container">
            <div className="section-label-glass glass-surface">
              <h2 className="section-label text-xl md:text-2xl font-semibold tracking-tight text-warm-white">Why me</h2>
              <div className="w-12 h-px bg-burgundy mt-4 md:mt-5"></div>
            </div>
          </div>
          
          <FadePanel className={panelClass}>
            <div className="flex flex-col min-[768px]:grid min-[768px]:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] gap-[clamp(32px,4vw,52px)] items-start">
              <div className="flex flex-col gap-5 text-lg font-normal leading-relaxed text-panel-body w-full max-w-[58ch] min-w-0">
                <p>
                  Journalism trained me to find the thesis hidden in hours of noise. My time inside startups trained me to turn that thesis into a business asset that actually moves the market.
                </p>
                <p>
                  Before working independently, I led brand and inbound at Zenskar, a Bessemer-backed billing product where we had to educate the market on a fundamentally new way to price software. 
                </p>
                <p>
                  Before that, I built the SeedToScale editorial platform at Accel, helping turn the tacit knowledge of founders into reference material used across the Indian startup ecosystem.
                </p>
                <p>
                  I have spent a decade profiling, interviewing, and working alongside technical founders. I know how to extract the conviction you already hold, and how to give it the form it needs to travel.
                </p>
              </div>
              <div className="w-full max-w-[420px] mx-auto min-[768px]:max-w-[360px] min-[768px]:justify-self-end min-[768px]:self-start">
                <img 
                  src={portraitImg} 
                  alt="Portrait of Sampath Putrevu" 
                  className="w-full h-auto aspect-auto object-contain object-top rounded-[12px] shadow-sm grayscale opacity-90 p-[10px] bg-transparent"
                />
              </div>
            </div>
          </FadePanel>
          </div>
        </section>

        {/* What I believe */}
        <section id="beliefs" className="home-section scroll-mt-[100px]">
          <div className="section-inner">
          <div className="section-label-container">
            <div className="section-label-glass glass-surface">
              <h2 className="section-label text-xl md:text-2xl font-semibold tracking-tight text-warm-white">What I believe</h2>
              <div className="w-12 h-px bg-burgundy mt-4 md:mt-5"></div>
            </div>
          </div>
          
          <FadePanel className={panelClass}>
            <div className="flex flex-col">
              <div className="flex flex-col pb-[26px] md:pb-[30px] border-b border-divider-light">
                <h4 className="font-sans text-xl md:text-[22px] font-bold text-burgundy leading-snug mb-3 text-balance">Clarity is an aggressive act.</h4>
                <p className="text-panel-body text-[16px] md:text-[17px] font-normal leading-relaxed max-w-[72ch] text-pretty">In a crowded market, most companies retreat into generic safety. Saying exactly what you are, and exactly who you are not, is how you force the market to pay attention.</p>
              </div>
              
              <div className="flex flex-col py-[26px] md:py-[30px] border-b border-divider-light">
                <h4 className="font-sans text-xl md:text-[22px] font-bold text-burgundy leading-snug mb-3 text-balance">The founder is the source material.</h4>
                <p className="text-panel-body text-[16px] md:text-[17px] font-normal leading-relaxed max-w-[72ch] text-pretty">You cannot outsource a narrative. The best marketing does not invent a story; it captures the thesis the founder is already executing and makes it legible to the outside world.</p>
              </div>
              
              <div className="flex flex-col pt-[26px] md:pt-[30px]">
                <h4 className="font-sans text-xl md:text-[22px] font-bold text-burgundy leading-snug mb-3 text-balance">Judgment gets more valuable as production gets cheaper.</h4>
                <p className="text-panel-body text-[16px] md:text-[17px] font-normal leading-relaxed max-w-[72ch] text-pretty">AI can produce endless drafts. Knowing which angle, tension, or idea is worth building around is what doesn't get cheaper.</p>
              </div>
            </div>
            
            <div className="pt-[26px] md:pt-[30px] mt-[26px] md:mt-[30px] border-t border-divider-light">
              <p className="text-burgundy text-base md:text-lg font-medium italic leading-relaxed">
                Content is now infinite. Taste is still rare.
              </p>
            </div>
          </FadePanel>
          </div>
        </section>

        {/* Best Fit */}
        <section id="fit" className="home-section scroll-mt-[100px]">
          <div className="section-inner">
          <div className="section-label-container">
            <div className="section-label-glass glass-surface">
              <h2 className="section-label text-xl md:text-2xl font-semibold tracking-tight text-warm-white">Best fit</h2>
              <div className="w-12 h-px bg-burgundy mt-4 md:mt-5"></div>
            </div>
          </div>
          
          <FadePanel className={panelClass}>
            <h3 className="font-display font-normal text-2xl md:text-3xl text-burgundy mb-6 md:mb-[30px] leading-[1.05] tracking-[-0.015em] text-balance">Who should hire me?</h3>
            <div className="flex flex-col">
              {fitCriteria.map((item, idx) => (
                <div key={idx} className={`flex flex-col ${idx !== fitCriteria.length - 1 ? 'pb-[26px] md:pb-[30px] mb-[26px] md:mb-[30px] border-b border-divider-light' : ''}`}>
                  <h4 className="font-sans text-xl md:text-[22px] font-bold text-burgundy leading-snug mb-3 text-balance">{item.lead}</h4>
                  <p className="text-panel-body text-[16px] md:text-[17px] font-normal leading-relaxed max-w-[72ch] text-pretty">{item.explanation}</p>
                </div>
              ))}
            </div>
            
            <div className="pt-[26px] md:pt-[30px] mt-[26px] md:mt-[30px] border-t border-divider-light">
              <h4 className="font-sans text-xl md:text-[22px] font-bold text-burgundy leading-snug mb-3 text-balance">Not the right fit</h4>
              <div className="text-panel-body text-[16px] md:text-[17px] font-normal leading-relaxed space-y-2 max-w-[72ch] text-pretty">
                <p>Blog-volume retainers with no positioning foundation.</p>
                <p>Ghostwriting disconnected from the product.</p>
                <p>Social calendars searching for something meaningful to say.</p>
                <p>Positioning built in a workshop and abandoned in a deck.</p>
              </div>
            </div>
          </FadePanel>
          </div>
        </section>

        
      </main>

      {/* Final CTA */}
      <section className="footer-cta">
        <div className="footer-cta-inner">
          <h2 className="font-display font-normal text-warm-white tracking-[-0.015em]">The story is the strategy.</h2>
          <p className="font-sans font-medium text-text-on-dark">If your product is ahead of its language, that's where we start.</p>
          <div className="flex justify-center items-center">
            <a 
              href="https://cal.com/sampath-putrevu-z6jq0i"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-burgundy text-warm-white rounded-[4px] text-sm font-bold hover:-translate-y-[1px] hover:bg-burgundy-dark transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent cursor-pointer"
            >
              Book a call
            </a>
          </div>
          
          <div className="social-links flex justify-center items-center gap-8">
            <a 
              href="https://www.linkedin.com/in/sampathputrevu/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-warm-white/60 hover:text-warm-white transition-colors flex items-center p-3 -m-3"
              aria-label="LinkedIn"
            >
              <div 
                className="w-[18px] h-[18px] bg-current" 
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
              className="text-warm-white/60 hover:text-warm-white transition-colors flex items-center p-3 -m-3"
              aria-label="Email"
            >
              <Mail className="w-[18px] h-[18px]" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
