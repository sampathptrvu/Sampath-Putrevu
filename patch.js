import fs from 'fs';
let css = fs.readFileSync('src/index.css', 'utf8');

// Define new tokens
css = css.replace('--ink: #101410;', '--ink: #101410;\n  --navy: #0D1B2E;\n  --cream: #FBF8F3;\n  --gold: #C9933A;');
css = css.replace('--color-ink: var(--ink);', '--color-ink: var(--ink);\n  --color-navy: var(--navy);\n  --color-cream: var(--cream);\n  --color-gold: var(--gold);');

// Change body background and text
css = css.replace('background-color: #101410;', 'background-color: var(--cream);');
css = css.replace('color: var(--text-on-dark);', 'color: var(--navy);');

// Change panel text to navy instead of burgundy
css = css.replace('--panel-heading: #4f1719;', '--panel-heading: var(--navy);');
css = css.replace('--panel-body: rgba(79, 23, 25, 0.80);', '--panel-body: rgba(13, 27, 46, 0.80);');
css = css.replace('--panel-muted: rgba(79, 23, 25, 0.62);', '--panel-muted: rgba(13, 27, 46, 0.62);');

// Cards and panels distinct from cream base
css = css.replace('background: #f1ede3;', 'background: #FFFFFF;\n  border: 1px solid rgba(13, 27, 46, 0.1);\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.04);');

// Section labels distinct from cream base
css = css.replace('background: var(--parchment);', 'background: var(--navy);');
// Replace color: var(--panel-heading) in section-label-panel
css = css.replace('.section-label-panel {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: fit-content;\n  min-width: 180px;\n  padding: 24px 28px;\n  background: var(--navy);\n  color: var(--panel-heading);', '.section-label-panel {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: fit-content;\n  min-width: 180px;\n  padding: 24px 28px;\n  background: var(--navy);\n  color: var(--cream);\n  box-shadow: 0 4px 15px rgba(13, 27, 46, 0.15);');

// Change footer CTA
css = css.replace('background: rgba(28, 38, 37, 0.72);', 'background: var(--navy);');

// Remove .site-background-image and media queries referencing it
css = css.replace(/\.site-background-image\s*\{[^\}]*\}/g, '');
css = css.replace(/@media\s*\([^\)]+\)\s*\{\s*\.site-background-image\s*\{[^\}]*\}\s*\}/g, '');

fs.writeFileSync('src/index.css', css);
