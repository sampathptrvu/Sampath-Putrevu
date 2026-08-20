const fs = require('fs');
let content = fs.readFileSync('src/WorkPage.tsx', 'utf8');

content = content.replace(
  '<span className="underline underline-offset-4 decoration-[1px] text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors">Business Standard coverage</span>',
  '<span className="text-[var(--color-text)]">Business Standard coverage</span>'
);

fs.writeFileSync('src/WorkPage.tsx', content);
