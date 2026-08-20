const fs = require('fs');

let content = fs.readFileSync('src/PublishedPage.tsx', 'utf8');

const searchTarget = `                    >
                      How a vision to play the long game in the industry helped Postman build a rockstar product
                    </a>
                  </li>
                </ul>`;

const newItem = `                    >
                      How a vision to play the long game in the industry helped Postman build a rockstar product
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://yourstory.com/2020/02/techie-tuesday-benson-samuel-cryptocurrency-bitcoin-blockchain-ico"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Meet the architect of India's first crypto algorithm
                    </a>
                  </li>
                </ul>`;

if (content.includes(searchTarget)) {
  content = content.replace(searchTarget, newItem);
  fs.writeFileSync('src/PublishedPage.tsx', content);
  console.log("Successfully added the new YourStory entry.");
} else {
  console.error("Could not find the target text.");
  process.exit(1);
}
