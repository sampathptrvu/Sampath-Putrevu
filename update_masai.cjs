const fs = require('fs');

let content = fs.readFileSync('src/PublishedPage.tsx', 'utf8');

const targetOld = `                <h3 className="font-serif font-semibold text-[22px] md:text-[24px] lg:text-[28px] text-[var(--color-text)] mb-[24px]">
                  At Masai School
                </h3>
                <h4 className="font-sans font-medium text-[16px] lg:text-[18px] text-[var(--color-text)] mb-[16px] ">Brand and Content Platforms</h4>
                <ul className="flex flex-col gap-[16px]">
                  <li>
                    <a
                      href="https://www.masaischool.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Masai School
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.masaischool.com/blog/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Masai School Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.masaischool.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Masai School Website and Product Pages
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/masaischool"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Masai School on X
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/school/masai-school/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Masai School on LinkedIn
                    </a>
                  </li>
                </ul>`;

const replacement = `                <h3 className="font-serif font-semibold text-[22px] md:text-[24px] lg:text-[28px] text-[var(--color-text)] mb-[24px]">
                  At Masai School
                </h3>
                <h4 className="font-sans font-medium text-[16px] lg:text-[18px] text-[var(--color-text)] mb-[16px] ">Brand and Content Platforms</h4>
                <ul className="flex flex-col gap-[16px]">
                  <li>
                    <a
                      href="https://www.masaischool.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Masai School Website
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.masaischool.com/blog/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Masai School Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/masaischool"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Masai School on X
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/school/masai-school/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors"
                    >
                      Masai School on LinkedIn
                    </a>
                  </li>
                </ul>`;

if (content.includes(targetOld)) {
  content = content.replace(targetOld, replacement);
  fs.writeFileSync('src/PublishedPage.tsx', content);
  console.log('Successfully updated Masai School section.');
} else {
  console.error('Target not found!');
}
