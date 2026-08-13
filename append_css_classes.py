import re

with open('src/index.css', 'r') as f:
    css = f.read()

classes = """
  /* Site-wide Typography Classes from HomePage Source of Truth */
  
  .type-hero-eyebrow {
    font-family: var(--type-sans-font);
    font-size: var(--type-hero-eyebrow-size);
    font-weight: bold;
    line-height: 1.3;
    color: var(--color-warm-white);
    display: block;
  }

  .type-hero-headline {
    font-family: var(--type-sans-font);
    font-size: var(--type-hero-h1-size);
    font-weight: normal;
    line-height: 1.08;
    letter-spacing: -0.025em;
    color: var(--color-warm-white);
  }

  .type-hero-description {
    font-family: var(--type-sans-font);
    font-size: var(--type-hero-desc-size);
    font-weight: normal;
    line-height: 1.5;
    font-style: italic;
    color: var(--color-warm-white);
  }

  .type-section-label {
    font-family: var(--type-display-font);
    font-size: var(--type-section-label-size);
    font-weight: 400;
    line-height: 1.05;
    color: var(--color-panel-heading);
  }

  .type-section-heading {
    font-family: var(--type-display-font);
    font-size: var(--type-h3-size-mobile);
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: -0.01em;
    color: var(--color-panel-heading);
  }
  @media (min-width: 768px) {
    .type-section-heading {
      font-size: var(--type-h3-size-desktop);
    }
  }

  .type-section-heading-burgundy {
    font-family: var(--type-display-font);
    font-size: var(--type-h3-alt-size-mobile);
    font-weight: 400;
    line-height: 1.05;
    letter-spacing: -0.015em;
    color: var(--color-burgundy);
  }
  @media (min-width: 768px) {
    .type-section-heading-burgundy {
      font-size: var(--type-h3-alt-size-desktop);
    }
  }

  .type-card-heading-1 {
    font-family: var(--type-sans-font);
    font-size: var(--type-card-h3-size);
    font-weight: bold;
    line-height: 1.2;
    color: var(--color-burgundy);
  }

  .type-card-heading-2 {
    font-family: var(--type-sans-font);
    font-size: var(--type-card-h4-size-mobile);
    font-weight: bold;
    line-height: 1.375; /* leading-snug */
    color: var(--color-burgundy);
  }
  @media (min-width: 768px) {
    .type-card-heading-2 {
      font-size: var(--type-card-h4-size-desktop);
    }
  }
  
  .type-card-heading-3 {
    font-family: var(--type-sans-font);
    font-size: var(--type-fit-h4-size-mobile);
    font-weight: bold;
    line-height: 1.375;
    color: var(--color-burgundy);
  }
  @media (min-width: 768px) {
    .type-card-heading-3 {
      font-size: var(--type-fit-h4-size-desktop);
    }
  }

  .type-body {
    font-family: var(--type-sans-font);
    font-size: var(--type-body-size-mobile);
    font-weight: 500;
    line-height: 1.625;
    color: var(--color-panel-heading);
  }
  @media (min-width: 768px) {
    .type-body {
      font-size: var(--type-body-size-desktop);
    }
  }

  .type-body-muted {
    font-family: var(--type-sans-font);
    font-size: var(--type-body-size-mobile);
    font-weight: 400;
    line-height: 1.625;
    color: var(--color-panel-body);
  }
  @media (min-width: 768px) {
    .type-body-muted {
      font-size: var(--type-body-size-desktop);
    }
  }
  
  .type-body-bold {
    font-family: var(--type-sans-font);
    font-size: var(--type-body-size-mobile);
    font-weight: bold;
    line-height: 1.625;
    color: var(--color-panel-heading);
  }
  @media (min-width: 768px) {
    .type-body-bold {
      font-size: var(--type-body-size-desktop);
    }
  }

  .type-cta-heading {
    font-family: var(--type-sans-font);
    font-size: var(--type-cta-h2-size);
    font-weight: bold;
    line-height: 1.04;
    color: var(--color-warm-white);
  }

  .type-cta-body {
    font-family: var(--type-sans-font);
    font-size: var(--type-cta-p-size);
    font-weight: 500;
    line-height: 1.5;
    color: var(--color-text-on-dark);
  }

  .type-button {
    font-family: var(--type-sans-font);
    font-size: var(--type-btn-size);
    font-weight: bold;
  }
  
  .type-label-small {
    font-family: var(--type-sans-font);
    font-size: 14px;
    font-weight: bold;
    color: var(--color-panel-muted);
  }
"""

css = css.replace('@layer components {', '@layer components {\n' + classes)

with open('src/index.css', 'w') as f:
    f.write(css)

classes = """
  .type-nav {
    font-family: var(--type-sans-font);
    font-size: 15px;
    font-weight: bold;
  }
  @media (max-width: 1024px) {
    .type-nav {
      font-size: 14px;
    }
  }
  @media (min-width: 1024px) {
    .type-nav {
      font-size: 15px;
    }
  }
"""

with open('src/index.css', 'r') as f:
    css = f.read()
    
css = css.replace('  .type-button {', classes + '\n  .type-button {')

with open('src/index.css', 'w') as f:
    f.write(css)

