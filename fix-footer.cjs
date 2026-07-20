const fs = require('fs');

const footerHtml = `
      </main>

      {/* Final CTA */}
      <section className="footer-cta">
        <div className="footer-cta-inner">
          <h2 className="font-display font-normal text-[36px] mb-6 text-warm-white leading-[1.05] tracking-[-0.015em]">The story is the strategy.</h2>
          <p className="text-[20px] text-text-on-dark font-medium mb-16">If your product is ahead of its language, that's where we start.</p>
          <div className="flex justify-center items-center">
            <a 
              href="https://cal.com/sampath-putrevu-z6jq0i"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-burgundy text-warm-white rounded-[4px] text-sm font-bold hover:-translate-y-[1px] hover:bg-burgundy-dark transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent cursor-pointer"
            >
              Book a call
            </a>
          </div>
          
          <div className="flex justify-center items-center gap-8 mt-16">
            <a 
              href="https://www.linkedin.com/in/sampathputrevu/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-warm-white/60 hover:text-warm-white transition-colors flex items-center p-3 -m-3"
              aria-label="LinkedIn"
            >
              <div 
                className="w-[18px] h-[18px] bg-current" 
                style={{
                  maskImage: \`url(\${linkedinIcon})\`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskImage: \`url(\${linkedinIcon})\`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center'
                }}
              />
            </a>
            <a 
              href="mailto:sampathptrvu@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-warm-white/60 hover:text-warm-white transition-colors flex items-center p-3 -m-3"
              aria-label="Email"
            >
              <Mail className="w-[18px] h-[18px]" />
            </a>
          </div>
        </div>
      </section>
`;

['src/HomePage.tsx', 'src/WorkPage.tsx'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Match from {/* Final CTA */} to </main> and replace
  // In HomePage.tsx, it's inside <main>...
  
  content = content.replace(/\{\/\*\s*Final CTA\s*\*\/\}[\s\S]*?<\/main>/, footerHtml);
  fs.writeFileSync(file, content);
});
