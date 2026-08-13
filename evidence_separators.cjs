const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

// Replace .evidence-item to add borders
const newStyles = `
/* Vertical separators logic */
.evidence-item {
  display: flex;
  flex-direction: column;
  position: relative;
}

@media (min-width: 768px) {
  .evidence-item:not(:last-child)::after {
    content: '';
    position: absolute;
    right: -16px;
    top: 0;
    bottom: 0;
    width: 1px;
    background: var(--divider-light);
  }
}

@media (min-width: 768px) and (max-width: 1199px) {
  /* In 2x2 grid, only odd items get right border, and top row gets bottom border */
  .evidence-item:not(:last-child)::after {
    display: none;
  }
  .evidence-item:nth-child(odd)::after {
    content: '';
    position: absolute;
    right: -12px;
    top: 0;
    bottom: 0;
    width: 1px;
    background: var(--divider-light);
    display: block;
  }
  .evidence-item:nth-child(1),
  .evidence-item:nth-child(2) {
    padding-bottom: 24px;
    border-bottom: 1px solid var(--divider-light);
  }
}

@media (min-width: 1200px) {
  .evidence-item:not(:last-child)::after {
    right: -16px;
  }
}
`;

css += '\n' + newStyles;
fs.writeFileSync('src/index.css', css);
