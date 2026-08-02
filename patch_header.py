import re

with open('src/Header.tsx', 'r') as f:
    content = f.read()

content = content.replace("  const isThesesPage = location.pathname === '/theses';\n", "")

content = content.replace('            <Link to="/theses" className={cn("type-nav transition-colors", isThesesPage ? "text-burgundy" : "text-warm-white/80 hover:text-warm-white")}>Theses</Link>\n', "")
content = content.replace('              <Link to="/theses" className={cn("text-[14px] lg:type-nav transition-colors whitespace-nowrap", isThesesPage ? "text-burgundy" : "text-warm-white/80 hover:text-warm-white")}>Theses</Link>\n', "")

mobile_link = """              <Link 
                to="/theses" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className={cn(
                  "hover:text-warm-white transition-colors",
                  isThesesPage ? "text-burgundy" : ""
                )}
              >
                Theses
              </Link>\n"""

content = content.replace(mobile_link, "")

with open('src/Header.tsx', 'w') as f:
    f.write(content)
print("Patched Header.tsx")
