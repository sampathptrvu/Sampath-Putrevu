const fs = require('fs');

let contactContent = fs.readFileSync('src/ContactPage.tsx', 'utf8');
let helpContent = fs.readFileSync('src/HowIHelpPage.tsx', 'utf8');

// Extract section id="fit" from ContactPage
const fitStartIdx = contactContent.indexOf('<section id="fit"');
const finalCtaIdx = contactContent.indexOf('{/* Final CTA */}');

if (fitStartIdx !== -1 && finalCtaIdx !== -1) {
  const fitSection = contactContent.substring(fitStartIdx, finalCtaIdx);
  
  // Remove fitSection from ContactPage
  contactContent = contactContent.replace(fitSection, '');
  
  // Insert fitSection into HowIHelpPage before Final CTA
  const helpCtaIdx = helpContent.indexOf('{/* Final CTA */}');
  if (helpCtaIdx !== -1) {
    helpContent = helpContent.substring(0, helpCtaIdx) + fitSection + helpContent.substring(helpCtaIdx);
    
    fs.writeFileSync('src/ContactPage.tsx', contactContent);
    fs.writeFileSync('src/HowIHelpPage.tsx', helpContent);
    console.log("Moved fit section successfully.");
  } else {
    console.log("Could not find Final CTA in HowIHelpPage");
  }
} else {
  console.log("Could not find fit section or Final CTA in ContactPage");
}
