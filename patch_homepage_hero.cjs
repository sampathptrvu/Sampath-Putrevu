const fs = require('fs');
let content = fs.readFileSync('src/HomePage.tsx', 'utf8');

const oldHeroCTA = `          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 mb-[32px] lg:mb-[40px]">
            Work with me &rarr;
            <Link 
              to="/work"
              className="font-['Cabin'] text-[18px] font-medium text-[var(--color-text)] hover:opacity-70 underline underline-offset-[6px] decoration-[1px]"
            >
              View past work
            </Link>
          </div>`;

const newHeroCTA = `          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 mb-[32px] lg:mb-[40px]">
            <Link 
              to="/work"
              className="inline-flex items-center justify-center h-[44px] px-8 font-sans font-medium text-[14px] bg-[var(--color-text)] text-[var(--color-page)] hover:bg-[var(--color-accent)] transition-colors rounded-none focus:outline-none focus:ring-2 focus:ring-[var(--color-text)] focus:ring-offset-2 focus:ring-offset-[var(--color-page)] cursor-pointer"
            >
              View past work
            </Link>
            <a href="/how-i-help#fit" className="font-['Cabin'] text-[18px] font-medium text-[var(--color-text)] hover:opacity-70 transition-opacity">
              Work with me &rarr;
            </a>
          </div>`;

content = content.replace(oldHeroCTA, newHeroCTA);

// Also fix the missing anchor in the header if it exists
content = content.replace(
  `          <Link to="/how-i-help" className="hover:opacity-70 transition-opacity">How I help</Link>\n          Work with me &rarr;\n        </nav>`,
  `          <Link to="/how-i-help" className="hover:opacity-70 transition-opacity">How I help</Link>\n          <a href="/how-i-help#fit" className="hover:opacity-70 transition-opacity">Work with me &rarr;</a>\n        </nav>`
);

fs.writeFileSync('src/HomePage.tsx', content);
