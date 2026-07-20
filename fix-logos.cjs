const fs = require('fs');

let content = fs.readFileSync('src/HomePage.tsx', 'utf8');

const targetStr = '<div className="flex flex-row flex-wrap justify-center sm:justify-start items-center gap-[18px] sm:gap-[28px] md:gap-[32px] w-fit max-w-[800px] py-[10px] md:py-[12px]">';
const replacement = '<div className="flex flex-row flex-wrap justify-center sm:justify-start items-center gap-[18px] sm:gap-[28px] md:gap-[32px] w-fit max-w-[800px] py-[10px] md:py-[12px]" style={{ textShadow: "0 2px 14px rgba(0, 0, 0, 0.45)" }}>';

content = content.replace(targetStr, replacement);
fs.writeFileSync('src/HomePage.tsx', content);
