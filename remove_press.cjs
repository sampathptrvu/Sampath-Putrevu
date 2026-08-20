const fs = require('fs');

let content = fs.readFileSync('src/PublishedPage.tsx', 'utf8');

const target = `<div className="rule-major my-[48px] lg:my-[64px]"></div>

              <div className="w-full">
                <h3 className="font-serif font-semibold text-[22px] md:text-[24px] lg:text-[28px] text-[var(--color-text)] mb-[24px]">
                  Press coverage earned for clients
                </h3>
                <ul className="flex flex-col gap-[16px]">
                  <li>
                    <span className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)]">
                      Bloomberg and TechCrunch, Web3Auth partner launches
                    </span>
                  </li>
                  <li>
                    <span className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)]">
                      TechCrunch, Zenskar
                    </span>
                  </li>
                  <li>
                    <span className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)]">
                      Business Standard, Champ AI's $8.5M seed and stealth launch
                    </span>
                  </li>
                  <li>
                    <a
                      href="https://economictimes.indiatimes.com/tech/funding/masai-school-bags-5-million-in-series-a-funding-led-by-omidyar-network-india/articleshow/81673836.cms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      CNBC and Economic Times, Masai School Series A
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.moneycontrol.com/news/business/startup/masai-school-raises-15-million-in-series-b-funding-led-by-omidyar-network-india-7598811.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      MoneyControl, Masai School Series B
                    </a>
                  </li>
                  <li>
                    <span className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)]">
                      Mint, VCCircle, and Business World, Masai School's two acquisitions
                    </span>
                  </li>
                </ul>
              </div>`;

if (content.includes(target)) {
  content = content.replace(target, '');
  fs.writeFileSync('src/PublishedPage.tsx', content);
  console.log('Successfully removed the target block.');
} else {
  console.log('Could not find the exact string. Falling back to regex.');
  
  const startIdx = content.indexOf('<div className="rule-major my-[48px] lg:my-[64px]"></div>');
  const h3Idx = content.indexOf('Press coverage earned for clients', startIdx);
  
  if (startIdx !== -1 && h3Idx !== -1) {
    const endUlIdx = content.indexOf('</ul>', h3Idx);
    const endDivIdx = content.indexOf('</div>', endUlIdx);
    
    if (endDivIdx !== -1) {
      const blockToRemove = content.substring(startIdx, endDivIdx + 6);
      content = content.replace(blockToRemove, '');
      fs.writeFileSync('src/PublishedPage.tsx', content);
      console.log('Successfully removed the target block via index slice.');
    } else {
      console.error('Could not find end of div.');
    }
  } else {
    console.error('Could not find start indices.');
  }
}
