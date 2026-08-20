import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Mail, Menu } from 'lucide-react';
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
      const sections = ['expertise', 'fit'];
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
  }, [location.pathname]);

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
          scrolled ? "bg-[var(--color-page)] border-b border-[var(--color-rule)]" : "bg-transparent border-transparent",
          "sticky top-0 left-0"
        )}
      >
        <div className="site-header-inner relative flex items-center justify-between py-7 px-4 md:px-12 lg:px-24 mx-auto max-w-[1440px] box-border">
          
          {/* Left: Brand */}
          <Link 
            to="/" 
            className="type-wordmark font-['Cabin'] hover:text-[var(--color-accent)] transition-colors shrink-0 z-10"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sampath Putrevu
          </Link>

          {/* Center: Secondary Nav (Desktop & Tablet) */}
          <div className="flex items-center gap-8 z-10 shrink-0">
          <nav 
            className="hidden min-[1100px]:flex font-['Cabin'] text-[18px] items-center gap-8 transition-all duration-300 pointer-events-auto"
          >
            <Link to="/about" className={cn("type-nav-link whitespace-nowrap")}>About</Link>
            <Link to="/how-i-help" className={cn("type-nav-link whitespace-nowrap")}>How I help</Link>
            <Link to="/work" className={cn("type-nav-link whitespace-nowrap", isWorkPage ? "text-[var(--color-text)]" : "")}>Past work</Link>
            <Link to="/published" className={cn("type-nav-link whitespace-nowrap")}>Published</Link>
            <Link to="/contact" className={cn("type-nav-link whitespace-nowrap", location.pathname === "/contact" ? "text-[var(--color-text)]" : "")}>Work with me &rarr;</Link>
          </nav>

          {/* Right: Social & CTA */}
          <div className="flex items-center gap-3 sm:gap-6 ">
            {/* Social Icons (Desktop only) */}
            <div className="hidden min-[1100px]:flex items-center gap-4 mr-2">
              <a 
                href="https://www.linkedin.com/in/sampathputrevu/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors flex items-center p-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-text)] focus:ring-offset-2 focus:ring-offset-[var(--color-page)] rounded-sm"
                aria-label="LinkedIn"
              >
                <div 
                  className="w-[20px] h-[20px] bg-current" 
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
                className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors flex items-center p-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-text)] focus:ring-offset-2 focus:ring-offset-[var(--color-page)] rounded-sm"
                aria-label="Email"
              >
                <Mail className="w-[20px] h-[20px]" />
              </a>
            </div>

            {/* Permanent CTA (Desktop, Tablet, Mobile) */}
            <a 
              href="https://cal.com/sampath-putrevu-z6jq0i"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-[44px] px-5 rounded-none type-button font-['Cabin'] transition-all bg-[var(--color-text)] text-[var(--color-page)] hover:bg-[var(--color-accent)] hover:-translate-y-[1px] focus:outline-none focus:ring-2 focus:ring-[var(--color-text)] focus:ring-offset-2 focus:ring-offset-[var(--color-page)] cursor-pointer"
            >
              Book a call
            </a>

            <button 
              ref={hamburgerRef}
              onClick={() => setIsMobileMenuOpen(true)}
              className="min-[1100px]:hidden flex flex-col items-center justify-center gap-[6px] shrink-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--color-text)] focus:ring-offset-2 focus:ring-offset-[var(--color-page)] rounded-none bg-[var(--color-page)] border border-[var(--color-rule)]"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Open menu"
              style={{ width: '44px', height: '44px' }}
            >
              <span className="rounded-full h-[2px] w-[24px]" style={{ background: 'var(--color-text)' }}></span>
              <span className="rounded-full h-[2px] w-[24px]" style={{ background: 'var(--color-text)' }}></span>
              <span className="rounded-full h-[2px] w-[24px]" style={{ background: 'var(--color-text)' }}></span>
            </button>
          </div>
          </div>
        </div>
      </div>

      {/* Menu Overlay Scrim */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[60] bg-[var(--color-text)] opacity-20 transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-menu" 
          className="fixed inset-y-0 right-0 z-[70] flex flex-col bg-[var(--color-page)] border-l border-[var(--color-rule)] w-full sm:w-[min(460px,100vw)] shadow-2xl overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between px-4 md:px-12 py-[20px] md:py-[24px] shrink-0">
            <Link 
              to="/" 
              className="type-wordmark font-['Cabin'] text-[var(--color-text)] transition-colors shrink-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sampath Putrevu
            </Link>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center font-['Cabin'] justify-end shrink-0 transition-colors text-[var(--color-text)] hover:text-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-text)] focus:ring-offset-2 focus:ring-offset-[var(--color-page)] rounded-none"
              aria-label="Close menu"
              style={{ width: '44px', height: '44px' }}
            >
              <X className="w-8 h-8" strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex-1 px-4 md:px-12 py-8 flex flex-col">
            <div className="flex flex-col gap-6 sm:gap-8 type-wordmark font-['Cabin'] text-[var(--color-text)]">
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--color-accent)] transition-colors">About</Link>
              <Link to="/how-i-help" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--color-accent)] transition-colors">How I help</Link>
              <Link 
                to="/work" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "hover:text-[var(--color-accent)] transition-colors",
                  isWorkPage ? "text-[var(--color-accent)]" : ""
                )}
              >
                Past work
              </Link>
              <Link to="/published" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--color-accent)] transition-colors">Published</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--color-accent)] transition-colors">Work with me &rarr;</Link>
            </div>
            
            <div className="w-full h-px bg-[var(--color-rule)] my-8 sm:my-10"></div>
            
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="flex items-center gap-6">
                <a href="https://www.linkedin.com/in/sampathputrevu/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-text)] focus:ring-offset-2 focus:ring-offset-[var(--color-page)] p-3 -m-3" aria-label="LinkedIn">
                  <div className="w-[28px] h-[28px] bg-current shrink-0" style={{ maskImage: `url(${linkedinIcon})`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskImage: `url(${linkedinIcon})`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center' }} />
                </a>
                <a href="mailto:sampathptrvu@gmail.com" className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-text)] focus:ring-offset-2 focus:ring-offset-[var(--color-page)] p-3 -m-3" aria-label="Email">
                  <Mail className="w-[28px] h-[28px] shrink-0" />
                </a>
              </div>
              <a 
                href="https://cal.com/sampath-putrevu-z6jq0i"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-4 rounded-none type-button font-['Cabin'] transition-all bg-[var(--color-text)] text-[var(--color-page)] hover:bg-[var(--color-accent)] hover:-translate-y-[1px] focus:outline-none focus:ring-2 focus:ring-[var(--color-text)] focus:ring-offset-2 focus:ring-offset-[var(--color-page)] cursor-pointer mt-2 sm:mt-4 w-full"
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
