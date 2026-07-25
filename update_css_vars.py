import re

with open('src/index.css', 'r') as f:
    css = f.read()

tokens = """
  /* Typography Tokens */
  --type-display-font: "DM Serif Display", Georgia, serif;
  --type-sans-font: "Plus Jakarta Sans", Arial, sans-serif;
  
  --type-hero-eyebrow-size: 23px;
  --type-hero-h1-size: 34px;
  --type-hero-desc-size: 17px;
  
  --type-section-label-size: 28px;
  
  /* Primary H3 like "One narrative. The full range." */
  --type-h3-size-mobile: 24px;
  --type-h3-size-desktop: 28px;
  
  /* H3 Burgandy like "Who should hire me?" */
  --type-h3-alt-size-mobile: 24px;
  --type-h3-alt-size-desktop: 30px;
  
  /* Card Heading like "Extract", "Frame" */
  --type-card-h3-size: 20px;
  
  /* Card Subheading like "Brand and founder positioning" */
  --type-card-h4-size-mobile: 18px;
  --type-card-h4-size-desktop: 20px;
  
  /* Fit criteria heading */
  --type-fit-h4-size-mobile: 20px;
  --type-fit-h4-size-desktop: 22px;
  
  --type-body-size-mobile: 16px;
  --type-body-size-desktop: 17px;
  
  /* CTA */
  --type-cta-h2-size: 25px;
  --type-cta-p-size: 16px;
  --type-btn-size: 15px;
"""

# inject tokens into :root where --panel-radius is
css = re.sub(r'(--panel-radius: 24px;)', r'\1\n' + tokens, css)

with open('src/index.css', 'w') as f:
    f.write(css)
