import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import linkedinIcon from './linkedin-icon.png';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const isWorkPage = location.pathname === '/work';

  // Handle scroll for smoked-glass background
  useEffect(() => {
    const handleScroll = () => {
      // Typically hero is 100vh, we can just trigger after say 100px or innerHeight - something. 
      // Actually "Once the user scrolls beyond the hero"
      // we'll trigger at window.innerHeight
      if (window.scrollY > window.innerHeight * 0.5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    // For work page, it's always blurred, so let's check if we want it always dark there
    // Actually the prompt says "Keep the desktop navigation transparent over the sharp hero. Once the user scrolls beyond the hero, give the fixed navigation its existing dark smoked-glass background..."
    
    // But it's simple enough to just use a fixed scroll threshold. 
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);
  
  const prevOpenRef = useRef(isMobileMenuOpen);
  useEffect(() => {
    if (prevOpenRef.current && !isMobileMenuOpen) {
      hamburgerRef.current?.focus();
    }
    prevOpenRef.current = isMobileMenuOpen;
  }, [isMobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    if (isMobileMenuOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Header */}
      <div className="absolute top-0 left-0 w-full z-20 pointer-events-auto site-header">
        <div className="site-header-inner">
          {/* Brand */}
          <Link 
            to="/" 
            className="header-name hover:text-warm-white transition-colors shrink-0"
            style={{ color: 'var(--warm-white)', textShadow: '0 2px 10px rgba(0, 0, 0, 0.65)' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sampath Putrevu
          </Link>
          
          {/* Hamburger Menu Toggle */}
          <button 
            ref={hamburgerRef}
            onClick={() => setIsMobileMenuOpen(true)}
            className="mobile-nav-toggle flex flex-col justify-center gap-[6px] shrink-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-transparent rounded-[4px]"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Open menu"
            style={{ width: '48px', height: '48px', alignItems: 'flex-end', justifyContent: 'center' }}
          >
            <span className="rounded-full h-[3px] w-[28px] sm:w-[32px]" style={{ background: 'var(--warm-white)', boxShadow: '0 1px 5px rgba(0, 0, 0, 0.55)' }}></span>
            <span className="rounded-full h-[3px] w-[28px] sm:w-[32px]" style={{ background: 'var(--warm-white)', boxShadow: '0 1px 5px rgba(0, 0, 0, 0.55)' }}></span>
            <span className="rounded-full h-[3px] w-[28px] sm:w-[32px]" style={{ background: 'var(--warm-white)', boxShadow: '0 1px 5px rgba(0, 0, 0, 0.55)' }}></span>
          </button>
        </div>
      </div>

      {/* Menu Overlay Scrim */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-menu" 
          className="fixed inset-y-0 right-0 z-[70] flex flex-col bg-ink border-l border-divider-dark w-full sm:w-[min(460px,100vw)] shadow-2xl overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between px-[var(--page-gutter)] py-[20px] md:py-[24px] shrink-0">
            <Link 
              to="/" 
              className="header-name text-warm-white transition-colors shrink-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sampath Putrevu
            </Link>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-end shrink-0 transition-colors text-warm-white hover:text-warm-white focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[4px]"
              aria-label="Close menu"
              style={{ width: '48px', height: '48px' }}
            >
              <X className="w-8 h-8" strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex-1 px-[var(--page-gutter)] py-8 flex flex-col">
            <div className="flex flex-col gap-6 sm:gap-8 text-[22px] sm:text-[26px] font-medium text-warm-white">
              <a href="/#expertise" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-warm-white transition-colors">How I Help</a>
              <a href="/#why-me" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-warm-white transition-colors">Why Me</a>
              <a href="/#fit" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-warm-white transition-colors">Best fit</a>
              <Link 
                to="/work" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className={cn(
                  "hover:text-warm-white transition-colors",
                  isWorkPage ? "text-burgundy" : ""
                )}
              >
                Past work
              </Link>
              <Link 
                to="/essays" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className={cn(
                  "hover:text-warm-white transition-colors",
                  location.pathname === '/essays' || location.pathname.startsWith('/essays/') ? "text-burgundy" : ""
                )}
              >
                Essays
              </Link>
            </div>
            
            <div className="w-full h-px bg-white/10 my-8 sm:my-10"></div>
            
            <div className="flex flex-col gap-6 sm:gap-8">
              <a href="https://www.linkedin.com/in/sampathputrevu/" target="_blank" rel="noopener noreferrer" className="text-warm-white hover:text-warm-white transition-colors flex items-center gap-4 text-[22px] sm:text-[26px] font-medium" aria-label="LinkedIn">
                <div className="w-[24px] h-[24px] bg-current shrink-0" style={{ maskImage: `url(${linkedinIcon})`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskImage: `url(${linkedinIcon})`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center' }} />
                LinkedIn
              </a>
              <a href="mailto:sampathptrvu@gmail.com" target="_blank" rel="noopener noreferrer" className="text-warm-white hover:text-warm-white transition-colors flex items-center gap-4 text-[22px] sm:text-[26px] font-medium" aria-label="Email">
                <Mail className="w-[24px] h-[24px] shrink-0" />
                Email
              </a>

              <a 
                href="https://cal.com/sampath-putrevu-z6jq0i"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-4 rounded-[4px] text-[16px] sm:text-[18px] font-bold transition-all shadow-sm bg-burgundy text-warm-white hover:bg-burgundy-dark hover:-translate-y-[1px] focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink cursor-pointer mt-2 sm:mt-4 w-full"
              >
                Book a call
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
