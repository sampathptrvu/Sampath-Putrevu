const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');

// Remove body text shadow
css = css.replace(/text-shadow: 0 1px 4px rgba\(0, 0, 0, 0\.40\);\n/, '');

// Remove .hero-copy blocks
css = css.replace(/\.hero-copy\s*\{[\s\S]*?\}/g, '');
css = css.replace(/\.hero-copy h1\s*\{[\s\S]*?\}/g, '');
css = css.replace(/\.hero-copy \.eyebrow,\s*\.hero-copy p\s*\{[\s\S]*?\}/g, '');

// Remove .problem-label blocks
css = css.replace(/\.problem-label\s*\{[\s\S]*?\}/g, '');
css = css.replace(/\.problem-label::before\s*\{[\s\S]*?\}\s*@media\s*\(max-width:\s*767px\)\s*\{\s*\.problem-label::before\s*\{[\s\S]*?\}\s*\}/g, '');

fs.writeFileSync('src/index.css', css);
