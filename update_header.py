import re

with open('src/Header.tsx', 'r') as f:
    content = f.read()

# 1. Nav items (Desktop)
# old: <a href="/#expertise"...>How I help</a> ... Why me ... Best fit ... Past work
new_desktop_nav = """<a href="/#expertise" className={cn("text-[14px] lg:type-nav transition-colors whitespace-nowrap", activeSection === "expertise" ? "text-burgundy" : "text-warm-white/80 hover:text-warm-white")}>How I help</a>
              <a href="/#fit" className={cn("text-[14px] lg:type-nav transition-colors whitespace-nowrap", activeSection === "fit" ? "text-burgundy" : "text-warm-white/80 hover:text-warm-white")}>Best fit</a>
              <Link to="/work" className={cn("text-[14px] lg:type-nav transition-colors whitespace-nowrap", isWorkPage ? "text-burgundy" : "text-warm-white/80 hover:text-warm-white")}>Work</Link>
              <Link to="/about" className={cn("text-[14px] lg:type-nav transition-colors whitespace-nowrap", "text-warm-white/80 hover:text-warm-white")}>About</Link>
              <Link to="/published" className={cn("text-[14px] lg:type-nav transition-colors whitespace-nowrap", "text-warm-white/80 hover:text-warm-white")}>Published</Link>"""

# Find desktop nav
content = re.sub(r'<a href="/#expertise".*?Past work</Link>', new_desktop_nav, content, flags=re.DOTALL)

# Find tablet nav
content = re.sub(r'<a href="/#expertise".*?Past work</Link>', new_desktop_nav, content, flags=re.DOTALL)

# 2. Header Icons (remove email and whatsapp)
# we need to remove the email and whatsapp links in header cluster
# but keep them in mobile menu? "Header icon cluster: remove the email icon and the WhatsApp icon. Keep only the LinkedIn icon and the "Book a call" button... But prompt says: "Keep LinkedIn, Email, and all five navigation links inside the hamburger menu" on mobile." Wait, the prompt says "Keep only the LinkedIn icon and the 'Book a call' button. Do not change the styling of the LinkedIn icon or the Book a call button." Let me just remove it from both places to be safe or just in the header? "Header icon cluster: remove the email icon and the WhatsApp icon." 
# Wait! "Keep LinkedIn, Email, and all five navigation links inside the hamburger menu" is from a previous prompt maybe? Oh, it says "But prompt says: "Keep LinkedIn, Email... " in a comment in Header.tsx! That comment was in the code! Let's ignore the code comment and follow the new instruction: "Header icon cluster: remove the email icon and the WhatsApp icon. Keep only the LinkedIn icon and the Book a call button."

email_whatsapp_regex = r'<a\s+href="mailto:sampathptrvu@gmail\.com".*?</a>\s*<a\s+href="https://wa\.me/919989546250".*?</a>'
content = re.sub(email_whatsapp_regex, '', content, flags=re.DOTALL)

# 3. Mobile Menu Nav
new_mobile_nav = """<a href="/#expertise" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-warm-white transition-colors">How I help</a>
              <a href="/#fit" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-warm-white transition-colors">Best fit</a>
              <Link to="/work" onClick={() => setIsMobileMenuOpen(false)} className={cn("hover:text-warm-white transition-colors", isWorkPage ? "text-burgundy" : "")}>Work</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-warm-white transition-colors">About</Link>
              <Link to="/published" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-warm-white transition-colors">Published</Link>"""

content = re.sub(r'<a href="/#expertise".*?Past work\s*</Link>', new_mobile_nav, content, flags=re.DOTALL)

# update import to remove mail icon if not used
content = content.replace("import { Menu, X, Mail } from 'lucide-react';", "import { Menu, X } from 'lucide-react';")

with open('src/Header.tsx', 'w') as f:
    f.write(content)
