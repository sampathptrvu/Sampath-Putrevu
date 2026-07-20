const fs = require('fs');

let content = fs.readFileSync('src/HomePage.tsx', 'utf8');

// Replace the div containing the buttons
const buttonDivRegex = /<div className="flex flex-col md:flex-row items-start justify-start gap-\[14px\] md:gap-\[16px\] w-full md:w-auto">[\s\S]*?<\/div>/;

const newButtons = `<div className="hero-actions">
                  <a 
                    href="https://cal.com/sampath-putrevu-z6jq0i"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto text-center inline-flex items-center justify-center px-6 md:px-[28px] py-[14px] bg-burgundy text-warm-white rounded-[4px] text-[15px] font-bold hover:bg-burgundy-dark transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent cursor-pointer shadow-sm"
                  >
                    Book a call
                  </a>
                  <Link 
                    to="/work"
                    className="w-full md:w-auto text-center inline-flex items-center justify-center px-6 md:px-[28px] py-[14px] bg-white/10 backdrop-blur-sm border border-white/20 text-warm-white rounded-[4px] text-[15px] font-bold hover:bg-white/15 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent cursor-pointer shadow-sm"
                  >
                    Past work
                  </Link>
                </div>`;

content = content.replace(buttonDivRegex, newButtons);

fs.writeFileSync('src/HomePage.tsx', content);
