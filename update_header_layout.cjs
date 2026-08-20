const fs = require('fs');
let content = fs.readFileSync('src/Header.tsx', 'utf8');

// The current structure has <nav> and then <div flex> for CTA.
// We want to combine them into one right container.

const navSearch = `<nav 
            className="hidden min-[1100px]:flex font-['Cabin'] text-[18px] items-center gap-8 absolute left-1/2 -translate-x-1/2 transition-all duration-300 pointer-events-auto"
          >
            <Link to="/about" className={cn("type-nav-link whitespace-nowrap")}>About</Link>
            <Link to="/work" className={cn("type-nav-link whitespace-nowrap", isWorkPage ? "text-[var(--color-text)]" : "")}>Past work</Link>
            <Link to="/published" className={cn("type-nav-link whitespace-nowrap")}>Published</Link>
            <Link to="/how-i-help" className={cn("type-nav-link whitespace-nowrap")}>How I help</Link>
            <Link to="/contact" className={cn("type-nav-link whitespace-nowrap", location.pathname === "/contact" ? "text-[var(--color-text)]" : "")}>Work with me &rarr;</Link>
          </nav>
          {/* Right: Social & CTA */}
          <div className="flex items-center gap-3 sm:gap-6 z-10 shrink-0">`;

const navReplace = `          {/* Right Side Group */}
          <div className="flex items-center gap-8 z-10 shrink-0">
            <nav className="hidden min-[1100px]:flex font-['Cabin'] text-[18px] items-center gap-8 transition-all duration-300 pointer-events-auto">
              <Link to="/about" className={cn("type-nav-link whitespace-nowrap")}>About</Link>
              <Link to="/work" className={cn("type-nav-link whitespace-nowrap", isWorkPage ? "text-[var(--color-text)]" : "")}>Past work</Link>
              <Link to="/published" className={cn("type-nav-link whitespace-nowrap")}>Published</Link>
              <Link to="/how-i-help" className={cn("type-nav-link whitespace-nowrap")}>How I help</Link>
              <Link to="/contact" className={cn("type-nav-link whitespace-nowrap", location.pathname === "/contact" ? "text-[var(--color-text)]" : "")}>Work with me &rarr;</Link>
            </nav>
            {/* Social & CTA */}
            <div className="flex items-center gap-3 sm:gap-6">`;

if (content.includes(navSearch)) {
    content = content.replace(navSearch, navReplace);
    // Add one closing </div> right after the hamburger button closing tag
    // to close the new Right Side Group
    content = content.replace(/(<\/button>\s*)(<\/div>\s*<\/div>)/, '$1</div>\n$2');
    fs.writeFileSync('src/Header.tsx', content);
    console.log("Header layout updated to match Right side.");
} else {
    console.log("Nav search pattern not found!");
}
