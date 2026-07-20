const fs = require('fs');
let content = fs.readFileSync('src/HomePage.tsx', 'utf8');

// The sharp overlay is the first one, before Layer 2: Blurred.
// We can find "Layer 2: Blurred" and replace the one BEFORE it.
const sharpOverlay = 'bg-[#050908]/[0.62] md:bg-[#050908]/[0.52]';
const newOverlay = 'bg-[#090e0b]/[0.48]';

const parts = content.split('{/* Layer 2: Blurred */}');
if (parts.length === 2) {
  parts[0] = parts[0].replace(newOverlay, sharpOverlay);
  content = parts.join('{/* Layer 2: Blurred */}');
  fs.writeFileSync('src/HomePage.tsx', content);
}
