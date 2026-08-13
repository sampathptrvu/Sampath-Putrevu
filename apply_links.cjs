const fs = require('fs');
const linkClass = "hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors";

function wrapLink(name, url) {
  return `<a href="${url}" target="_blank" rel="noopener noreferrer" className="${linkClass}">${name}</a>`;
}

// Map from company names to URLs
const links = {
  "Champ AI": "https://www.champ.ai/",
  "Zenskar": "https://www.zenskar.com/",
  "Web3Auth": "https://web3auth.io/",
  "Masai School": "https://www.masaischool.com/",
  "Accel": "https://www.accel.com/",
  "YourStory": "https://yourstory.com/",
  "Redpoint": "https://www.redpoint.com/",
  "Sequoia": "https://www.sequoiacap.com/",
  "Bessemer Venture Partners": "https://www.bvp.com/",
  "Bessemer": "https://www.bvp.com/",
  "Prime Venture Partners": "https://primevp.in/",
  "Lalamove": "https://www.lalamove.com/",
  "Postman": "https://www.postman.com/",
  "Trust Wallet": "https://trustwallet.com/",
  "SK Planet": "https://www.skplanet.com/",
  "Google Firebase": "https://firebase.google.com/",
  "Firebase": "https://firebase.google.com/",
  "Ripple": "https://ripple.com/",
  "Fox.com": "https://www.fox.com/"
};

// Process HomePage.tsx
let home = fs.readFileSync('src/HomePage.tsx', 'utf8');
home = home.replace("Today, I lead marketing for Champ AI, a Redpoint-backed company", 
  `Today, I lead marketing for ${wrapLink("Champ AI", links["Champ AI"])}, a ${wrapLink("Redpoint", links["Redpoint"])}-backed company`);

home = home.replace("Before that, I led brand at Zenskar, a Bessemer-backed AI billing platform",
  `Before that, I led brand at ${wrapLink("Zenskar", links["Zenskar"])}, a ${wrapLink("Bessemer", links["Bessemer"])}-backed AI billing platform`);

home = home.replace("Before that, I built the SeedToScale editorial platform at Accel, turning",
  `Before that, I built the SeedToScale editorial platform at ${wrapLink("Accel", links["Accel"])}, turning`);

fs.writeFileSync('src/HomePage.tsx', home);

// Process WorkPage.tsx
let work = fs.readFileSync('src/WorkPage.tsx', 'utf8');

// For metadata desc, do NOT replace inside string literal
// So we only replace the specific text strings inside JSX

work = work.replace(
  `Selected work across Champ AI, Zenskar, Web3Auth, Accel, Masai School, and YourStory.`,
  `Selected work across ${wrapLink("Champ AI", links["Champ AI"])}, ${wrapLink("Zenskar", links["Zenskar"])}, ${wrapLink("Web3Auth", links["Web3Auth"])}, ${wrapLink("Accel", links["Accel"])}, ${wrapLink("Masai School", links["Masai School"])}, and ${wrapLink("YourStory", links["YourStory"])}.`
);

work = work.replace(
  `Reporting on India's startup and technology ecosystem at YourStory.`,
  `Reporting on India's startup and technology ecosystem at ${wrapLink("YourStory", links["YourStory"])}.`
);

work = work.replace(
  `Including Dharmesh Shah, the Postman founders, and builders across India's internet economy.`,
  `Including Dharmesh Shah, the ${wrapLink("Postman", links["Postman"])} founders, and builders across India's internet economy.`
);

work = work.replace(
  `Owned editorial curation, writing, publishing, and distribution for the 100x Entrepreneur Podcast and Prime Venture Partners' Knowledge Series.`,
  `Owned editorial curation, writing, publishing, and distribution for the 100x Entrepreneur Podcast and ${wrapLink("Prime Venture Partners", links["Prime Venture Partners"])}' Knowledge Series.`
);

work = work.replace(
  `Produced as a core builder of Accel's SeedToScale platform across long-form resources, founder frameworks, company stories, and podcasts.`,
  `Produced as a core builder of ${wrapLink("Accel", links["Accel"])}'s SeedToScale platform across long-form resources, founder frameworks, company stories, and podcasts.`
);

work = work.replace(
  `Influenced by the organic inbound engine built at Zenskar.`,
  `Influenced by the organic inbound engine built at ${wrapLink("Zenskar", links["Zenskar"])}.`
);

work = work.replace(
  `Contributed to Web3Auth crossing $1M ARR`,
  `Contributed to ${wrapLink("Web3Auth", links["Web3Auth"])} crossing $1M ARR`
);

work = work.replace(
  `Across Zenskar's owned audience.`,
  `Across ${wrapLink("Zenskar", links["Zenskar"])}'s owned audience.`
);

work = work.replace(
  `<p className="work-kicker">Champ AI &middot; Fractional VP Marketing &middot; Redpoint-backed`,
  `<p className="work-kicker">${wrapLink("Champ AI", links["Champ AI"])} &middot; Fractional VP Marketing &middot; ${wrapLink("Redpoint", links["Redpoint"])}-backed`
);

work = work.replace(
  `<p className="work-kicker">Zenskar &middot; Head of Content and Brand &middot; Bessemer-backed`,
  `<p className="work-kicker">${wrapLink("Zenskar", links["Zenskar"])} &middot; Head of Content and Brand &middot; ${wrapLink("Bessemer", links["Bessemer"])}-backed`
);

work = work.replace(
  `<p className="work-kicker">Web3Auth &middot; Communications and Content Lead &middot; Sequoia-backed`,
  `<p className="work-kicker">${wrapLink("Web3Auth", links["Web3Auth"])} &middot; Communications and Content Lead &middot; ${wrapLink("Sequoia", links["Sequoia"])}-backed`
);

work = work.replace(
  `Owned PR for global partner launches including Fox.com, Trust Wallet, SK Planet, and Google Firebase.`,
  `Owned PR for global partner launches including ${wrapLink("Fox.com", links["Fox.com"])}, ${wrapLink("Trust Wallet", links["Trust Wallet"])}, ${wrapLink("SK Planet", links["SK Planet"])}, and ${wrapLink("Google Firebase", links["Google Firebase"])}.`
);

work = work.replace(
  `<p className="work-kicker">Accel &middot; Consulting Marketer in Residence`,
  `<p className="work-kicker">${wrapLink("Accel", links["Accel"])} &middot; Consulting Marketer in Residence`
);

work = work.replace(
  `<p className="work-kicker">Masai School &middot; First Marketing Hire`,
  `<p className="work-kicker">${wrapLink("Masai School", links["Masai School"])} &middot; First Marketing Hire`
);

work = work.replace(
  `<p className="work-kicker">YourStory &middot; Tech and Startup Journalist`,
  `<p className="work-kicker">${wrapLink("YourStory", links["YourStory"])} &middot; Tech and Startup Journalist`
);

fs.writeFileSync('src/WorkPage.tsx', work);
