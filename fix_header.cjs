const fs = require('fs');

let content = fs.readFileSync('src/Header.tsx', 'utf8');

// Replace Desktop Nav
const desktopNavRegex = /<nav[^>]*>[\s\S]*?<\/nav>/;
const newDesktopNav = `<nav 
            className="hidden min-[1100px]:flex font-['Cabin'] text-[18px] items-center gap-8 absolute left-1/2 -translate-x-1/2 transition-all duration-300 pointer-events-auto"
          >
            <Link to="/about" className={cn("type-nav-link whitespace-nowrap")}>About</Link>
            <Link to="/work" className={cn("type-nav-link whitespace-nowrap", isWorkPage ? "text-[var(--color-text)]" : "")}>Past work</Link>
            <Link to="/published" className={cn("type-nav-link whitespace-nowrap")}>Published</Link>
            <Link to="/how-i-help" className={cn("type-nav-link whitespace-nowrap")}>How I help</Link>
            <Link to="/contact" className={cn("type-nav-link whitespace-nowrap", location.pathname === "/contact" ? "text-[var(--color-text)]" : "")}>Work with me &rarr;</Link>
          </nav>`;
content = content.replace(desktopNavRegex, newDesktopNav);

// Replace Mobile Nav
const mobileNavRegex = /<div className="flex flex-col gap-6 sm:gap-8 type-wordmark font-\['Cabin'\] text-\[var\(--color-text\)\]">[\s\S]*?<\/div>/;
const newMobileNav = `<div className="flex flex-col gap-6 sm:gap-8 type-wordmark font-['Cabin'] text-[var(--color-text)]">
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--color-accent)] transition-colors">About</Link>
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
              <Link to="/how-i-help" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--color-accent)] transition-colors">How I help</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--color-accent)] transition-colors">Work with me &rarr;</Link>
            </div>`;
content = content.replace(mobileNavRegex, newMobileNav);

fs.writeFileSync('src/Header.tsx', content);
console.log("Updated Header.tsx");
