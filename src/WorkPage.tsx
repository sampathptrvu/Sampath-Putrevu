import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, MapPin, Mail, MessageCircle, Menu, X, ScanSearch, Crop, Send, ArrowRight, ArrowDown } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import accelLogo from './accel-logo.png';
import bessemerLogo from './bessemer-logo.svg';
import sequoiaLogo from './sequoia-logo.svg';
import linkedinIcon from './linkedin-icon.png';
import whatsappIcon from './whatsapp-icon.png';
import portraitImg from './assets/portrait.png';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const pillars = [
  {
    title: "Extract",
    description: "Founder interviews, customer conversations, competitive context. I find the idea the company already knows but has not yet named."
  },
  {
    title: "Frame",
    description: "Category language, founding narrative, memorable frameworks. I give the idea a form people can understand and repeat."
  },
  {
    title: "Make it travel",
    description: "Website, founder voice, sales narrative, launches, essays, customer proof. I carry the idea into every place the company has to explain itself."
  }
];

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

  const bgOpacity = useTransform(scrollYProgress, [0, 0.4, 0.5, 0.6, 1], [0.95, 0.95, 0.5, 0.95, 0.95]);
  const backgroundColor = useTransform(bgOpacity, (alpha) => `rgba(252, 249, 242, ${alpha})`);
  
  const finalClassName = className?.replace('', '');

  return (
    <motion.div 
      ref={ref} 
      className={finalClassName} 
       
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





const HowIHelpCards = () => {
  const [activeCard, setActiveCard] = useState(0);

  const handleKeyDown = (e, idx) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveCard(idx);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setActiveCard((prev) => (prev + 1) % 3);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setActiveCard((prev) => (prev - 1 + 3) % 3);
    }
  };

  const cards = [
    {
      step: "01",
      icon: <ScanSearch className="w-5 h-5 md:w-[22px] md:h-[22px] stroke-[1.5]" />,
      title: "Extract",
      description: "Founder interviews, customer conversations, competitive context. I find the idea the company already knows but hasn't yet named.",
      result: "The idea has a name."
    },
    {
      step: "02",
      icon: <Crop className="w-5 h-5 md:w-[22px] md:h-[22px] stroke-[1.5]" />,
      title: "Frame",
      description: "Category language, founding narrative, memorable frameworks. I give the idea a form people can understand and repeat.",
      result: "The idea has a form."
    },
    {
      step: "03",
      icon: <Send className="w-5 h-5 md:w-[22px] md:h-[22px] stroke-[1.5]" />,
      title: "Make it travel",
      description: "Website, founder voice, sales narrative, launches, essays, customer proof. I carry the idea into every place the company has to explain itself.",
      result: "The market can repeat it."
    }
  ];

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Selectors */}
      <div 
        className="flex flex-col md:grid md:grid-cols-3 gap-3 md:gap-4 w-full"
        role="tablist"
        aria-label="How I help process stages"
      >
        {cards.map((card, idx) => {
          const isActive = activeCard === idx;
          return (
            <div 
              key={idx}
              className={cn(
                "group flex flex-col relative rounded-[12px] border p-5 md:p-[24px] cursor-pointer text-left transition-all duration-200 ease-in-out outline-none focus-visible:ring-2 focus-visible:ring-deep-forest focus-visible:ring-offset-2 min-h-[142px] md:min-h-[160px]",
                isActive ? "border-deep-forest" : "border-transparent"
              )}
              onClick={() => setActiveCard(idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              tabIndex={isActive ? 0 : -1}
              role="tab"
              aria-selected={isActive}
              aria-controls={`stage-panel-${idx}`}
              id={`stage-tab-${idx}`}
            >
              <div className="text-[11px] md:text-[12px] font-sans font-bold uppercase tracking-[0.08em] mb-4 text-warm-white-muted">
                {card.step}
              </div>
              <div className={cn("flex items-center gap-3 mb-auto transition-colors duration-200 ease-in-out", isActive ? "text-warm-white" : "text-warm-white group-hover:text-text-on-dark")}>
                {card.icon}
                <h3 className="font-sans font-semibold text-[18px] leading-tight text-deep-forest text-left">{card.title}</h3>
              </div>
              
              <div className="pt-4 mt-6">
                <p className={cn("text-[14px] md:text-[15px] transition-colors duration-200 ease-in-out", isActive ? "text-warm-white font-medium" : "text-text-on-dark font-normal group-hover:text-text-on-dark")}>
                  {card.result}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Detail Panel */}
      <div 
        className="w-full rounded-[12px] p-6 md:p-8 flex items-center min-h-[120px] md:min-h-[140px]"
        role="tabpanel"
        id={`stage-panel-${activeCard}`}
        aria-labelledby={`stage-tab-${activeCard}`}
      >
        <p className="text-text-on-dark text-[17px] md:text-[18px] leading-[1.6] font-light max-w-4xl transition-opacity duration-200 ease-in-out">
          {cards[activeCard].description}
        </p>
      </div>
    </div>
  );
};
export default function WorkPage() {
  useEffect(() => {
    document.title = "Selected Work | Sampath Putrevu";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Selected narrative, brand, editorial, and marketing work across Accel, Zenskar, Champ AI, Web3Auth, Masai School, Setu, and YourStory.");
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', "Selected Work | Sampath Putrevu");
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', "Selected narrative, brand, editorial, and marketing work across Accel, Zenskar, Champ AI, Web3Auth, Masai School, Setu, and YourStory.");
    }
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) {
      twTitle.setAttribute('content', "Selected Work | Sampath Putrevu");
    }
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) {
      twDesc.setAttribute('content', "Selected narrative, brand, editorial, and marketing work across Accel, Zenskar, Champ AI, Web3Auth, Masai School, Setu, and YourStory.");
    }
    
    window.scrollTo(0, 0);

    return () => {
      // Clean up metadata when leaving if needed, but since it's a SPA it's tricky.
      // Ideally we'd reset it, but simplest is to just set it here.
    };
  }, []);


  return (
    <div className="min-h-screen selection:bg-burgundy selection:text-warm-white font-sans text-warm-white">
      <Header />
      <main className="pb-12">
        {/* Fixed Background Image Layer */}
        <div className="fixed inset-0 z-[-2] pointer-events-none">
                    <img style={{ filter: "brightness(1.12) contrast(1.03) saturate(0.96) hue-rotate(3deg)" }} src="https://res.cloudinary.com/wljosnwf/image/upload/v1784421613/sampathputrevu_replace_the_removed_areas_with_marina_bay_sands__165ca779-2407-4a89-9c82-1934d0a14161_mr5tej.png" alt="" fetchPriority="high" className="w-full h-full object-cover object-center " />
        </div>

        {/* Fixed Readability Overlay */}
        
        {/* Hero Section */}
        <section className="relative w-full min-h-[75svh] md:min-h-[70svh] flex flex-col justify-start md:justify-center items-center pt-[18vh] md:pt-0">
          <div className="w-full min-[1200px]:w-[calc(100vw-120px)] min-[1200px]:max-w-none relative z-10 text-left flex flex-col items-start pb-20 md:pb-0 md:-mt-[5vh] px-5 sm:px-6 md:pr-8 md:pl-[clamp(48px,8vw,80px)] lg:pl-[clamp(80px,10vw,155px)] lg:pr-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="past-work-intro flex flex-col items-start justify-center w-full max-w-4xl pt-8 pb-12"
            >
              <span className="text-[20px] md:text-[22px] lg:text-[24px] font-bold tracking-wide text-text-on-dark mb-[24px] block text-left">
                Selected work
              </span>
              <h1 className="font-display font-normal text-[30px] md:text-[40px] not-italic leading-[1.05] tracking-[-0.015em] mb-[28px] text-warm-white text-left">
                Ideas that travelled beyond the company that created them.
              </h1>
              <p className="text-[18px] md:text-[22px] text-text-on-dark leading-[1.5] mb-[32px] font-normal italic text-left">
                Work across startup journalism, venture editorial platforms, AI and B2B SaaS. Each project began with something the company understood internally and needed the market to understand clearly.
              </p>
              
              <Link 
                to="/"
                className="inline-flex items-center text-text-on-dark hover:text-warm-white text-[15px] md:text-[16px] font-bold transition-colors group"
              >
                <ArrowRight className="w-4 h-4 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
                Back to homepage
              </Link>
            </motion.div>
          </div>
        </section>

                {/* Selected Work */}
        <section className="max-w-5xl mx-auto px-6 py-8 md:py-12">
          <FadePanel className="past-work-intro w-full">
            <h2 className="font-display font-normal text-[32px] md:text-[40px] text-warm-white mb-10 leading-[1.05]">Work across venture, AI, SaaS, and startup media.</h2>
            
            <div className="flex flex-col border-b border-divider-dark pb-8 mb-8">
              <h3 className="work-company-name text-[20px] md:text-[22px] lg:text-[24px] mb-1">Champ AI</h3>
              <p className="work-company-descriptor font-sans text-[18px] mb-3">Redpoint-backed AI automation platform built by ex-Instacart founders.</p>
              <p className="work-company-explanation font-sans text-[16px] max-w-[76ch]">
                Joined as fractional VP Marketing at the seed stage to define how the company talked about itself. Developed the category narrative positioning Champ as a way to buy outcomes without building infrastructure — moving the conversation away from software and toward business results. Owned the seed round announcement, built the founder voice across LinkedIn and X, and ran the webinar engine as the primary demand channel.
              </p>
            </div>
            
            <div className="flex flex-col border-b border-divider-dark pb-8 mb-8">
              <h3 className="work-company-name text-[20px] md:text-[22px] lg:text-[24px] mb-1">Zenskar</h3>
              <p className="work-company-descriptor font-sans text-[18px] mb-3">Bessemer-backed billing and revenue infrastructure for modern SaaS.</p>
              <p className="work-company-explanation font-sans text-[16px] max-w-[76ch]">
                Built the brand and inbound engine for a product that required the market to unlearn how it thought about pricing software. Developed the positioning, website narrative, and content system that contributed to a $2M sales pipeline. One of the harder narrative problems. The category did not yet exist when we started.
              </p>
            </div>
            
            <div className="flex flex-col border-b border-divider-dark pb-8 mb-8">
              <h3 className="work-company-name text-[20px] md:text-[22px] lg:text-[24px] mb-1">Web3Auth</h3>
              <p className="work-company-descriptor font-sans text-[18px] mb-3">Sequoia-backed wallet infrastructure, acquired by MetaMask in 2025.</p>
              <p className="work-company-explanation font-sans text-[16px] max-w-[76ch]">
                Built the content and brand engine from scratch — CMS, style guides, SEO foundation, verbal tone. Owned PR end to end for global partner launches including Fox.com, Trust Wallet, SK Planet, and Google Firebase. Wrote the case studies that proved the product worked: Pop Social surged 35% in signups, Treasure Chess onboarded 100,000+ wallets. Also handled crisis communications during the Magic Link phishing attack and the MPC protocol attacks — some of the hardest writing the job asked for.
              </p>
            </div>
            
            <div className="flex flex-col border-b border-divider-dark pb-8 mb-8">
              <h3 className="work-company-name text-[20px] md:text-[22px] lg:text-[24px] mb-1">Accel</h3>
              <p className="work-company-descriptor font-sans text-[18px] mb-3">The knowledge platform of one of India's most active early-stage funds.</p>
              <p className="work-company-explanation font-sans text-[16px] max-w-[76ch]">
                As Consulting Marketer in Residence, built SeedToScale, Accel's editorial platform, from the ground up. Helped turn the tacit knowledge of founders and investors into frameworks the ecosystem could actually use. The Delta 4 theory — Kunal Shah's now widely cited mental model — was named, structured, and published through this platform.
              </p>
            </div>
            
            <div className="flex flex-col border-b border-divider-dark pb-8 mb-8">
              <h3 className="work-company-name text-[20px] md:text-[22px] lg:text-[24px] mb-1">Masai School</h3>
              <p className="work-company-descriptor font-sans text-[18px] mb-3">India Quotient-backed edtech that went from Series A to Series B and two acquisitions.</p>
              <p className="work-company-explanation font-sans text-[16px] max-w-[76ch]">
                Came in as the first marketing hire and defined the brand from zero — content guidelines, style guides, web layouts, social presence. PR lead across every significant company moment: Series A in CNBC and Economic Times, Series B in MoneyControl, and two acquisitions covered in Mint, VCCircle, and Business World. Also placed a thought leadership piece in the Indian Express. The kind of role where you own whatever the company needs said next.
              </p>
            </div>
            
            <div className="flex flex-col">
              <h3 className="work-company-name text-[20px] md:text-[22px] lg:text-[24px] mb-1">YourStory</h3>
              <p className="work-company-descriptor font-sans text-[18px] mb-3">India's most-read startup media publication.</p>
              <p className="work-company-explanation font-sans text-[16px] max-w-[76ch]">
                Spent 3.5 years profiling the founders building India's internet economy — across Techie Tuesdays, The Turning Point, and The Product Roadmap. Interviewed Dharmesh Shah, the Postman founders, and hundreds of operators at inflection points in their companies. This is where I learned that the most important thing a founder says is rarely the first thing they say.
              </p>
            </div>
          </FadePanel>
        </section>

        
      </main>

      {/* Final CTA */}
      <section className="footer-cta">
        <div className="footer-cta-inner">
          <h2 className="font-display font-normal text-[36px] mb-6 text-warm-white leading-[1.05] tracking-[-0.015em]">The story is the strategy.</h2>
          <p className="text-[20px] text-text-on-dark font-medium mb-16">If your product is ahead of its language, that's where we start.</p>
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
          
          <div className="flex justify-center items-center gap-8 mt-16">
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
