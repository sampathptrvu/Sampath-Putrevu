const fs = require('fs');
let code = fs.readFileSync('src/Header.tsx', 'utf8');
code = code.replace(
  '                Past work\n              </Link>\n            </div>',
  `                Past work
              </Link>
              <Link 
                to="/essays" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className={cn(
                  "hover:text-warm-white transition-colors",
                  isEssaysPage ? "text-burgundy" : ""
                )}
              >
                Essays
              </Link>
            </div>`
);
fs.writeFileSync('src/Header.tsx', code);
