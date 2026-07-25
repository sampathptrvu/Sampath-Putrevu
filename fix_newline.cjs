const fs = require('fs');

['src/HomePage.tsx', 'src/WorkPage.tsx'].forEach(file => {
  let code = fs.readFileSync(file, 'utf8');
  code = code.replace("import linkedinIcon from './linkedin-icon.png';\\nimport whatsappIcon from './whatsapp-icon.png';", "import linkedinIcon from './linkedin-icon.png';\nimport whatsappIcon from './whatsapp-icon.png';");
  fs.writeFileSync(file, code);
});
