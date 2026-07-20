const fs = require('fs');
let content = fs.readFileSync('src/HomePage.tsx', 'utf8');

content = content.replace(
  /<\/div>\s*<\/motion\.div>\s*<\/div>\s*<\/section>/,
  `                </div>\n              </div>\n            </motion.div>\n        </section>`
);

fs.writeFileSync('src/HomePage.tsx', content);
