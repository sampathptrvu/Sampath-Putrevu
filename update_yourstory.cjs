const fs = require('fs');

const items = [
  {
    title: "He wanted to be a mechanical engineer, but blogged his way and built CRM company HubSpot",
    url: "https://yourstory.com/2019/11/techie-tuesday-crm-company-hubspot-cto-dharmesh-shah"
  },
  {
    title: "Meet ex-Zynga CTO Cadir Lee, who now dons many hats in the startup world and beyond",
    url: "https://yourstory.com/2020/02/techie-tuesday-cadir-lee-zynga-ohm-connect-farmville-startup"
  },
  {
    title: "Mapping the journey of Lalitesh Katragadda, the creator of Google Maps India",
    url: "https://yourstory.com/2018/02/mapping-journey-lalitesh-katragadda-creator-google-maps-india"
  },
  {
    title: "How Razorpay’s Shashank Kumar built India’s first payment gateway for startups",
    url: "https://yourstory.com/2019/07/techie-tuesday-razorpay-shashank-kumar-payments-startups"
  },
  {
    title: "[YS Exclusive] Why San Francisco’s coding bootcamp Lambda School is placing its bets on India",
    url: "https://yourstory.com/2019/09/lambda-school-coding-bootcamp-india-education"
  },
  {
    title: "How PayPal is penetrating India’s vast Fintech market",
    url: "https://yourstory.com/2019/11/paypal-penetrating-indias-vast-fintech-mark"
  },
  {
    title: "How Google Pay used user experience to make a mark in India’s congested fintech market",
    url: "https://yourstory.com/2019/11/google-pay-user-experience-exclusive-india-fintech"
  },
  {
    title: "SF-based voice AI platform Observe.ai found a target market first and then built a product",
    url: "https://yourstory.com/2019/12/san-francisco-observe-ai-voice-customer-experience-product"
  },
  {
    title: "When an apple farmer teamed up with a military veteran: The Jumbotail story",
    url: "https://yourstory.com/2019/12/turning-point-jumbotail-kirana-stores-entrepreneurs"
  },
  {
    title: "A breakfast meeting with friends led to the idea for Yellow Messenger",
    url: "https://yourstory.com/2019/11/turning-point-yellow-messenger-conversational-ai"
  },
  {
    title: "Three broke boys turned entrepreneurs built global customer service giant Zendesk",
    url: "https://yourstory.com/2019/09/turning-point-zendesk-copenhagen-cx-customer-experience"
  },
  {
    title: "How a vision to play the long game in the industry helped Postman build a rockstar product",
    url: "https://yourstory.com/2020/05/product-roadmap-postman-api-development-tech-startup"
  }
];

const linkClass = "font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors";

const ulContent = items.map(item => `                  <li>
                    <a
                      href="${item.url}"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="${linkClass}"
                    >
                      ${item.title}
                    </a>
                  </li>`).join('\n');

const newSection = `<ul className="flex flex-col gap-[16px]">\n${ulContent}\n                </ul>`;

let content = fs.readFileSync('src/PublishedPage.tsx', 'utf8');

// Replace the At YourStory ul.
// Find the exact block starting with the ul up to the end of the ul before "At Accel's SeedToScale"
const regex = /(<h3 className="font-serif font-semibold text-\[22px\] md:text-\[24px\] lg:text-\[28px\] text-\[var\(--color-text\)\] mb-\[24px\]">\s*At YourStory\s*<\/h3>\s*)<ul className="flex flex-col gap-\[16px\]">.*?<\/ul>/s;

if (regex.test(content)) {
  content = content.replace(regex, `$1${newSection}`);
  fs.writeFileSync('src/PublishedPage.tsx', content);
  console.log("Replaced At YourStory successfully.");
} else {
  console.log("Could not find the target block.");
}
