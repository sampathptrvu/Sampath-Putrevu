const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');

// Replace the :root block
css = css.replace(/:root\s*\{[^}]*\}/, `:root {
  --page-max-width: 1280px;
  --page-gutter: clamp(24px, 4vw, 64px);
  --section-label-width: clamp(150px, 15vw, 190px);
  --section-column-gap: clamp(28px, 4vw, 52px);
  --section-block-gap: clamp(72px, 9vw, 120px);
  --panel-padding: clamp(32px, 4vw, 52px);
  --panel-radius: 24px;
  --font-display: "DM Serif Display", Georgia, serif;
  --font-sans: "Plus Jakarta Sans", Arial, sans-serif;

  --ink: #101410;
  --deep-forest: #131b16;

  --warm-white: #fffaf2;
  --text-on-dark: rgba(255, 250, 242, 0.90);
  --muted-on-dark: rgba(255, 250, 242, 0.72);

  --parchment: #f7f1e7;
  --panel-heading: #4f1719;
  --panel-body: rgba(79, 23, 25, 0.80);
  --panel-muted: rgba(79, 23, 25, 0.62);

  --burgundy: #7a2428;
  --burgundy-dark: #5c171b;

  --divider-dark: rgba(255, 250, 242, 0.20);
  --divider-light: rgba(79, 23, 25, 0.13);
}`);

// Replace the @theme block
css = css.replace(/@theme\s*\{[^}]*\}/, `@theme {
  --color-ink: var(--ink);
  --color-deep-forest: var(--deep-forest);
  --color-warm-white: var(--warm-white);
  --color-text-on-dark: var(--text-on-dark);
  --color-muted-on-dark: var(--muted-on-dark);
  --color-parchment: var(--parchment);
  --color-panel-heading: var(--panel-heading);
  --color-panel-body: var(--panel-body);
  --color-panel-muted: var(--panel-muted);
  --color-burgundy: var(--burgundy);
  --color-burgundy-dark: var(--burgundy-dark);
  --color-divider-dark: var(--divider-dark);
  --color-divider-light: var(--divider-light);

  --font-sans: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
  --font-display: "DM Serif Display", Georgia, serif;
  --font-serif: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
}`);

// Replace body color
css = css.replace(/color:\s*var\(--color-text-on-glass\);/, 'color: var(--text-on-dark);');

fs.writeFileSync('src/index.css', css);
