const fs = require('fs');
let content = fs.readFileSync('src/Header.tsx', 'utf8');

// We want to replace absolute left-1/2 -translate-x-1/2
content = content.replace('absolute left-1/2 -translate-x-1/2 ', '');

// Now we need to wrap the <nav> and the social/CTA div in a flex container
// Actually, if we just remove absolute positioning from nav, and change the parent to a simple flex container?
// Wait, the parent is already `<div className="site-header-inner relative flex items-center justify-between ...">`
// So we just need to wrap the <nav> and the Social/CTA <div className="flex items-center gap-3 sm:gap-6 z-10 shrink-0"> in one div.

// Let's just find the <nav> element start
const navStartIdx = content.indexOf('<nav ');
const socialDivStr = '{/* Right: Social & CTA */}\n          <div className="flex items-center gap-3 sm:gap-6 z-10 shrink-0">';
const socialDivIdx = content.indexOf(socialDivStr);

if (navStartIdx !== -1 && socialDivIdx !== -1) {
    const navPart = content.substring(navStartIdx, socialDivIdx);
    
    // Replace the part
    let newContent = content.substring(0, navStartIdx) + 
      '<div className="flex items-center gap-8 z-10 shrink-0">\n          ' + 
      navPart + 
      socialDivStr.replace('z-10 shrink-0', '') + 
      content.substring(socialDivIdx + socialDivStr.length);
      
    // And add a closing </div> after the hamburger button closing tag
    // <button ... </button>
    // </div>
    // </div>
    // {/* Menu Overlay Scrim */}
    const hamburgerEnd = newContent.indexOf('</button>\n          </div>\n        </div>\n      </div>\n      {/* Menu Overlay Scrim */}');
    
    newContent = newContent.substring(0, hamburgerEnd) + '</button>\n          </div>\n          </div>\n        </div>\n      </div>\n      {/* Menu Overlay Scrim */}' + newContent.substring(hamburgerEnd + '</button>\n          </div>\n        </div>\n      </div>\n      {/* Menu Overlay Scrim */}'.length);
    
    fs.writeFileSync('src/Header.tsx', newContent);
    console.log("Updated layout.");
} else {
    console.log("Failed to find indexes");
}
