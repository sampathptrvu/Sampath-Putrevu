const fs = require('fs');
const file = 'src/HomePage.tsx';
let content = fs.readFileSync(file, 'utf8');

// Remove Past Work Section
const startPastWork = /\{\/\* Past Work Preview \*\/\}/;
const endPastWork = /\{\/\* Final CTA \*\/\}/;

if (content.match(startPastWork) && content.match(endPastWork)) {
  const before = content.substring(0, content.search(startPastWork));
  const after = content.substring(content.search(endPastWork));
  content = before + after;
  console.log('Past work section removed from HomePage.');
} else {
  console.log('Past work section not found.');
}

// Add Past Work button in Hero
const bookACallHero = /<a\s*href="https:\/\/cal\.com\/sampath-putrevu-z6jq0i"[\s\S]*?>\s*Book a call\s*<\/a>/;
if (content.match(bookACallHero)) {
  const bookACallMatch = content.match(bookACallHero)[0];
  const newButtons = bookACallMatch + `\n                <Link 
                  to="/work"
                  className="w-full md:w-auto text-center inline-flex items-center justify-center px-6 md:px-[28px] py-[14px] bg-white/10 backdrop-blur-sm border border-white/20 text-[#fffaf2] rounded-[4px] text-[15px] font-bold hover:-translate-y-[1px] hover:bg-white/15 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent cursor-pointer shadow-sm"
                >
                  Past work
                </Link>`;
  // Only replace the first occurrence (in hero)
  let replaced = false;
  content = content.replace(bookACallHero, (match) => {
    if (!replaced) {
      replaced = true;
      return newButtons;
    }
    return match;
  });
  console.log('Added Past work button to Hero.');
} else {
  console.log('Hero Book a call not found.');
}

fs.writeFileSync(file, content, 'utf8');
