const fs = require('fs');

let content = fs.readFileSync('src/HomePage.tsx', 'utf8');

// The closing tags are currently:
//                 </div>
//               </motion.div>
//           </div>
//         </section>

content = content.replace(
  /<\/div>\s*<\/motion\.div>\s*<\/div>\s*<\/section>/,
  `                </div>\n              </motion.div>\n        </section>`
);

content = content.replace(
  /<\/div>\s*<\/motion\.div>\s*<\/section>/,
  `                </div>\n              </motion.div>\n        </section>`
);

content = content.replace(
  /<\/div>\s*<\/motion\.div>\s*<\/div>/,
  `                </div>\n              </motion.div>\n          </div>`
);

// Actually, wait, let's just look at the exact lines
let lines = content.split('\n');
// We need to make sure the hero-copy-panel div is closed properly.
// Let's just fix the whole block.
