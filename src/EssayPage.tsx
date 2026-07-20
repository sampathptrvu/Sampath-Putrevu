import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './Header';
import { motion, useScroll, useTransform } from 'motion/react';
import { getEssayBySlug } from './content/registry';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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

export default function EssayPage() {
  const { slug } = useParams();
  const essay = getEssayBySlug(slug || '');

  useEffect(() => {
    // Preserve old meta elements
    const oldTitle = document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    const oldDesc = metaDesc ? metaDesc.getAttribute('content') : null;
    
    // Og tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const oldOgTitle = ogTitle ? ogTitle.getAttribute('content') : null;
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const oldOgDesc = ogDesc ? ogDesc.getAttribute('content') : null;
    
    const ogType = document.querySelector('meta[property="og:type"]');
    const oldOgType = ogType ? ogType.getAttribute('content') : null;

    if (essay) {
      document.title = `${essay.title} | Sampath Putrevu`;
      if (metaDesc) metaDesc.setAttribute('content', essay.summary);
      if (ogTitle) ogTitle.setAttribute('content', `${essay.title} | Sampath Putrevu`);
      if (ogDesc) ogDesc.setAttribute('content', essay.summary);
      if (ogType) ogType.setAttribute('content', 'article');
      
      // Update canonical URL if exists
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', window.location.href);
      }
    } else {
      document.title = "Essay Not Found | Sampath Putrevu";
    }

    return () => {
      document.title = oldTitle;
      if (metaDesc && oldDesc) metaDesc.setAttribute('content', oldDesc);
      if (ogTitle && oldOgTitle) ogTitle.setAttribute('content', oldOgTitle);
      if (ogDesc && oldOgDesc) ogDesc.setAttribute('content', oldOgDesc);
      if (ogType && oldOgType) ogType.setAttribute('content', oldOgType);
    };
  }, [essay]);

  if (!essay) {
    return (
      <div className="min-h-screen selection:bg-deep-forest selection:text-warm-white font-sans text-warm-white">
        <Header />
        
        <main className="pb-12 pt-[18vh] md:pt-0">
          <div className="fixed inset-0 w-full h-[100dvh] overflow-hidden pointer-events-none z-[-2]">
             {/* Simple background for 404 */}
          </div>
          

          <section className="max-w-4xl mx-auto px-6 py-24 md:py-32 w-full text-center">
            <h1 className="font-display text-[40px] text-warm-white mb-6">Essay not found</h1>
            <Link to="/essays" className="text-warm-white hover:text-text-on-dark underline underline-offset-4">Back to Essays</Link>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen selection:bg-deep-forest selection:text-warm-white font-sans text-warm-white">
      <Header />
      
      <main className="pb-12 pt-[18vh] md:pt-0">
        {/* Fixed Background Image Layer */}
        <div className="fixed inset-0 w-full h-[100dvh] overflow-hidden pointer-events-none z-[-2]">
          <img style={{ filter: "brightness(1.12) contrast(1.03) saturate(0.96) hue-rotate(3deg)" }} src="https://res.cloudinary.com/wljosnwf/image/upload/v1784421613/sampathputrevu_replace_the_removed_areas_with_marina_bay_sands__165ca779-2407-4a89-9c82-1934d0a14161_mr5tej.png" alt="" fetchPriority="high" className="w-full h-[100dvh] object-cover object-center " />
        </div>
        
        {/* Fixed Readability Overlay */}
        

        <section className="relative w-full flex flex-col justify-start items-center pt-[10vh] md:pt-[15vh]">
          <div className="w-full max-w-[760px] mx-auto px-5 sm:px-6 relative z-10 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full pb-8 md:pb-12"
            >
              <div className="flex items-center gap-2 text-text-on-dark font-sans text-[14px] md:text-[15px] font-bold uppercase tracking-[0.08em] mb-8">
                <Link to="/essays" className="hover:text-warm-white transition-colors">Essays</Link>
                {essay.topic && (
                  <>
                    <span className="text-muted-on-dark">/</span>
                    <span>{essay.topic}</span>
                  </>
                )}
              </div>
              
              <h1 className="font-display font-normal text-[36px] md:text-[48px] lg:text-[56px] not-italic leading-[1.05] tracking-[-0.015em] mb-6 text-warm-white text-left">
                {essay.title}
              </h1>
              
              <p className="text-[18px] md:text-[22px] text-text-on-dark leading-[1.5] font-medium text-left mb-8 max-w-[90%]">
                {essay.summary}
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-[15px] md:text-[16px] text-muted-on-dark font-sans border-t border-divider-dark pt-6">
                <time dateTime={essay.publishedDate}>
                  {new Date(essay.publishedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </time>
                <span className="hidden sm:inline text-muted-on-dark">•</span>
                <span>{essay.readingTime}</span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="w-full px-4 sm:px-6 md:px-8 pb-16">
          <motion.div 
            className="max-w-[760px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-full p-6 sm:p-8 md:p-12 panel-standard bg-parchment text-panel-heading border border-divider-light shadow-[0_12px_36px_rgba(0,0,0,0.12)] rounded-xl">
              <div className="prose prose-lg md:prose-xl max-w-none 
                prose-headings:font-display prose-headings:font-normal prose-headings:text-panel-heading 
                prose-p:font-sans prose-p:text-panel-body prose-p:leading-[1.7] prose-p:text-[16px] md:prose-p:text-[18px] 
                prose-a:text-burgundy prose-a:font-semibold prose-a:underline-offset-4 hover:prose-a:text-panel-heading 
                prose-strong:text-panel-heading prose-strong:font-bold
                prose-blockquote:font-display prose-blockquote:text-[22px] md:prose-blockquote:text-[26px] prose-blockquote:text-burgundy prose-blockquote:border-l-4 prose-blockquote:border-burgundy/30 prose-blockquote:pl-6 prose-blockquote:italic
                prose-ul:text-[16px] md:prose-ul:text-[18px] prose-ul:text-panel-body
                prose-ol:text-[16px] md:prose-ol:text-[18px] prose-ol:text-panel-body
                prose-li:my-2
              ">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {essay.body}
                </ReactMarkdown>
              </div>
            </div>
            
            <div className="mt-16 sm:mt-24 text-center">
              <p className="text-[20px] md:text-[24px] text-warm-white font-medium mb-8">
                If your product is ahead of its language, that's where we start.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <a 
                  href="https://cal.com/sampath-putrevu-z6jq0i"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-burgundy text-warm-white rounded-[4px] text-[16px] font-bold hover:bg-burgundy-dark transition-colors shadow-sm w-full sm:w-auto"
                >
                  Book a call
                </a>
                <Link 
                  to="/essays" 
                  className="text-text-on-dark hover:text-warm-white font-medium text-[16px] underline underline-offset-4"
                >
                  Back to Essays
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
