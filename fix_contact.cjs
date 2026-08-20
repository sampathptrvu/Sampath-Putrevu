const fs = require('fs');
let content = fs.readFileSync('src/ContactPage.tsx', 'utf8');

// Find the dangling block
const badStr = `    if (location.hash === '#fit') {
      const el = document.getElementById('fit');
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location]);`;

content = content.replace(badStr, '');
fs.writeFileSync('src/ContactPage.tsx', content);
