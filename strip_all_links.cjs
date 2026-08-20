const fs = require('fs');
let content = fs.readFileSync('src/PublishedPage.tsx', 'utf8');

// Replace all external links in the lists back to spans
content = content.replace(/<a[^>]*href="[^"]+"[^>]*>\s*(.*?)\s*<\/a>/gs, (match, p1) => {
  // If the link is for "Book a call" or some global stuff, keep it
  if (p1.includes("Book a call") || p1.includes("See the work")) return match;
  return `<span className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)]">\n                      ${p1}\n                    </span>`;
});

fs.writeFileSync('src/PublishedPage.tsx', content);
