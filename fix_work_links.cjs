const fs = require('fs');
let content = fs.readFileSync('src/WorkPage.tsx', 'utf8');

const linkClass = "underline underline-offset-4 decoration-[1px] text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors";

content = content.replace(
  'Links: Champ AI &middot; Business Standard coverage',
  'Links: <a href="https://www.champ.ai/" className="' + linkClass + '">Champ AI</a> &middot; <span className="' + linkClass + '">Business Standard coverage</span>'
);

content = content.replace(
  'Links: Zenskar',
  'Links: <a href="https://www.zenskar.com/" className="' + linkClass + '">Zenskar</a>'
);

content = content.replace(
  'Links: Web3Auth &middot; Fox.com &middot; Trust Wallet &middot; Google Firebase',
  'Links: <a href="https://web3auth.io/" className="' + linkClass + '">Web3Auth</a> &middot; <a href="https://www.fox.com/" className="' + linkClass + '">Fox.com</a> &middot; <a href="https://trustwallet.com/" className="' + linkClass + '">Trust Wallet</a> &middot; <a href="https://firebase.google.com/" className="' + linkClass + '">Google Firebase</a>'
);

content = content.replace(
  'Links: Accel &middot; Prime Venture Partners',
  'Links: <a href="https://www.accel.com/" className="' + linkClass + '">Accel</a> &middot; <a href="https://primevp.in/" className="' + linkClass + '">Prime Venture Partners</a>'
);

content = content.replace(
  'Links: Masai School',
  'Links: <a href="https://www.masaischool.com/" className="' + linkClass + '">Masai School</a>'
);

content = content.replace(
  'Links: YourStory',
  'Links: <a href="https://yourstory.com/" className="' + linkClass + '">YourStory</a>'
);

fs.writeFileSync('src/WorkPage.tsx', content);
