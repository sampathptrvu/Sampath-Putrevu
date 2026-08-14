with open('src/Header.tsx', 'r') as f:
    lines = f.readlines()

tablet_nav_row = """          {/* Tablet Second Row (scrolled only) */}
          <div 
            className={cn(
              "hidden md:flex min-[1100px]:hidden justify-center items-center overflow-hidden transition-all duration-300",
              scrolled ? "max-h-[50px] pt-3 opacity-100" : "max-h-0 pt-0 opacity-0"
            )}
          >
            <nav className="flex items-center gap-5 lg:gap-8">
              <a href="/#expertise" className={cn("text-[14px] lg:text-[15px] font-bold transition-colors whitespace-nowrap", activeSection === "expertise" ? "text-burgundy" : "text-warm-white/80 hover:text-warm-white")}>How I Help</a>
              <a href="/#why-me" className={cn("text-[14px] lg:text-[15px] font-bold transition-colors whitespace-nowrap", activeSection === "why-me" ? "text-burgundy" : "text-warm-white/80 hover:text-warm-white")}>Why Me</a>
              <a href="/#fit" className={cn("text-[14px] lg:text-[15px] font-bold transition-colors whitespace-nowrap", activeSection === "fit" ? "text-burgundy" : "text-warm-white/80 hover:text-warm-white")}>Best fit</a>
              <Link to="/work" className={cn("text-[14px] lg:text-[15px] font-bold transition-colors whitespace-nowrap", isWorkPage ? "text-burgundy" : "text-warm-white/80 hover:text-warm-white")}>Past work</Link>
              <Link to="/theses" className={cn("text-[14px] lg:text-[15px] font-bold transition-colors whitespace-nowrap", isThesesPage ? "text-burgundy" : "text-warm-white/80 hover:text-warm-white")}>Theses</Link>
            </nav>
          </div>
"""

new_lines = lines[:187] + [tablet_nav_row] + lines[187:]

with open('src/Header.tsx', 'w') as f:
    f.writelines(new_lines)
