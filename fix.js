import fs from 'fs';
let css = fs.readFileSync('src/index.css', 'utf8');

// The regex /backdrop-filter: blur\([^\)]+\) saturate\([^\)]+\);/g removed the rule, but there's an `@supports not (backdrop-filter: blur(16px)) {`
// Wait, I never wrote a regex to remove `@supports`.
// Ah! The extra braces are at line 157 and 173 and 183.
// Let's just remove them.
css = css.replace(/    \.glass-panel {\n      background: rgba\(12, 17, 15, 0\.94\);\n    }\n  \}/g, '');
css = css.replace(/    \.glass-panel-strong {\n      background: rgba\(12, 17, 15, 0\.94\);\n    }\n  \}/g, '');
css = css.replace(/    \.glass-nav-scrolled {\n      background: rgba\(12, 17, 15, 0\.94\);\n    }\n  \}/g, '');
fs.writeFileSync('src/index.css', css);
