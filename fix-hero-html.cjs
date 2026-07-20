const fs = require('fs');

let content = fs.readFileSync('src/HomePage.tsx', 'utf8');

// Replace the wrapper
content = content.replace(
  /<div className="w-full relative z-10 text-center flex flex-col items-center justify-center">\s*<motion\.div\s*initial=\{\{ opacity: 0, y: 15 \}\}\s*animate=\{\{ opacity: 1, y: 0 \}\}\s*transition=\{\{ duration: 0\.8, ease: \[0\.16, 1, 0\.3, 1\] \}\}\s*className="w-full"\s*>/g,
  `<motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
              style={{ gridArea: '1 / 1' }}
            >`
);

content = content.replace(
  /<\/div>\s*<\/motion\.div>/g,
  `</motion.div>`
);

fs.writeFileSync('src/HomePage.tsx', content);
