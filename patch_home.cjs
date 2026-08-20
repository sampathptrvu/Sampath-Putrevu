const fs = require('fs');
let c = fs.readFileSync('src/HomePage.tsx', 'utf8');
c = c.replace('              setIsMobileMenuOpen(false)} className="hover:opacity-70 transition-opacity">Work with me &rarr;', '              <a href="/how-i-help#fit" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-70 transition-opacity">Work with me &rarr;</a>');
fs.writeFileSync('src/HomePage.tsx', c);
