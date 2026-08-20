import fs from 'fs';
let code = fs.readFileSync('src/Header.tsx', 'utf8');

code = code.replace(
  /scrolled \? "bg-\[var\(--navy\)\] shadow-sm border-b border-white\/10" : "bg-transparent",/g,
  '"bg-[var(--navy)] shadow-sm border-b border-white/10",'
);

fs.writeFileSync('src/Header.tsx', code);
