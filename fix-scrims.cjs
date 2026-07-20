const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');

// Remove .problem-label::before completely
css = css.replace(/\.problem-label::before\s*\{[\s\S]*?\}/g, '');

// Remove .past-work-intro::before and .past-work-intro text-shadow completely
css = css.replace(/\.past-work-intro::before\s*\{[\s\S]*?\}/g, '');
css = css.replace(/\.past-work-intro h1,\s*\.past-work-intro h2\s*\{[\s\S]*?\}/g, '');
css = css.replace(/\.past-work-intro p,\s*\.past-work-intro a,\s*\.past-work-intro \.eyebrow\s*\{[\s\S]*?\}/g, '');

fs.writeFileSync('src/index.css', css);
