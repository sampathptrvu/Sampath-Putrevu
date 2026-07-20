const fs = require('fs');

['src/EssaysPage.tsx', 'src/EssayPage.tsx'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(
    'blur-[10px] md:blur-[12px] scale-[1.05] will-change-[transform,filter]',
    ''
  );
  fs.writeFileSync(file, content);
});
