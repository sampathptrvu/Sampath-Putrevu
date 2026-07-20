const fs = require('fs');

let content = fs.readFileSync('src/HomePage.tsx', 'utf8');

// Replace all occurrences of:
// <div className="section-label-container">
//   <h2 className="section-label ...">...</h2>
//   <div className="w-12 h-px bg-burgundy mt-4 md:mt-5"></div>
// </div>

content = content.replace(/<div className="section-label-container">\s*<h2 className="([^"]+)">([^<]+)<\/h2>\s*<div className="w-12 h-px bg-burgundy mt-4 md:mt-5"><\/div>\s*<\/div>/g, 
  `<div className="section-label-container">
            <div className="section-label-glass glass-surface">
              <h2 className="$1">$2</h2>
              <div className="w-12 h-px bg-burgundy mt-4 md:mt-5"></div>
            </div>
          </div>`);

fs.writeFileSync('src/HomePage.tsx', content);
