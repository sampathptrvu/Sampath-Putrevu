const fs = require('fs');

let content = fs.readFileSync('src/HomePage.tsx', 'utf8');

// 1. Update credibility strip
const oldCred = '<div className="flex flex-row flex-wrap justify-center sm:justify-start items-center gap-[18px] sm:gap-[28px] md:gap-[32px] w-fit max-w-[800px] py-[10px] md:py-[12px]">';
const newCred = '<div className="credibility-strip flex-wrap justify-center sm:justify-start py-[10px] md:py-[12px]">';

content = content.replace(oldCred, newCred);

// Update opacity of logos
const oldOpacity = 'className="flex flex-wrap justify-center sm:justify-start items-center gap-[18px] sm:gap-[28px] md:gap-[32px] opacity-[0.78]"';
const newOpacity = 'className="flex flex-wrap justify-center sm:justify-start items-center gap-[18px] sm:gap-[28px] md:gap-[32px] opacity-100"';
content = content.replace(oldOpacity, newOpacity);

// 2. Add problem-label
const oldProb = '<h2 className="section-label text-xl md:text-2xl font-semibold tracking-tight text-warm-white">The problem</h2>';
const newProb = '<h2 className="section-label problem-label text-xl md:text-2xl font-semibold tracking-tight text-warm-white">The problem</h2>';
content = content.replace(oldProb, newProb);

fs.writeFileSync('src/HomePage.tsx', content);
