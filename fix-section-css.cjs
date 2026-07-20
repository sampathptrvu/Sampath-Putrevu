const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

// Remove .section-standard
css = css.replace(/\.section-standard\s*\{[\s\S]*?\}\s*@media\s*\(min-width:\s*1180px\)\s*\{\s*\.section-standard\s*\{[\s\S]*?\}\s*\}/, '');

// Remove .section-label-container margins
css = css.replace(/\.section-label-container\s*\{\s*margin-bottom:\s*24px;\s*\}\s*@media\s*\(min-width:\s*1180px\)\s*\{\s*\.section-label-container\s*\{\s*margin-bottom:\s*0;\s*\}\s*\}/, '');

// Remove .panel-standard
css = css.replace(/\.panel-standard\s*\{[\s\S]*?\}/, '');

fs.writeFileSync('src/index.css', css);
