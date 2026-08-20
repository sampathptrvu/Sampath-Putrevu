const fs = require('fs');

const oldSubhead = "Content, brand, PR, and founder voice, earned rather than bought, for companies from seed to public. The engine I built at Zenskar closed $1.5M in deals without spending a dollar on ads.";
const newSubhead = "Earned marketing for companies from seed to public: brand and content, founder-led marketing and social, PR and organic demand generation. Across 10 years in technology journalism, venture capital, and startup marketing, interviewed 350+ founders and CTOs and built five marketing functions from zero.";

const oldMetaDesc = "I build marketing that outlasts the campaign. Content, brand, PR, and founder voice, earned rather than bought, for companies from seed to public.";
const newMetaDesc = "I build marketing that outlasts the campaign. Earned marketing for companies from seed to public: brand and content, founder-led marketing and social, PR and organic demand generation. Across 10 years in technology journalism, venture capital, and startup marketing, interviewed 350+ founders and CTOs and built five marketing functions from zero.";

// Update HomePage.tsx
let homePage = fs.readFileSync('src/HomePage.tsx', 'utf8');
homePage = homePage.replace(oldSubhead, newSubhead);
homePage = homePage.replaceAll(oldMetaDesc, newMetaDesc);
fs.writeFileSync('src/HomePage.tsx', homePage);

// Update prerender.js
let prerender = fs.readFileSync('prerender.js', 'utf8');
prerender = prerender.replaceAll(oldMetaDesc, newMetaDesc);
fs.writeFileSync('prerender.js', prerender);

// Update index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');
indexHtml = indexHtml.replaceAll(oldMetaDesc, newMetaDesc);
fs.writeFileSync('index.html', indexHtml);

console.log('Update complete');
