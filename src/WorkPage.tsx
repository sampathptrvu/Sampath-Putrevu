import { useEffect } from 'react';
import { useMetadata } from './useMetadata';
import { Link } from 'react-router-dom';
import Header from './Header';
import { Mail, ArrowRight } from 'lucide-react';
import linkedinIcon from './linkedin-icon.png';
import whatsappIcon from './whatsapp-icon.png';

export default function WorkPage() {
  useMetadata({
    title: "Past Work | Sampath Putrevu",
    description: "Selected work across Champ AI, Zenskar, Web3Auth, Accel, Masai School, and YourStory. Narrative, brand, PR, and inbound for AI-native and technical companies.",
    canonical: "https://sampathputrevu.com/work",
    ogTitle: "Past Work | Sampath Putrevu",
    ogDescription: "Selected work across Champ AI, Zenskar, Web3Auth, Accel, Masai School, and YourStory. Narrative, brand, PR, and inbound for AI-native and technical companies.",
    ogUrl: "https://sampathputrevu.com/work",
    ogType: "website"
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="work-page selection:bg-burgundy selection:text-warm-white font-sans text-warm-white relative">
      
      
      <Header />
      
      <main className="work-page-main work-page-content pb-12">
        <div className="work-page-container flex flex-col" style={{ gap: "var(--site-section-gap)" }}>
          {/* Glass Intro Panel */}
          <section className="work-intro-panel glass-surface">
            <span className="type-hero-eyebrow mb-[26px]">Past work</span>
            <h1 className="type-hero-headline mb-[30px]">
              Ideas that travelled beyond the companies that created them.
            </h1>
            <p className="font-sans text-[19px] font-semibold text-warm-white mb-2">
              Fractional VP Marketing, narrative, brand, and PR for AI-native and technical companies.
            </p>
            <p className="type-hero-description mb-[32px]">
              Work across startup journalism, venture editorial platforms, AI and B2B SaaS. Each project began with something the company understood internally and needed the market to understand clearly.
            </p>
            <Link to="/" className="back-link group">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
              Back to homepage
            </Link>
          </section>

          {/* Parchment Work List Panel */}
          <section className="work-list-panel">
            <h2 className="type-section-heading mb-8 text-balance">Work across venture, AI, SaaS, and startup media.</h2>
            
            <div className="work-entry">
              <h3 className="type-card-heading-1 mb-3">Moved the conversation from software to outcomes.</h3>
              <p className="type-card-heading-3 mt-4"><a href="https://www.champ.ai/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Champ AI</a> &middot; Fractional VP Marketing &middot; <a href="https://www.redpoint.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Redpoint</a>-backed, built by former Instacart founders</p>
              <p className="work-body">
                Joined at the seed stage to define how the company talked about itself. Developed the category narrative that positions Champ as a way to buy outcomes without building infrastructure. Owned the seed round announcement from first draft to distribution, built the founder's voice across LinkedIn and X, and ran the webinar engine as the primary demand channel. The category had no settled name, so the language had to teach the market what it was looking at while the product was still proving it.
              </p>
            </div>
            
            <div className="work-entry">
              <h3 className="type-card-heading-1 mb-3">Built the inbound engine behind $1.5M in qualified pipeline.</h3>
              <p className="type-card-heading-3 mt-4"><a href="https://www.zenskar.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Zenskar</a> &middot; Head of Content and Brand &middot; <a href="https://www.bvp.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Bessemer</a>-backed billing and revenue infrastructure</p>
              <p className="work-body">
                Led brand and inbound for a product that asked the market to unlearn how it priced software. Developed the positioning, the website narrative, and the content system that contributed to a $1.5M qualified sales pipeline, alongside a newsletter that held a 45% average open rate. The product challenged an established billing model, so every piece had to teach the problem before it could sell the answer.
              </p>
            </div>
            
            <div className="work-entry">
              <h3 className="type-card-heading-1 mb-3">Ran the story end to end, from partner launches to crisis response.</h3>
              <p className="type-card-heading-3 mt-4"><a href="https://web3auth.io/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Web3Auth</a> &middot; Communications and Content Lead &middot; <a href="https://www.sequoiacap.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Sequoia</a>-backed wallet infrastructure, acquired by MetaMask in 2025</p>
              <p className="work-body">
                Built the content and brand engine from scratch: CMS, style guides, SEO foundation, verbal tone. Owned PR for global partner launches including <a href="https://www.fox.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Fox.com</a>, <a href="https://trustwallet.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Trust Wallet</a>, <a href="https://www.skplanet.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">SK Planet</a>, and <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Google Firebase</a>. Wrote the case studies documenting what customers achieved on the product, including Pop Social's 35% rise in signups after integrating and the 100,000+ wallets created with Treasure Chess. When the Magic Link phishing attack and the MPC protocol attacks hit, I wrote the public statements. Some of the hardest writing the job asked for.
              </p>
            </div>
            
            <div className="work-entry">
              <h3 className="type-card-heading-1 mb-3">Turned a fund's private conviction into public reference material.</h3>
              <p className="type-card-heading-3 mt-4"><a href="https://www.accel.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Accel</a> &middot; Consulting Marketer in Residence &middot; SeedToScale, the knowledge platform of one of India's most active early-stage funds</p>
              <p className="work-body">
                Built SeedToScale with the team from the ground up and produced 100+ editorial assets across foundational long-form resources, founder frameworks, and podcasts. The job was turning the tacit knowledge of founders and investors into frameworks the ecosystem could actually use. Kunal Shah's Delta 4 theory is the clearest example: the conviction was his, and the work here named it, structured it, and published it in a form founders still cite.
              </p>
            </div>
            
            <div className="work-entry">
              <h3 className="type-card-heading-1 mb-3">First marketing hire through Series A, Series B, and two acquisitions.</h3>
              <p className="type-card-heading-3 mt-4"><a href="https://www.masaischool.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Masai School</a> &middot; First Marketing Hire &middot; India Quotient-backed edtech</p>
              <p className="work-body">
                Came in as the first marketing hire and defined the brand from zero: content guidelines, style guides, web layouts, social presence. Led PR across every significant company moment, working directly with the founders on each one. Series A landed in CNBC and Economic Times, Series B in MoneyControl, and the two acquisitions in Mint, VCCircle, and Business World, with a thought leadership piece for the CEO placed in the Indian Express. The kind of role where you own whatever the company needs said next.
              </p>
            </div>
            
            <div className="work-entry">
              <h3 className="type-card-heading-1 mb-3">Learned to find the real idea beneath a founder's first answer.</h3>
              <p className="type-card-heading-3 mt-4"><a href="https://yourstory.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">YourStory</a> &middot; Tech and Startup Journalist &middot; India's most-read startup media publication</p>
              <p className="work-body">
                Owned Techie Tuesdays, created The Turning Point, and built The Product Roadmap from scratch. Spent 4 years profiling the founders building India's internet economy, interviewing Dharmesh Shah, the Postman founders, and 350+ operators at inflection points in their companies. This is where I learned that the most important thing a founder says is rarely the first thing they say.
              </p>
            </div>
          </section>
        </div>
      </main>

      <section className="work-closing-cta glass-surface work-page-content">
        <h2 className="type-cta-heading mb-4 tracking-[-0.015em] text-center">The story is the strategy.</h2>
        <p className="type-cta-body mb-[29px] text-center">If your product is ahead of its language, that's where we start.</p>
        <div className="flex justify-center items-center">
          <a 
            href="https://cal.com/sampath-putrevu-z6jq0i"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto text-center inline-flex items-center justify-center px-5 md:px-[22px] py-[11px] bg-burgundy text-warm-white rounded-[4px] type-button hover:-translate-y-[1px] hover:bg-burgundy-dark transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent cursor-pointer"
          >
            Book a call
          </a>
        </div>
        
        <div className="flex justify-center items-center gap-8 mt-16">
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
      </section>
    </div>
  );
}
