const fs = require('fs');

const fileContent = fs.readFileSync('src/PublishedPage.tsx', 'utf8');

const indexBefore = fileContent.indexOf('<h3 className="font-serif font-semibold text-[22px] md:text-[24px] lg:text-[28px] text-[var(--color-text)] mb-[24px]">\n                  At Web3Auth');
const indexOfRuleBeforeWeb3 = fileContent.lastIndexOf('<div className="rule-major', indexBefore);

const indexAfter = fileContent.indexOf('<h3 className="font-serif font-semibold text-[22px] md:text-[24px] lg:text-[28px] text-[var(--color-text)] mb-[24px]">\n                  Press coverage earned for clients');
const indexOfRuleAfterWeb3 = fileContent.lastIndexOf('<div className="rule-major', indexAfter);

if (indexBefore === -1 || indexAfter === -1 || indexOfRuleBeforeWeb3 === -1 || indexOfRuleAfterWeb3 === -1 || indexOfRuleBeforeWeb3 === indexOfRuleAfterWeb3) {
  console.error("Could not find boundaries safely.", {indexBefore, indexOfRuleBeforeWeb3, indexAfter, indexOfRuleAfterWeb3});
  process.exit(1);
}

const beforeBlock = fileContent.substring(0, indexOfRuleBeforeWeb3);
const afterBlock = fileContent.substring(indexOfRuleAfterWeb3);

