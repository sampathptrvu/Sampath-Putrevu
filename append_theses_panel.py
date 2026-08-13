import re

with open('src/index.css', 'r') as f:
    css = f.read()

classes = """
.theses-hero-panel {
  background: rgba(20, 28, 27, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(10px) saturate(102%);
  -webkit-backdrop-filter: blur(10px) saturate(102%);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
  border-radius: 28px;
  padding: 40px 48px;
  width: fit-content;
  max-width: 100%;
}

@media (min-width: 768px) and (max-width: 1199px) {
  .theses-hero-panel {
    padding: 32px 40px;
  }
}

@media (max-width: 767px) {
  .theses-hero-panel {
    padding: 28px 24px;
    border-radius: 24px;
    width: 100%;
  }
}
"""

css += classes

with open('src/index.css', 'w') as f:
    f.write(css)

