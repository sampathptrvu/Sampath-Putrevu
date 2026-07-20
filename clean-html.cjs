const fs = require('fs');

let content = fs.readFileSync('src/HomePage.tsx', 'utf8');

content = content.replace(
  /<motion\.div\s*initial=\{\{ opacity: 0, y: 15 \}\}\s*animate=\{\{ opacity: 1, y: 0 \}\}\s*transition=\{\{ duration: 0\.8, ease: \[0\.16, 1, 0\.3, 1\] \}\}\s*className="relative z-10"\s*style=\{\{ gridArea: '1 \/ 1' \}\}\s*>\s*<div className="hero-copy-panel">/,
  `<motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="hero-copy-panel z-10"
            >`
);

content = content.replace(
  /<\/div>\s*<\/div>\s*<\/motion\.div>\s*<\/section>/,
  `                </div>\n            </motion.div>\n        </section>`
);

fs.writeFileSync('src/HomePage.tsx', content);
