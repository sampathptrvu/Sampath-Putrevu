const fs = require('fs');
let content = fs.readFileSync('src/WorkPage.tsx', 'utf-8');

const targetString = `<div className="work-entry">
              <h3 className="type-card-heading-1 mb-3">Turned a fund’s private conviction into public reference material.</h3>
              <p className="type-card-heading-3 mt-4"><a href="https://www.accel.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Accel</a> &middot; Marketing Consultant - Brand and Content</p>
              <p className="work-body mt-4">
                Built SeedToScale.com with the team from the ground up and produced 100+ editorial assets across foundational long-form resources, founder frameworks and podcasts. The job was turning the tacit knowledge of founders and investors into frameworks the ecosystem could actually use. Kunal Shah’s Delta 4 theory is the clearest example: the conviction was his, and the work here named it, structured it, and published it in a form founders still cite. The same work later extended to editorial and thought leadership for Prime Venture Partners, BoldCap and Anthill Ventures.
              </p>
            </div>`;

const newBlock = `<div className="work-entry">
              <h3 className="type-card-heading-1 mb-3">Turned a fund’s private conviction into public reference material.</h3>
              <p className="type-card-heading-3 mt-4"><a href="https://www.accel.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Accel</a> &middot; Marketing Consultant – Brand and Content</p>
              <p className="work-body mt-4">
                Helped build SeedToScale from the ground up: website design, brand language, CMS and publishing infrastructure, followed by the writing and production of about 100 long-form resources, founder frameworks and podcasts.
              </p>
              <p className="work-body mt-4">
                The work translated knowledge held by experienced founders, operators and investors into material the wider startup ecosystem could understand and use.
              </p>

              <div className="mt-8 pt-8 border-t border-divider-light">
                <span className="type-label-small mb-[24px] block !text-burgundy">SEEDTOSCALE &middot; SELECTED WORK</span>
                
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col">
                    <span className="type-card-heading-3 mb-2 font-medium">FIRST 500 DAYS</span>
                    <p className="work-body text-[15px] mb-3">Developed and produced a founder-storytelling franchise reconstructing the formative years before successful companies became obvious successes.</p>
                    <p className="work-body text-[15px] !text-burgundy leading-loose">
                      <a href="https://www.seedtoscale.com/podcast/untold-seed-stories-first-500-days-of-freshworks" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Freshworks</a> &middot; <a href="https://www.seedtoscale.com/podcast/untold-seed-stories-first-500-days-of-swiggy" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Swiggy</a> &middot; <a href="https://www.seedtoscale.com/podcast/untold-seed-stories-first-500-days-of-urban-company" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Urban Company</a> &middot; <a href="https://www.seedtoscale.com/podcast/untold-seed-stories-first-500-days-of-ninjacart" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Ninjacart</a> &middot; <a href="https://www.seedtoscale.com/video/the-first-500-days-of-building-ixigo-through-its-many-pivots" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">ixigo</a>
                    </p>
                  </div>

                  <div className="flex flex-col pt-6 border-t border-divider-light">
                    <span className="type-card-heading-3 mb-2 font-medium">MARKET AND OPERATING INTELLIGENCE</span>
                    <p className="work-body text-[15px] mb-3">Produced thesis-led research and practical operating material for founders navigating emerging markets and company scale.</p>
                    <p className="work-body text-[15px] !text-burgundy leading-loose">
                      <a href="https://www.seedtoscale.com/podcast-series/future-x" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Future X</a> &middot; <a href="https://www.seedtoscale.com/podcast-series/the-scale-playbook" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">The Scale Playbook</a>
                    </p>
                  </div>

                  <div className="flex flex-col pt-6 border-t border-divider-light">
                    <span className="type-card-heading-3 mb-2 font-medium">FOUNDER PROGRAMMES AND PORTFOLIO STORYTELLING</span>
                    <p className="work-body text-[15px] mb-3">Extended the same editorial system across early-stage founder education and portfolio-company narratives.</p>
                    <p className="work-body text-[15px] !text-burgundy leading-loose">
                      <a href="https://atoms.accel.com/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">Accel Atoms</a> &middot; <a href="https://www.seedtoscale.com/blog/deep-dive-into-founder-stack-for-saas" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-warm-white focus:ring-offset-2 focus:ring-offset-ink rounded-[2px] transition-colors">FounderStack</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>`;

if (content.includes(targetString)) {
  content = content.replace(targetString, newBlock);
  fs.writeFileSync('src/WorkPage.tsx', content);
  console.log('Successfully patched WorkPage.tsx');
} else {
  console.log('Failed to find target string. Proceeding to find via indexOf to be safe.');
  const index = content.indexOf('<h3 className="type-card-heading-1 mb-3">Turned a fund’s private conviction into public reference material.</h3>');
  if (index !== -1) {
    const start = content.lastIndexOf('<div className="work-entry">', index);
    const end = content.indexOf('</div>', index) + 6;
    if (start !== -1 && end !== -1) {
        content = content.slice(0, start) + newBlock + content.slice(end);
        fs.writeFileSync('src/WorkPage.tsx', content);
        console.log('Successfully patched WorkPage.tsx via fallback mechanism');
    }
  }
}
