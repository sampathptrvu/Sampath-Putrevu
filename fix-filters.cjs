const fs = require('fs');

const files = ['src/WorkPage.tsx', 'src/EssaysPage.tsx', 'src/EssayPage.tsx'];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/<img\s+src="https:\/\/res\.cloudinary\.com/g, '<img style={{ filter: "brightness(1.12) contrast(1.03) saturate(0.96) hue-rotate(3deg)" }} src="https://res.cloudinary.com');
  fs.writeFileSync(file, content);
}
