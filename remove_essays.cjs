const fs = require('fs');
let code = fs.readFileSync('src/Header.tsx', 'utf8');

// Remove isEssaysPage
code = code.replace(/  const isEssaysPage = location\.pathname === '\/essays';\n/g, '');

// Remove desktop link
code = code.replace(/            <Link to="\/essays" className=\{cn\("text-\[15px\] font-bold transition-colors", isEssaysPage \? "text-burgundy" : "text-warm-white\/80 hover:text-warm-white"\)\}>Essays<\/Link>\n/g, '');

// Remove mobile link
const mobileLinkPattern = `              <Link 
                to="/essays" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className={cn(
                  "hover:text-warm-white transition-colors",
                  isEssaysPage ? "text-burgundy" : ""
                )}
              >
                Essays
              </Link>\n`;

code = code.replace(mobileLinkPattern, '');

fs.writeFileSync('src/Header.tsx', code);
