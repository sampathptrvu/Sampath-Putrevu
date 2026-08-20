const fs = require('fs');

const updateFile = (filePath, isCentered) => {
  let content = fs.readFileSync(filePath, 'utf8');

  // Add imports if not present
  if (!content.includes('import { Mail }')) {
    content = content.replace("import Header from './Header';", "import Header from './Header';\nimport { Mail } from 'lucide-react';\nimport linkedinIcon from './linkedin-icon.png';");
  }

  // Find CTA button
  const ctaSearch = /<a\s+href="https:\/\/cal\.com\/sampath-putrevu-z6jq0i"[\s\S]*?<\/a>/;
  const match = content.match(ctaSearch);
  
  if (match) {
    const ctaButton = match[0];
    let newCtaBlock = '';
    
    if (isCentered) {
      newCtaBlock = `<div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/in/sampathputrevu/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-text)] focus:ring-offset-2 focus:ring-offset-[var(--color-page)]" aria-label="LinkedIn">
                <div className="w-[28px] h-[28px] bg-current shrink-0" style={{ maskImage: \`url(\${linkedinIcon})\`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskImage: \`url(\${linkedinIcon})\`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center' }} />
              </a>
              <a href="mailto:sampathptrvu@gmail.com" className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-text)] focus:ring-offset-2 focus:ring-offset-[var(--color-page)]" aria-label="Email">
                <Mail className="w-[28px] h-[28px] shrink-0" />
              </a>
            </div>
            ${ctaButton.replace(/^/gm, '            ').trim()}
          </div>`;
    } else {
      newCtaBlock = `<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                ${ctaButton.replace(/^/gm, '                ').trim()}
                <div className="flex items-center gap-6">
                  <a href="https://www.linkedin.com/in/sampathputrevu/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-text)] focus:ring-offset-2 focus:ring-offset-[var(--color-page)]" aria-label="LinkedIn">
                    <div className="w-[24px] h-[24px] bg-current shrink-0" style={{ maskImage: \`url(\${linkedinIcon})\`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskImage: \`url(\${linkedinIcon})\`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center' }} />
                  </a>
                  <a href="mailto:sampathptrvu@gmail.com" className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-text)] focus:ring-offset-2 focus:ring-offset-[var(--color-page)]" aria-label="Email">
                    <Mail className="w-[24px] h-[24px] shrink-0" />
                  </a>
                </div>
              </div>`;
    }
    content = content.replace(ctaSearch, newCtaBlock);
    fs.writeFileSync(filePath, content);
  }
}

updateFile('src/HowIHelpPage.tsx', true);
updateFile('src/BestFitPage.tsx', true);
updateFile('src/WorkPage.tsx', false);

console.log("Footers updated.");
