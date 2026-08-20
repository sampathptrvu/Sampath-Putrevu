const fs = require('fs');
let content = fs.readFileSync('src/PublishedPage.tsx', 'utf8');

const workingLinks = [
  {
    text: 'The Scale Playbook, by Dr. Ajay Sethi',
    url: 'https://www.seedtoscale.com/podcast-series/the-scale-playbook'
  },
  {
    text: 'Treasure Chess and the 100,000+ Web3Auth wallets built together',
    url: 'https://medium.com/web3auth/treasure-chess-and-the-100-000-web3auth-wallets-we-built-together-d8c5f5904d13'
  },
  {
    text: 'How Keplr pioneered social logins for Web3 wallets',
    url: 'https://medium.com/web3auth/how-keplr-pioneered-social-logins-for-web3-wallets-34ed3d59665d'
  },
  {
    text: 'How to truly own a self-custodial wallet',
    url: 'https://medium.com/web3auth/how-to-truly-own-a-self-custodial-wallet-c82006509f6e'
  },
  {
    text: 'CNBC and Economic Times, Masai School Series A',
    url: 'https://economictimes.indiatimes.com/tech/funding/masai-school-bags-5-million-in-series-a-funding-led-by-omidyar-network-india/articleshow/81673836.cms'
  },
  {
    text: 'MoneyControl, Masai School Series B',
    url: 'https://www.moneycontrol.com/news/business/startup/masai-school-raises-15-million-in-series-b-funding-led-by-omidyar-network-india-7598811.html'
  },
  {
    text: 'Kunal Shah\'s Delta 4 theory',
    url: 'https://www.seedtoscale.com/podcast/kunal-shah-delta-4-theory-framework-to-build-wealth-creating-startups'
  }
];

const linkClass = "font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors";

for (const link of workingLinks) {
  const spanRegex = new RegExp(`<span className="font-sans font-normal text-\\[15px\\] lg:text-\\[16px\\] leading-\\[1\\.55\\] text-\\[var\\(--color-text\\)\\]">\\s*${link.text.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}\\s*</span>`, 's');
  const replacement = `<a
                      href="${link.url}"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="${linkClass}"
                    >
                      ${link.text}
                    </a>`;
  content = content.replace(spanRegex, replacement);
}

fs.writeFileSync('src/PublishedPage.tsx', content);
console.log("Restored working links to PublishedPage.tsx");
