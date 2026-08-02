import re

with open('src/index.css', 'r') as f:
    content = f.read()

pattern = r'\.theses-hero-panel \{[\s\S]*?\}\s*/\* Shared Site Background \*/'
content = re.sub(pattern, '/* Shared Site Background */', content)

with open('src/index.css', 'w') as f:
    f.write(content)
print("Patched index.css")
