const fs = require('fs');
let content = fs.readFileSync('src/PublishedPage.tsx', 'utf8');

const replacements = [
  {
    find: `<span className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)]">\n                      Mapping the journey of Lalitesh Katragadda, the creator of Google Maps India\n                    </span>`,
    replace: `<a\n                      href="https://yourstory.com/2019/08/google-map-maker-lalitesh-katragadda-techie-tuesday"\n                      target="_blank"\n                      rel="noopener noreferrer"\n                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"\n                    >\n                      Mapping the journey of Lalitesh Katragadda, the creator of Google Maps India\n                    </a>`
  },
  {
    find: `<span className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)]">\n                      Dharmesh Shah wanted to be a mechanical engineer, but blogged his way and built CRM company HubSpot\n                    </span>`,
    replace: `<a\n                      href="https://yourstory.com/2019/12/hubspot-dharmesh-shah-techie-tuesday"\n                      target="_blank"\n                      rel="noopener noreferrer"\n                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"\n                    >\n                      Dharmesh Shah wanted to be a mechanical engineer, but blogged his way and built CRM company HubSpot\n                    </a>`
  },
  {
    find: `<span className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)]">\n                      How Razorpay's Shashank Kumar built India's first online payment gateway for startups\n                    </span>`,
    replace: `<a\n                      href="https://yourstory.com/2019/07/razorpay-shashank-kumar-payment-gateway-startup-techie-tuesday"\n                      target="_blank"\n                      rel="noopener noreferrer"\n                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"\n                    >\n                      How Razorpay's Shashank Kumar built India's first online payment gateway for startups\n                    </a>`
  },
  {
    find: `<span className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)]">\n                      A guide to hiring great engineering leaders\n                    </span>`,
    replace: `<a\n                      href="https://www.seedtoscale.com/blog/a-guide-to-hiring-great-engineering-leaders"\n                      target="_blank"\n                      rel="noopener noreferrer"\n                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"\n                    >\n                      A guide to hiring great engineering leaders\n                    </a>`
  },
  {
    find: `<span className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)]">\n                      The first 500 days of Freshworks\n                    </span>`,
    replace: `<a\n                      href="https://www.seedtoscale.com/podcast/untold-seed-stories-first-500-days-of-freshworks"\n                      target="_blank"\n                      rel="noopener noreferrer"\n                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"\n                    >\n                      The first 500 days of Freshworks\n                    </a>`
  },
  {
    find: `<span className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)]">\n                      The first 500 days of Swiggy\n                    </span>`,
    replace: `<a\n                      href="https://www.seedtoscale.com/podcast/untold-seed-stories-first-500-days-of-swiggy"\n                      target="_blank"\n                      rel="noopener noreferrer"\n                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"\n                    >\n                      The first 500 days of Swiggy\n                    </a>`
  },
  {
    find: `<span className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)]">\n                      The first 500 days of Ninjacart\n                    </span>`,
    replace: `<a\n                      href="https://www.seedtoscale.com/podcast/untold-seed-stories-first-500-days-of-ninjacart"\n                      target="_blank"\n                      rel="noopener noreferrer"\n                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"\n                    >\n                      The first 500 days of Ninjacart\n                    </a>`
  },
  {
    find: `<span className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)]">\n                      The first 500 days of Urban Company\n                    </span>`,
    replace: `<a\n                      href="https://www.seedtoscale.com/podcast/untold-seed-stories-first-500-days-of-urban-company"\n                      target="_blank"\n                      rel="noopener noreferrer"\n                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"\n                    >\n                      The first 500 days of Urban Company\n                    </a>`
  },
  {
    find: `<span className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)]">\n                      Maintainers Should Consider Following Node.js' Release Schedule\n                    </span>`,
    replace: `<a\n                      href="https://medium.com/the-node-js-collection/maintainers-should-consider-following-node-js-release-schedule-ab08ed4de71a"\n                      target="_blank"\n                      rel="noopener noreferrer"\n                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"\n                    >\n                      Maintainers Should Consider Following Node.js' Release Schedule\n                    </a>`
  }
];

let replacedCount = 0;
for (const rep of replacements) {
  if (content.includes(rep.find)) {
    content = content.replace(rep.find, rep.replace);
    replacedCount++;
  } else {
    // If exact match failed, try looser
    const innerTextMatch = rep.find.match(/>\s*(.*?)\s*<\/span>/s);
    if (innerTextMatch) {
      const text = innerTextMatch[1].trim();
      const escapedText = text.replace(/[.*+?^$\{}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`<span[^>]*>\\s*${escapedText}\\s*<\/span>`, 's');
      if (regex.test(content)) {
        content = content.replace(regex, rep.replace);
        replacedCount++;
      }
    }
  }
}

fs.writeFileSync('src/PublishedPage.tsx', content);
console.log(`Restored ${replacedCount} links in PublishedPage.tsx`);
