const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');

// Replace .site-header-inner
css = css.replace(/\.site-header-inner\s*\{[\s\S]*?\}/, `.site-header-inner {
  width: 100%;
  max-width: none;
  margin: 0;
  padding-top: 24px;
  padding-bottom: 20px;
  padding-inline: 48px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media (max-width: 1199px) {
  .site-header-inner {
    padding-inline: 32px;
  }
}

@media (max-width: 767px) {
  .site-header-inner {
    padding-inline: 20px;
  }
}`);

fs.writeFileSync('src/index.css', css);
