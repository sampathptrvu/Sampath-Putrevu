import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { motion, useScroll, useTransform } from 'motion/react';
import { publishedEssays } from './content/registry';

function FadePanel({ children, className, variants, initial, whileInView, animate, transition, viewport, ...props }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const bgOpacity = useTransform(scrollYProgress, [0, 0.4, 0.5, 0.6, 1], [0.95, 0.95, 0.5, 0.95, 0.95]);
  const backgroundColor = useTransform(bgOpacity, (alpha) => `rgba(252, 249, 242, ${alpha})`);
  
  const finalClassName = className?.replace('panel-standard', '') || '';

  return (
    <motion.div 
      ref={ref} 
      className={finalClassName}
      style={className?.includes('panel-standard') ? { backgroundColor } : undefined}
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

export default function EssaysPage() {
  useEffect(() => {
    document.title = "Essays | Sampath Putrevu";
  }, []);

  return (
    <div className="min-h-screen selection:bg-deep-forest selection:text-warm-white font-sans text-warm-white">
      <Header />
      
      <main className="pb-12 pt-[18vh] md:pt-0">
        {/* Fixed Background Image Layer */}
        <div className="fixed inset-0 w-full h-[100dvh] overflow-hidden pointer-events-none z-[-2]">
          <img style={{ filter: "brightness(1.12) contrast(1.03) saturate(0.96) hue-rotate(3deg)" }} src="https://res.cloudinary.com/wljosnwf/image/upload/v1784421613/sampathputrevu_replace_the_removed_areas_with_marina_bay_sands__165ca779-2407-4a89-9c82-1934d0a14161_mr5tej.png" alt="" fetchPriority="high" className="w-full h-[100dvh] object-cover object-center " />
        </div>
        
        {/* Fixed Readability Overlay */}
        

        <section className="relative w-full flex flex-col justify-start items-center pt-[18vh] md:pt-[24vh]">
          <div className="w-full min-[1200px]:w-[calc(100vw-120px)] min-[1200px]:max-w-none relative z-10 text-left flex flex-col items-start px-5 sm:px-6 md:pr-8 md:pl-[clamp(48px,8vw,80px)] lg:pl-[clamp(80px,10vw,155px)] lg:pr-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start justify-center w-full max-w-4xl pb-12"
            >
              <span className="text-[20px] md:text-[22px] lg:text-[24px] font-bold tracking-wide text-text-on-dark mb-[24px] block text-left">
                Narratives for technical founders
              </span>
              <h1 className="font-display font-normal text-[38px] not-italic leading-[1.05] tracking-[-0.015em] mb-[28px] text-warm-white text-left">
                Essays
              </h1>
              <p className="text-[18px] md:text-[22px] text-text-on-dark leading-[1.5] font-normal italic text-left">
                Ideas on narrative, category creation, founder voice, and how technical companies become understood.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-8 md:py-12 w-full">
          <motion.div 
            className="space-y-8 md:space-y-12"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            {publishedEssays.length === 0 ? (
              <FadePanel
                className="w-full p-8 md:p-12 panel-standard bg-parchment text-panel-heading border border-divider-light shadow-[0_12px_36px_rgba(0,0,0,0.12)] rounded-xl"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                }}
              >
                <p className="text-[18px] md:text-[20px] font-medium text-center">Essays are being written. The first one will be published here soon.</p>
              </FadePanel>
            ) : (
              publishedEssays.map((essay, idx) => (
                <FadePanel 
                  key={essay.slug}
                  className="w-full p-8 md:p-12 panel-standard bg-parchment text-panel-heading border border-divider-light shadow-[0_12px_36px_rgba(0,0,0,0.12)] rounded-xl"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                  }}
                >
                  {essay.topic && (
                    <div className="text-[12px] md:text-[14px] font-sans font-bold uppercase tracking-[0.08em] mb-4 text-panel-muted">
                      {essay.topic}
                    </div>
                  )}
                  <Link to={`/essays/${essay.slug}`} className="block group">
                    <h2 className="font-display font-normal text-[28px] md:text-[36px] text-panel-heading mb-4 leading-[1.1] tracking-[-0.015em] group-hover:text-burgundy transition-colors">
                      {essay.title}
                    </h2>
                  </Link>
                  <p className="text-panel-body text-[17px] md:text-[19px] font-medium mb-6 md:mb-8 leading-relaxed max-w-3xl">
                    {essay.summary}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-divider-light pt-6 gap-4">
                    <div className="flex items-center gap-2 sm:gap-3 text-[14px] md:text-[15px] font-medium text-panel-muted">
                      <span>{new Date(essay.publishedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      <span className="hidden sm:inline text-panel-muted opacity-50">•</span>
                      <span>{essay.readingTime}</span>
                    </div>
                    <Link 
                      to={`/essays/${essay.slug}`}
                      className="inline-flex items-center text-burgundy font-bold text-[15px] md:text-[16px] hover:text-panel-heading transition-colors group"
                    >
                      Read essay
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 group-hover:translate-x-1 transition-transform">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </FadePanel>
              ))
            )}
          </motion.div>
        </section>
      </main>
    </div>
  );
}
