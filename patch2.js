import fs from 'fs';
let code = fs.readFileSync('src/Header.tsx', 'utf8');

code = code.replace(
  'scrolled ? "bg-ink/90 backdrop-blur-md shadow-sm border-b border-divider-dark" : "bg-transparent",',
  '"bg-[var(--navy)] shadow-sm border-b border-white/10",'
);

// We should also remove the scrolled state for the backdrop-blur if it was somewhere else, but let's check
fs.writeFileSync('src/Header.tsx', code);
