const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');

css += `
.glass-surface {
  background: rgba(20, 28, 27, 0.24);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(10px) saturate(102%);
  -webkit-backdrop-filter: blur(10px) saturate(102%);
  box-shadow:
    0 20px 54px rgba(4, 9, 9, 0.14),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
}

.section-label-glass {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  padding: 16px 20px;
  border-radius: 16px;
}
`;

fs.writeFileSync('src/index.css', css);