const data = [
  {
    category: "Brand and Content Platforms",
    items: [
      { title: "Web3Auth Blog", url: "https://blog.web3auth.io/" },
      { title: "Web3Auth Website", url: "https://web3auth.io" },
      { title: "Web3Auth on X", url: "https://twitter.com/Web3Auth" }
    ]
  },
  {
    category: "Case Studies and Partnerships",
    items: [
      { title: "How Pop Social Increased Signups by 35% With Web3Auth", url: "https://blog.web3auth.io/pop-socials-35-surge-in-signups-after-web3auth-integration/" },
      { title: "The Story of the Web3Auth and Ronin Wallet Integration", url: "https://blog.web3auth.io/the-story-of-web3auth-x-ronin-wallet-integration/" },
      { title: "How Keplr Pioneered Social Logins for Web3 Wallets", url: "https://blog.web3auth.io/how-keplr-pioneered-social-logins-for-web3-wallets-way-before-it-was-cool/" },
      { title: "How Social Logins Came to Power 25% of Biconomy’s Users", url: "https://blog.web3auth.io/what-went-behind-25-of-biconomys-users-today-use-social-logins/" },
      { title: "Poko and Web3Auth: Simplifying On-Ramping for Global Wallet Users", url: "https://blog.web3auth.io/poko-x-web3auth-simplify-onramping-for-global-wallet-users/" },
      { title: "Treasure Chess and the 100,000+ Web3Auth Wallets We Built Together", url: "https://blog.web3auth.io/treasure-chess-and-the-100-000-web3auth-wallets-we-built-together/" },
      { title: "Launching the Web3Auth Firebase Extension With Google Cloud", url: "https://blog.web3auth.io/launching-web3auth-firebase-extension-with-google-cloud-to-connect-millions-of-web2-businesses/" },
      { title: "A Step-by-Step Guide to Installing the Web3Auth Firebase Extension", url: "https://blog.web3auth.io/a-step-by-step-guide-to-installing-the-web3auth-firebase-extension/" }
    ]
  },
  {
    category: "SK Planet Launch",
    items: [
      { title: "SK Planet Adopts Web3Auth", url: "https://n.news.naver.com/mnews/article/119/0002762272?sid=105" },
      { title: "Can Enterprises Augment Their Loyalty Programs With Web3?", url: "https://toruslabs.medium.com/can-enterprises-augment-their-loyalty-programmes-with-web3-dd24f37c3a73" },
      { title: "SK Planet Partnership: Korean-Language Blog", url: "https://blog.web3auth.io/gieobi-web3reul-tonghae-royeolti-peurogeuraemeul-ganghwahal-su-issnayo/" },
      { title: "SK Planet and Web3Auth Partnership Announcement on X", url: "https://x.com/Web3Auth/status/1717392676281319523" },
      { title: "SK Planet Launches UPTN, South Korea’s Web3 Ecosystem on Avalanche", url: "https://www.avax.network/about/blog/sk-planet-announces-uptn-south-koreas-long-awaited-web3-ecosystem-built-on-avalanche" }
    ]
  },
  {
    category: "Trust Wallet Launch",
    items: [
      { title: "Web3Auth and Trust Wallet Partnership Announcement", url: "https://blog.web3auth.io/announcing-our-partnership-with-trust-wallet-to-offer-the-simplest-web3-onboarding-ever/" },
      { title: "Trust Wallet Partners With Web3Auth to Simplify Web3 Onboarding", url: "https://www.globenewswire.com/en/news-release/2023/04/26/2655176/0/en/Trust-Wallet-Partners-With-Web3Auth-to-Simplify-Web3-Onboarding-Using-Social-Logins.html" },
      { title: "Trust Wallet Partnership Announcement Thread", url: "https://x.com/Web3Auth/status/1651587527952982018?s=20" },
      { title: "Trust Wallet Partnership Announcement on Medium", url: "https://toruslabs.medium.com/announcing-our-partnership-with-trust-wallet-to-offer-the-simplest-web3-onboarding-ever-f19b92a49fcd" },
      { title: "Trust Wallet Partnership Brand Announcement", url: "https://x.com/Web3Auth/status/1651213630954954753" },
      { title: "My Trust Wallet Partnership Thread", url: "https://x.com/sampathptrvu/status/1653627430178017280" }
    ]
  },
  {
    category: "Product Updates, Conferences, and Research",
    items: [
      { title: "Introducing the Revamped Web3Auth Dashboard", url: "https://toruslabs.medium.com/a-revamped-dashboard-and-the-updates-it-brings-along-81e939f1d137" },
      { title: "Web3Auth Self-Host SDK Becomes Core Kit", url: "https://medium.com/toruslabs/important-product-updates-web3auth-self-host-and-plug-and-play-590bdf414ef6" },
      { title: "Research Insights: Optimal MFA Options for Web3 Audiences", url: "https://toruslabs.medium.com/research-insights-optimal-mfa-options-for-web3-audiences-04f6bdab65bb" },
      { title: "What Game Developers Want From the Next Generation of Web3 Games", url: "https://toruslabs.medium.com/what-game-developers-want-from-the-next-generation-of-web3-games-insight-from-gdc-2023-4070c9494322" },
      { title: "The Sapphire Upgrade: Faster, Lighter, and Globally Scalable MPC", url: "https://blog.web3auth.io/its-time-for-the-sapphire-upgrade-faster-lighter-and-unmatched-globally-scalable-mpc/" },
      { title: "Token2049: Wallets and UX Conference Coverage", url: "https://x.com/Web3Auth/status/1701542727031365756?s=20" }
    ]
  },
  {
    category: "Acquisitions and Security Communications",
    items: [
      { title: "Web3Auth Acquires On-Ramp Aggregator Poko", url: "https://toruslabs.medium.com/announcing-web3auths-acquisition-of-poko-on-ramp-aggregator-2902e60284c8" },
      { title: "Web3Auth’s Statement on the Magic Link Phishing Attack", url: "https://medium.com/toruslabs/web3auths-statement-on-the-recent-magic-link-phishing-attack-afd7f46566cf" },
      { title: "Web3Auth’s Response to TSSHOCK and BitForge", url: "https://blog.web3auth.io/web3auths-response-to-recent-attacks-on-mpc-protocols-tsshock-bitforge/" }
    ]
  },
  {
    category: "Thought Leadership",
    items: [
      { title: "Why Seed Phrases Should Go Away Now and Forever", url: "https://blog.web3auth.io/why-it-is-time-for-seedphrases-to-go-away-now-and-forever/" },
      { title: "Can Enterprises Augment Their Loyalty Programs With Web3?", url: "https://blog.web3auth.io/can-enterprises-augment-their-loyalty-programmes-with-web3/" },
      { title: "Everything You Need to Know About ERC-4337", url: "https://blog.web3auth.io/all-you-need-to-know-about-erc-4337/" },
      { title: "What on Earth Is Account Abstraction?", url: "https://blog.web3auth.io/what-on-earth-is-account-abstraction/" },
      { title: "How Do You Truly Own a Self-Custodial Wallet?", url: "https://blog.web3auth.io/how-do-you-truly-own-a-self-custodial-wallet/" },
      { title: "The Curious Case of Custodial Crypto Exchanges", url: "https://blog.web3auth.io/the-curious-case-of-custodial-crypto-exchanges/" },
      { title: "What Is Developer Trust, and How Does It Apply to Self-Custody?", url: "https://blog.web3auth.io/what-is-developer-trust-and-how-it-applies-to-self-custody/" }
    ]
  }
];

const linkClass = "font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors";

let newContent = `<div className="rule-major my-[48px] lg:my-[64px]"></div>

              <div className="w-full">
                <h3 className="font-serif font-semibold text-[22px] md:text-[24px] lg:text-[28px] text-[var(--color-text)] mb-[24px]">
                  At Web3Auth
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
console.log("Successfully rebuilt Web3Auth section.");
