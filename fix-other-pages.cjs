const fs = require('fs');

const files = ['src/WorkPage.tsx', 'src/EssaysPage.tsx', 'src/EssayPage.tsx'];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/<div className="fixed inset-0 z-\[-1\] pointer-events-none bg-\[#090e0b\]\/\[[0-9.]+\]"><\/div>/g, '');
  fs.writeFileSync(file, content);
}
