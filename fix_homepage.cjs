const fs = require('fs');

let content = fs.readFileSync('src/HomePage.tsx', 'utf8');

// Add import Header from './Header';
if (!content.includes("import Header from './Header';")) {
  content = content.replace("import { useMetadata } from './useMetadata';", "import { useMetadata } from './useMetadata';\nimport Header from './Header';");
}

// Remove the state isMobileMenuOpen from HomePage since it's handled by Header
content = content.replace(/  const \[isMobileMenuOpen, setIsMobileMenuOpen\] = useState\(false\);\n/, '');
content = content.replace(/import { useState } from 'react';\n/, '');

// Now remove the entire <header> ... </header> block
// AND the {/* Mobile Menu (unchanged logic) */}
// AND {isMobileMenuOpen && ( ... )} blocks
// and replace with <Header />

const heroContentIdx = content.indexOf('{/* Hero Content */}');
const headerStartIdx = content.indexOf('{/* Header */}');

if (heroContentIdx !== -1 && headerStartIdx !== -1) {
  content = content.substring(0, headerStartIdx) + '<Header />\n      ' + content.substring(heroContentIdx);
}

// Ensure Link to contact is correct in the Hero content:
content = content.replace(/<Link to="\/best-fit"/g, '<Link to="/contact"');
content = content.replace(/Work with me &rarr;<\/Link>/g, 'Work with me &rarr;</Link>'); // It's fine already

fs.writeFileSync('src/HomePage.tsx', content);
console.log("Updated HomePage.tsx");
