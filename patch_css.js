const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf-8');

const newCSS = `

/* PASS 2 TYPOGRAPHY */
.type-h2-statement {
  font-family: var(--font-serif);
  font-weight: 600;
  font-size: 28px;
  line-height: 1.12;
  letter-spacing: -0.005em;
  color: var(--color-text);
}
@media (min-width: 768px) { .type-h2-statement { font-size: 34px; } }
@media (min-width: 1024px) { .type-h2-statement { font-size: 42px; } }

.type-step-numeral {
  font-family: var(--font-sans);
  font-weight: 500;
  font-size: 28px;
  color: var(--color-accent);
}

.type-step-title {
  font-family: var(--font-serif);
  font-weight: 600;
  font-size: 20px;
  line-height: 1.3;
  color: var(--color-text);
}

.type-step-body {
  font-family: var(--font-sans);
  font-weight: 400;
  font-size: 17px;
  line-height: 1.6;
  color: var(--color-text);
}

.type-capability-heading {
  font-family: var(--font-serif);
  font-weight: 600;
  font-size: 26px;
  line-height: 1.15;
  letter-spacing: -0.005em;
  color: var(--color-text);
}
@media (min-width: 768px) { .type-capability-heading { font-size: 30px; } }
@media (min-width: 1024px) { .type-capability-heading { font-size: 36px; } }

.type-capability-title {
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 16px;
  color: var(--color-accent);
}
@media (min-width: 1024px) { .type-capability-title { font-size: 17px; } }

.type-capability-body {
  font-family: var(--font-sans);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.65;
  color: var(--color-text);
}
@media (min-width: 1024px) { .type-capability-body { font-size: 17px; } }

.type-fit-column-heading {
  font-family: var(--font-serif);
  font-weight: 600;
  font-size: 28px;
  line-height: 1.2;
  color: var(--color-text);
}

.type-fit-row-headline {
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 16px;
  line-height: 1.4;
  color: var(--color-text);
}

.type-fit-row-body {
  font-family: var(--font-sans);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-text);
}

.type-cta-statement {
  font-family: var(--font-serif);
  font-weight: 600;
  font-size: 22px;
  line-height: 1.3;
  color: var(--color-text);
}
@media (min-width: 768px) { .type-cta-statement { font-size: 24px; } }
@media (min-width: 1024px) { .type-cta-statement { font-size: 28px; } }

.type-cta-button {
  font-family: var(--font-sans);
  font-weight: 500;
  font-size: 14px;
}
`;
fs.writeFileSync('src/index.css', css + newCSS);
