const fs = require('fs');
let content = fs.readFileSync('src/HomePage.tsx', 'utf8');

content = content.replace(/text-left text-\[rgba\(255,250,242,0\.92\)\]/, 'text-[rgba(255,250,242,0.92)] text-center');
content = content.replace(/text-balance text-warm-white text-left/, 'text-balance text-warm-white text-center');
content = content.replace(/text-text-on-dark text-left/, 'text-text-on-dark text-center');

// Center the wrapper
content = content.replace(/<div className="w-full relative z-10 text-left flex flex-col items-start">/, '<div className="w-full relative z-10 text-center flex flex-col items-center justify-center">');

fs.writeFileSync('src/HomePage.tsx', content);
