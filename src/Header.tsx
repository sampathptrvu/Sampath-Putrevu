import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Mail } from 'lucide-react';
import { cn } from './lib/utils';
import linkedinIcon from './linkedin-icon.png';
import whatsappIcon from './whatsapp-icon.png';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const isWorkPage = location.pathname === '/work';
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScrollSpy = () => {
      if (location.pathname !== '/') {
        setActiveSection('');
        return;
      }
      const sections = ['expertise', 'why-me', 'fit'];
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.5) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [location.pathname]);

  // Handle scroll for smoked-glass background
  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== '/') {
        setScrolled(true);
        return;
      }
      if (window.scrollY > window.innerHeight * 0.5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
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
    } else if (!prevOpenRef.current && isMobileMenuOpen) {
      // Move focus into the menu when opened
      const focusTimer = setTimeout(() => {
        const menu = document.getElementById('mobile-menu');
        if (menu) {
          const firstElement = menu.querySelector('a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])') as HTMLElement;
          if (firstElement) firstElement.focus();
        }
      }, 50);
      return () => clearTimeout(focusTimer);
    }
    prevOpenRef.current = isMobileMenuOpen;
  }, [isMobileMenuOpen]);

  // Handle escape key and focus trap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        return;
      }
      if (e.key === 'Tab') {
        const menu = document.getElementById('mobile-menu');
        if (!menu) return;
        const focusableElements = menu.querySelectorAll('a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])');
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };
    if (isMobileMenuOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Header */}
      <div 
        className={cn(
          "w-full z-50 pointer-events-auto transition-colors duration-200",
          scrolled ? "bg-ink/90 backdrop-blur-md shadow-sm border-b border-divider-dark" : "bg-transparent",
          // Use !fixed to override .site-header's absolute positioning
          "!fixed top-0 left-0"
        )}
      >
        <div className="site-header-inner relative flex items-center justify-between">
          
          {/* Left: Brand */}
          <Link 
            to="/" 
            className="header-name hover:text-warm-white transition-colors shrink-0 z-10"
            style={{ color: 'var(--warm-white)', textShadow: '0 2px 10px rgba(0, 0, 0, 0.65)' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sampath Putrevu
          </Link>

          {/* Center: Secondary Nav (Desktop & Tablet) */}
          <nav 
            className={cn(
              "desktop-nav items-center gap-6 absolute left-1/2 -translate-x-1/2 transition-all duration-300",
              scrolled ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
            )}
          >
            <a href="/#expertise" className={cn("type-nav transition-colors text-[18px]", activeSection === "expertise" ? "text-burgundy" : "text-warm-white/80 hover:text-warm-white")} style={{ fontSize: '18px' }}>How I help</a>
            <a href="/#why-me" className={cn("type-nav transition-colors text-[18px]", activeSection === "why-me" ? "text-burgundy" : "text-warm-white/80 hover:text-warm-white")} style={{ fontSize: '18px' }}>Why me</a>
            <a href="/#fit" className={cn("type-nav transition-colors text-[18px]", activeSection === "fit" ? "text-burgundy" : "text-warm-white/80 hover:text-warm-white")} style={{ fontSize: '18px' }}>Best fit</a>
            <Link to="/work" className={cn("type-nav transition-colors text-[18px]", isWorkPage ? "text-burgundy" : "text-warm-white/80 hover:text-warm-white")} style={{ fontSize: '18px' }}>Past work</Link>
          </nav>

          {/* Right: Social, Email, CTA & Hamburger */}
          <div className="flex items-center gap-2 sm:gap-4 md:gap-[16px] min-[1100px]:gap-6 z-10 shrink-0">
            {/* Desktop / Tablet Links */}
            <div className="hidden md:flex items-center gap-[12px] min-[1100px]:gap-3">
              <a href="https://www.linkedin.com/in/sampathputrevu/" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ink p-2 -m-2" aria-label="LinkedIn">
                <div className="w-[23.24px] h-[23.24px] bg-current shrink-0" style={{ maskImage: `url(${linkedinIcon})`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskImage: `url(${linkedinIcon})`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center' }} />
              </a>
              <a href="mailto:sampathptrvu@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ink p-2 -m-2" aria-label="Email">
                <Mail className="w-[23.24px] h-[23.24px] shrink-0" />
              </a>
              <a href="https://wa.me/919989546250" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ink p-2 -m-2" aria-label="WhatsApp">
                <div className="w-[23.24px] h-[23.24px] bg-current shrink-0" style={{ maskImage: `url(${whatsappIcon})`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskImage: `url(${whatsappIcon})`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center' }} />
              </a>
            </div>

            {/* Permanent CTA (Desktop, Tablet, Mobile) */}
            <a 
              href="https://cal.com/sampath-putrevu-z6jq0i"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-[36px] px-3 sm:h-[40px] sm:px-5 rounded-[4px] type-button transition-all shadow-sm bg-burgundy text-warm-white hover:bg-burgundy-dark hover:-translate-y-[1px] focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink cursor-pointer"
            >
              Book a call
            </a>

            {/* Hamburger Menu Toggle (Mobile only, or Tablet if needed) */}
            {/* But prompt says: "Keep LinkedIn, Email, and all five navigation links inside the hamburger menu" on mobile. */}
            <button 
              ref={hamburgerRef}
              onClick={() => setIsMobileMenuOpen(true)}
              className="min-[1100px]:hidden menu-toggle flex flex-col justify-center gap-[6px] shrink-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-transparent rounded-[4px]"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Open menu"
              style={{ width: '40px', height: '40px', alignItems: 'flex-end', justifyContent: 'center' }}
            >
              <span className="rounded-full h-[2px] w-[24px]" style={{ background: 'var(--warm-white)', boxShadow: '0 1px 5px rgba(0, 0, 0, 0.55)' }}></span>
              <span className="rounded-full h-[2px] w-[24px]" style={{ background: 'var(--warm-white)', boxShadow: '0 1px 5px rgba(0, 0, 0, 0.55)' }}></span>
              <span className="rounded-full h-[2px] w-[24px]" style={{ background: 'var(--warm-white)', boxShadow: '0 1px 5px rgba(0, 0, 0, 0.55)' }}></span>
            </button>
          </div>
        </div>
          {/* Tablet Second Row (scrolled only) */}
          <div 
            className={cn(
              "tablet-nav justify-center items-center pt-3 pb-1",
              scrolled ? "scrolled" : ""
            )}
          >
            <nav className="flex items-center gap-5 lg:gap-8">
              <a href="/#expertise" className={cn("text-[14px] lg:type-nav transition-colors whitespace-nowrap", activeSection === "expertise" ? "text-burgundy" : "text-warm-white/80 hover:text-warm-white")}>How I help</a>
              <a href="/#why-me" className={cn("text-[14px] lg:type-nav transition-colors whitespace-nowrap", activeSection === "why-me" ? "text-burgundy" : "text-warm-white/80 hover:text-warm-white")}>Why me</a>
              <a href="/#fit" className={cn("text-[14px] lg:type-nav transition-colors whitespace-nowrap", activeSection === "fit" ? "text-burgundy" : "text-warm-white/80 hover:text-warm-white")}>Best fit</a>
              <Link to="/work" className={cn("text-[14px] lg:type-nav transition-colors whitespace-nowrap", isWorkPage ? "text-burgundy" : "text-warm-white/80 hover:text-warm-white")}>Past work</Link>
            </nav>
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
            <div className="flex flex-col gap-6 sm:gap-8 type-section-heading-burgundy text-warm-white text-warm-white">
              <a href="/#expertise" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-warm-white transition-colors">How I help</a>
              <a href="/#why-me" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-warm-white transition-colors">Why me</a>
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
            </div>
            
            <div className="w-full h-px bg-white/10 my-8 sm:my-10"></div>
            
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/in/sampathputrevu/" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ink p-3 -m-3" aria-label="LinkedIn">
                  <div className="w-[28px] h-[28px] bg-current shrink-0" style={{ maskImage: `url(${linkedinIcon})`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskImage: `url(${linkedinIcon})`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center' }} />
                </a>
                <a href="mailto:sampathptrvu@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ink p-3 -m-3" aria-label="Email">
                  <Mail className="w-[28px] h-[28px] shrink-0" />
                </a>
                <a href="https://wa.me/919989546250" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ink p-3 -m-3" aria-label="WhatsApp">
                  <div className="w-[28px] h-[28px] bg-current shrink-0" style={{ maskImage: `url(${whatsappIcon})`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskImage: `url(${whatsappIcon})`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center' }} />
                </a>
              </div>
              <a 
                href="https://cal.com/sampath-putrevu-z6jq0i"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-4 rounded-[4px] type-button transition-all shadow-sm bg-burgundy text-warm-white hover:bg-burgundy-dark hover:-translate-y-[1px] focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink cursor-pointer mt-2 sm:mt-4 w-full"
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
