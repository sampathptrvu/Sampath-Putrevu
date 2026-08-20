const fs = require('fs');
let content = fs.readFileSync('src/AboutPage.tsx', 'utf8');
content = content.replace(
  "If you're building something hard to explain and worth understanding, reach out.",
  "If you're building something hard to explain and worth understanding, reach out at <a href=\"mailto:sampath@example.com\" className=\"underline hover:text-[var(--color-accent)] transition-colors\">sampath@example.com</a> or <a href=\"tel:+919989546250\" className=\"underline hover:text-[var(--color-accent)] transition-colors\">+91 99895 46250</a>."
);
fs.writeFileSync('src/AboutPage.tsx', content);
