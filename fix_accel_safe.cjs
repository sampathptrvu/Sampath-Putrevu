const fs = require('fs');

const fileContent = fs.readFileSync('src/PublishedPage.tsx', 'utf8');

const markerBefore = 'At YourStory';
const markerAfter = 'At Web3Auth';

const indexBefore = fileContent.indexOf('<h3 className="font-serif font-semibold text-[22px] md:text-[24px] lg:text-[28px] text-[var(--color-text)] mb-[24px]">\n                  At Accel\'s SeedToScale');

const indexOfRuleBeforeAccel = fileContent.lastIndexOf('<div className="rule-major', indexBefore);
const indexAfter = fileContent.indexOf('<h3 className="font-serif font-semibold text-[22px] md:text-[24px] lg:text-[28px] text-[var(--color-text)] mb-[24px]">\n                  At Web3Auth');
const indexOfRuleAfterAccel = fileContent.lastIndexOf('<div className="rule-major', indexAfter);

if (indexOfRuleBeforeAccel === -1 || indexOfRuleAfterAccel === -1 || indexOfRuleBeforeAccel === indexOfRuleAfterAccel) {
  console.log("Could not safely identify bounds.", indexBefore, indexOfRuleBeforeAccel, indexAfter, indexOfRuleAfterAccel);
  process.exit(1);
}

const beforeBlock = fileContent.substring(0, indexOfRuleBeforeAccel);
const afterBlock = fileContent.substring(indexOfRuleAfterAccel);

const data = [
  {
    category: "First 500 Days",
    items: [
      {
        title: "Scaling a Consumer-Tech Startup in Its First 500 Days",
        url: "https://www.seedtoscale.com/video/scaling-a-consumer-tech-startup-in-its-first-500-days"
      },
      {
        title: "The First 500 Days of Freshworks",
        url: "https://www.seedtoscale.com/podcast/untold-seed-stories-first-500-days-of-freshworks"
      },
      {
        title: "The First 500 Days of Swiggy",
        url: "https://www.seedtoscale.com/podcast/untold-seed-stories-first-500-days-of-swiggy"
      },
      {
        title: "The First 500 Days of Urban Company",
        url: "https://www.seedtoscale.com/podcast/untold-seed-stories-first-500-days-of-urban-company"
      },
      {
        title: "The First 500 Days of Ninjacart",
        url: "https://www.seedtoscale.com/podcast/untold-seed-stories-first-500-days-of-ninjacart"
      },
      {
        title: "The First 500 Days of Building ixigo Through Its Many Pivots",
        url: "https://www.seedtoscale.com/video/the-first-500-days-of-building-ixigo-through-its-many-pivots"
      },
      {
        title: "Rigi Raises $10 Million in Series A Funding",
        url: "https://atoms.accel.com/news/rigi-an-accel-atoms-cohort-company-raises-10-million-in-series-a"
      }
    ]
  },
  {
    category: "FutureX",
    items: [
      {
        title: "The Future of Agritech",
        url: "http://seedtoscale.com/video/scaling-a-consumer-tech-startup-in-its-first-500-days"
      },
      {
        title: "The Future of Digital Health",
        url: "https://www.seedtoscale.com/podcast/future-of-digital-health"
      },
      {
        title: "The Future of AI in Healthcare",
        url: "https://www.seedtoscale.com/podcast/understanding-the-value-of-ai-in-healthcare"
      }
    ]
  },
  {
    category: "Other Resources",
    items: [
      {
        title: "The Scale Playbook: Key Ingredients to Drive Scale and Value Creation",
        url: "https://www.seedtoscale.com/content/the-scale-playbook-key-ingredients-to-drive-scale-value-creation"
      },
      {
        title: "Kunal Shah’s Delta 4 Theory of Successful Startups",
        url: "https://www.seedtoscale.com/blog/kunal-shahs-delta-4-theory-of-successful-startups"
      },
      {
        title: "A Guide to Hiring Great Engineering Leaders at a Startup",
        url: "https://www.seedtoscale.com/blog/a-guide-to-hiring-great-engineering-leaders-at-a-startup"
      },
      {
        title: "Airmeet: A New Venue for Community Events",
        url: "https://www.seedtoscale.com/blog/airmeet-a-new-venue-for-all-community-events"
      }
    ]
  }
];

const linkClass = "font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors";

let newContent = `<div className="rule-major my-[48px] lg:my-[64px]"></div>

              <div className="w-full">
                <h3 className="font-serif font-semibold text-[22px] md:text-[24px] lg:text-[28px] text-[var(--color-text)] mb-[24px]">
                  At Accel's SeedToScale
                </h3>
`;

data.forEach((section, index) => {
  newContent += `                <h4 className="font-sans font-medium text-[16px] lg:text-[18px] text-[var(--color-text)] mb-[16px] ${index > 0 ? 'mt-[32px]' : ''}">${section.category}</h4>
                <ul className="flex flex-col gap-[16px]">`;
  section.items.forEach(item => {
    newContent += `\n                  <li>
                    <a
                      href="${item.url}"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="${linkClass}"
                    >
                      ${item.title}
                    </a>
                  </li>`;
  });
  newContent += `\n                </ul>\n`;
});

newContent += `              </div>\n\n              `;

const finalContent = beforeBlock + newContent + afterBlock;
fs.writeFileSync('src/PublishedPage.tsx', finalContent);
console.log("Successfully rebuilt Accel section without regex $1 issues.");
