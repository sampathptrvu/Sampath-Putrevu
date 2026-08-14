const fs = require('fs');
const content = fs.readFileSync('src/HomePage.tsx', 'utf-8');

const importStatement = `import { ExternalLink, ArrowRight } from 'lucide-react';
import { journalismStories } from './data/journalismData';
`;

// Insert the imports
let newContent = content.replace("import { Mail, ScanSearch, Crop, Send } from 'lucide-react';", "import { Mail, ScanSearch, Crop, Send, ExternalLink, ArrowRight } from 'lucide-react';\nimport { journalismStories } from './data/journalismData';");

const sectionContent = `
        {/* Selected reporting */}
        <section id="selected-reporting" className="home-section scroll-mt-[100px]">
          <div className="section-row">
          <div className="section-label-container">
            <div className="section-label-panel">
              <h2 className="type-section-label">Selected reporting</h2>
              <div className="section-label-rule w-12 h-px mt-4 md:mt-5" style={{ background: "var(--burgundy)" }}></div>
            </div>
          </div>
          
          <FadePanel className={panelClass}>
            <div className="flex flex-col gap-8 md:gap-10">
              <div className="flex flex-col gap-5 text-lg font-normal leading-relaxed text-panel-body max-w-[65ch]">
                <p>
                  Before I worked inside startups, I spent four years reporting on how technical companies were built.
                </p>
                <p>
                  These five pieces, selected from 406 stories published under my YourStory byline and more than 350 interviews with founders, technologists, operators and investors, are closest to the work I do now: finding the idea beneath the product and giving it a form other people can understand.
                </p>
              </div>

              <div className="flex flex-col min-[900px]:grid min-[900px]:grid-cols-3 gap-0 min-[900px]:gap-8">
                {journalismStories.filter(s => ['postman', 'hubspot', 'google-maps-india'].includes(s.slug)).map((story, idx, arr) => (
                  <div key={story.slug} className={\`flex flex-col pb-8 min-[900px]:pb-0 \${idx !== arr.length - 1 ? 'border-b border-divider-light mb-8 min-[900px]:mb-0 min-[900px]:border-b-0 min-[900px]:border-r min-[900px]:pr-8' : ''} group hover:-translate-y-1 transition-transform duration-300 ease-out\`}>
                    <span className="type-label-small mb-4 block">{story.label}</span>
                    <h3 className="type-card-heading-1 mb-3">{story.headline}</h3>
                    <p className="work-body mb-4">{story.description}</p>
                    <p className="type-body-muted mb-6 text-sm flex-grow">{story.metadata}</p>
                    <div className="flex flex-col items-start gap-4 mt-auto">
                      <Link to={\`/journalism/\${story.slug}\`} className="type-button-ghost inline-flex items-center text-burgundy font-medium hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-burgundy rounded-sm">
                        View story <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                      <a href={story.originalUrl} target="_blank" rel="noopener noreferrer" className="type-button-ghost inline-flex items-center text-panel-muted font-medium hover:text-burgundy transition-colors focus:outline-none focus:ring-2 focus:ring-burgundy rounded-sm text-left">
                        Read the original article <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link to="/journalism" className="inline-flex items-center text-[17px] font-semibold text-burgundy hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-burgundy focus:ring-offset-2 focus:ring-offset-ink rounded-[2px]">
                  View all five selected stories <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </FadePanel>
          </div>
        </section>
`;

newContent = newContent.replace('        {/* Best Fit */}', sectionContent + '\n        {/* Best Fit */}');

fs.writeFileSync('src/HomePage.tsx', newContent);
console.log('Homepage patched.');
