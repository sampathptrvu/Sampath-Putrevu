const fs = require('fs');

let content = fs.readFileSync('src/WorkPage.tsx', 'utf8');

const champAITarget = `              <p className="font-sans font-normal text-[16px] lg:text-[17px] leading-[1.7] text-[var(--color-text)] max-w-[680px]">
                Joined at the seed stage to define how the company talked about itself. Built the category narrative that positions Champ as a way to buy outcomes without building infrastructure, competing against legacy outsourcing rather than on AI features alone. Led the launch out of stealth, including Business Standard coverage, alongside an $8.5M seed round backed by Redpoint, Defy VC, SV Angel, and Instacart founder Max Mullen. The category had no settled name, so the language had to teach the market what it was looking at while the product was still proving it.
              </p>`;

const champAIReplacement = `              <p className="font-sans font-normal text-[16px] lg:text-[17px] leading-[1.7] text-[var(--color-text)] max-w-[680px]">
                Joined at the seed stage to define how the company talked about itself. Built the category narrative that positions Champ as a way to buy outcomes without building infrastructure, competing against legacy outsourcing rather than on AI features alone. Led the launch out of stealth, including Business Standard coverage, alongside an $8.5M seed round backed by Redpoint, Defy VC, SV Angel, and Instacart founder Max Mullen. The category had no settled name, so the language had to teach the market what it was looking at while the product was still proving it.
              </p>

              <div className="mt-[32px]">
                <h4 className="font-sans font-medium text-[16px] lg:text-[18px] text-[var(--color-text)] mb-[16px]">
                  Stealth exit coverage
                </h4>
                <ul className="flex flex-col gap-[16px]">
                  <li>
                    <a
                      href="https://www.businessinsider.com/instacart-veterans-raise-8-5-million-automate-back-office-work-2026-5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Read the pitch deck Instacart veterans used to raise $8.5 million for AI startup Champ AI
                    </a>
                  </li>
                </ul>
              </div>`;

const zenskarTarget = `              <p className="font-sans font-normal text-[16px] lg:text-[17px] leading-[1.7] text-[var(--color-text)] max-w-[680px]">
                Led brand and inbound for a product that asked the market to unlearn how it priced software. Built and led a nine-person team across brand, founder marketing, editorial, search, design, and distribution. Developed the positioning and website narrative, and shipped 60+ search-led articles in under 90 days. The engine influenced $1.5M in closed-won deals with no paid spend, alongside a newsletter that held a 45% average open rate and TechCrunch coverage of the company's announcements. The product challenged an established billing model, so every piece had to teach the problem before it could sell the answer.
              </p>`;

const zenskarReplacement = `              <p className="font-sans font-normal text-[16px] lg:text-[17px] leading-[1.7] text-[var(--color-text)] max-w-[680px]">
                Led brand and inbound for a product that asked the market to unlearn how it priced software. Built and led a nine-person team across brand, founder marketing, editorial, search, design, and distribution. Developed the positioning and website narrative, and shipped 60+ search-led articles in under 90 days. The engine influenced $1.5M in closed-won deals with no paid spend, alongside a newsletter that held a 45% average open rate and TechCrunch coverage of the company's announcements. The product challenged an established billing model, so every piece had to teach the problem before it could sell the answer.
              </p>

              <div className="mt-[32px]">
                <h4 className="font-sans font-medium text-[16px] lg:text-[18px] text-[var(--color-text)] mb-[16px]">
                  Coverage
                </h4>
                <ul className="flex flex-col gap-[16px]">
                  <li>
                    <a
                      href="https://techcrunch.com/2022/10/03/saas-billing-platform-zenskar-funding-bessemer-ventures-partners/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      TechCrunch coverage
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.businesswire.com/news/home/20260416872552/en/Zenskar-Raises-%2415-Million-Series-A-to-Expand-Agentic-Capabilities-for-B2B-Revenue-Automation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Series A coverage
                    </a>
                  </li>
                </ul>
              </div>`;

let success = true;

if (content.includes(champAITarget)) {
  content = content.replace(champAITarget, champAIReplacement);
  console.log("Replaced Champ AI");
} else {
  console.error("Champ AI target not found.");
  success = false;
}

if (content.includes(zenskarTarget)) {
  content = content.replace(zenskarTarget, zenskarReplacement);
  console.log("Replaced Zenskar");
} else {
  console.error("Zenskar target not found.");
  success = false;
}

if (success) {
  fs.writeFileSync('src/WorkPage.tsx', content);
  console.log("Successfully wrote to src/WorkPage.tsx");
} else {
  process.exit(1);
}
