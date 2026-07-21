import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { Mail, ArrowRight } from 'lucide-react';
import linkedinIcon from './linkedin-icon.png';

export default function WorkPage() {
  useEffect(() => {
    document.title = "Past Work | Sampath Putrevu";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Past narrative, brand, editorial, and marketing work across Accel, Zenskar, Champ AI, Web3Auth, Masai School, Setu, and YourStory.");
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', "Past Work | Sampath Putrevu");
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', "Past narrative, brand, editorial, and marketing work across Accel, Zenskar, Champ AI, Web3Auth, Masai School, Setu, and YourStory.");
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="work-page selection:bg-burgundy selection:text-warm-white font-sans text-warm-white relative">
      <div className="work-page-background"></div>
      <div className="work-page-background-overlay"></div>
      
      <Header />
      
      <main className="work-page-main work-page-content pb-12">
        <div className="work-page-container">
          {/* Glass Intro Panel */}
          <section className="work-intro-panel glass-surface">
            <span className="eyebrow">Past work</span>
            <h1 className="main-headline">
              Ideas that travelled beyond the companies that created them.
            </h1>
            <p className="intro-paragraph">
              Work across startup journalism, venture editorial platforms, AI and B2B SaaS. Each project began with something the company understood internally and needed the market to understand clearly.
            </p>
            <Link to="/" className="back-link group">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
              Back to homepage
            </Link>
          </section>

          {/* Parchment Work List Panel */}
          <section className="work-list-panel">
            <h2 className="work-list-heading">Work across venture, AI, SaaS, and startup media.</h2>
            
            <div className="work-entry">
              <h3 className="company-name">Champ AI</h3>
              <div className="accent-rule"></div>
              <p className="descriptor">Redpoint-backed AI automation platform built by ex-Instacart founders.</p>
              <p className="explanation">
                Joined as fractional VP Marketing at the seed stage to define how the company talked about itself. Developed the category narrative positioning Champ as a way to buy outcomes without building infrastructure — moving the conversation away from software and toward business results. Owned the seed round announcement, built the founder voice across LinkedIn and X, and ran the webinar engine as the primary demand channel.
              </p>
            </div>
            
            <div className="work-entry">
              <h3 className="company-name">Zenskar</h3>
              <div className="accent-rule"></div>
              <p className="descriptor">Bessemer-backed billing and revenue infrastructure for modern SaaS.</p>
              <p className="explanation">
                Built the brand and inbound engine for a product that required the market to unlearn how it thought about pricing software. Developed the positioning, website narrative, and content system that contributed to a $2M sales pipeline. One of the harder narrative problems. The category did not yet exist when we started.
              </p>
            </div>
            
            <div className="work-entry">
              <h3 className="company-name">Web3Auth</h3>
              <div className="accent-rule"></div>
              <p className="descriptor">Sequoia-backed wallet infrastructure, acquired by MetaMask in 2025.</p>
              <p className="explanation">
                Built the content and brand engine from scratch — CMS, style guides, SEO foundation, verbal tone. Owned PR end to end for global partner launches including Fox.com, Trust Wallet, SK Planet, and Google Firebase. Wrote the case studies that proved the product worked: Pop Social surged 35% in signups, Treasure Chess onboarded 100,000+ wallets. Also handled crisis communications during the Magic Link phishing attack and the MPC protocol attacks — some of the hardest writing the job asked for.
              </p>
            </div>
            
            <div className="work-entry">
              <h3 className="company-name">Accel</h3>
              <div className="accent-rule"></div>
              <p className="descriptor">The knowledge platform of one of India's most active early-stage funds.</p>
              <p className="explanation">
                As Consulting Marketer in Residence, built SeedToScale, Accel's editorial platform, from the ground up. Helped turn the tacit knowledge of founders and investors into frameworks the ecosystem could actually use. The Delta 4 theory — Kunal Shah's now widely cited mental model — was named, structured, and published through this platform.
              </p>
            </div>
            
            <div className="work-entry">
              <h3 className="company-name">Masai School</h3>
              <div className="accent-rule"></div>
              <p className="descriptor">India Quotient-backed edtech that went from Series A to Series B and two acquisitions.</p>
              <p className="explanation">
                Came in as the first marketing hire and defined the brand from zero — content guidelines, style guides, web layouts, social presence. PR lead across every significant company moment: Series A in CNBC and Economic Times, Series B in MoneyControl, and two acquisitions covered in Mint, VCCircle, and Business World. Also placed a thought leadership piece in the Indian Express. The kind of role where you own whatever the company needs said next.
              </p>
            </div>
            
            <div className="work-entry">
              <h3 className="company-name">YourStory</h3>
              <div className="accent-rule"></div>
              <p className="descriptor">India's most-read startup media publication.</p>
              <p className="explanation">
                Spent 3.5 years profiling the founders building India's internet economy — across Techie Tuesdays, The Turning Point, and The Product Roadmap. Interviewed Dharmesh Shah, the Postman founders, and hundreds of operators at inflection points in their companies. This is where I learned that the most important thing a founder says is rarely the first thing they say.
              </p>
            </div>
          </section>
        </div>
      </main>

      <section className="work-closing-cta glass-surface work-page-content">
        <h2 className="font-display font-normal text-[36px] mb-6 text-warm-white leading-[1.05] tracking-[-0.015em] text-center">The story is the strategy.</h2>
        <p className="text-[20px] text-text-on-dark font-medium mb-16 text-center">If your product is ahead of its language, that's where we start.</p>
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
      </section>
    </div>
  );
}
