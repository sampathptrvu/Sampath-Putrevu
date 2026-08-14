const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// Replace Trust Bar
code = code.replace(
  /<motion\.div\s*\n\s*initial=\{\{ opacity: 0 \}\}\n\s*animate=\{\{ opacity: 1 \}\}\n\s*transition=\{\{ duration: 1, delay: 0\.3 \}\}\n\s*className="[^"]*bg-box-bg\/95[^"]*"/,
  match => match.replace('<motion.div', '<ScrollPanel')
);
// replace closing tag for Trust bar
code = code.replace(/<\/div>\n\s*<\/motion\.div>\n\s*<\/section>\n\s*\{\/\* Context \/ Diagnosis \*\/\}/, match => match.replace('</motion.div>', '</ScrollPanel>'));

// Replace Context / Diagnosis
code = code.replace(
  /<motion\.div\s*\n\s*initial=\{\{ opacity: 0, y: 15 \}\}\n\s*whileInView=\{\{ opacity: 1, y: 0 \}\}\n\s*viewport=\{\{ once: true, margin: "-100px" \}\}\n\s*transition=\{\{ duration: 0\.6 \}\}\n\s*className="[^"]*bg-box-bg\/95[^"]*"/,
  match => match.replace('<motion.div', '<ScrollPanel')
);
code = code.replace(/<\/div>\n\s*<\/motion\.div>\n\s*<\/section>\n\s*\{\/\* What I Do \(Expertise\) \*\/\}/, match => match.replace('</motion.div>', '</ScrollPanel>'));

// Replace How I help
code = code.replace(
  /<motion\.div \n\s*className="[^"]*bg-box-bg\/95[^"]*"\n\s*initial="hidden"\n\s*whileInView="visible"/,
  match => match.replace('<motion.div', '<ScrollPanel')
);
code = code.replace(/<\/div>\n\s*<\/motion\.div>\n\s*<\/div>\n\s*<\/section>\n\s*\{\/\* Who I Am/, match => match.replace('</motion.div>', '</ScrollPanel>'));

// Replace simple divs
code = code.replace(/<div( className="[^"]*bg-box-bg\/95[^"]*")>/g, '<ScrollPanel$1>');
// Close tags for the simple divs...
// This is risky, let's just do targeted replaces for the remaining ones.

fs.writeFileSync('src/App.tsx', code);
console.log("Updated tags partly");
