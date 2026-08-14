import re

with open('src/Header.tsx', 'r') as f:
    content = f.read()

old_nav = """          <nav 
            className={cn(
              "desktop-nav items-center gap-6 absolute left-1/2 -translate-x-1/2 transition-all duration-300",
              scrolled ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
            )}
          >
            <a href="/#expertise" className={cn("type-nav transition-colors", activeSection === "expertise" ? "text-burgundy" : "text-warm-white/80 hover:text-warm-white")}>How I help</a>
            <a href="/#why-me" className={cn("type-nav transition-colors", activeSection === "why-me" ? "text-burgundy" : "text-warm-white/80 hover:text-warm-white")}>Why me</a>
            <a href="/#fit" className={cn("type-nav transition-colors", activeSection === "fit" ? "text-burgundy" : "text-warm-white/80 hover:text-warm-white")}>Best fit</a>
            <Link to="/work" className={cn("type-nav transition-colors", isWorkPage ? "text-burgundy" : "text-warm-white/80 hover:text-warm-white")}>Past work</Link>
          </nav>"""

new_nav = """          <nav 
            className={cn(
              "desktop-nav items-center gap-6 absolute left-1/2 -translate-x-1/2 transition-all duration-300",
              scrolled ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
            )}
          >
            <a href="/#expertise" className={cn("type-nav transition-colors text-[18px]", activeSection === "expertise" ? "text-burgundy" : "text-warm-white/80 hover:text-warm-white")} style={{ fontSize: '18px' }}>How I help</a>
            <a href="/#why-me" className={cn("type-nav transition-colors text-[18px]", activeSection === "why-me" ? "text-burgundy" : "text-warm-white/80 hover:text-warm-white")} style={{ fontSize: '18px' }}>Why me</a>
            <a href="/#fit" className={cn("type-nav transition-colors text-[18px]", activeSection === "fit" ? "text-burgundy" : "text-warm-white/80 hover:text-warm-white")} style={{ fontSize: '18px' }}>Best fit</a>
            <Link to="/work" className={cn("type-nav transition-colors text-[18px]", isWorkPage ? "text-burgundy" : "text-warm-white/80 hover:text-warm-white")} style={{ fontSize: '18px' }}>Past work</Link>
          </nav>"""

if old_nav in content:
    content = content.replace(old_nav, new_nav)
    with open('src/Header.tsx', 'w') as f:
        f.write(content)
    print("Patched nav successfully.")
else:
    print("Not found.")

