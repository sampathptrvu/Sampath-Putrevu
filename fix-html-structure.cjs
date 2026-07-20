const fs = require('fs');
let content = fs.readFileSync('src/HomePage.tsx', 'utf8');
content = content.replace(
  '            </div>\n            </motion.div>\n          </div>\n          \n          </section>',
  '            </div>\n            </motion.div>\n          </div>\n        </section>'
);
fs.writeFileSync('src/HomePage.tsx', content);
