import re

with open('src/index.css', 'r') as f:
    content = f.read()

# Pattern for .footer-cta p block
pattern = r'\.footer-cta p\s*\{[^}]*\}'
content = re.sub(pattern, '', content)

with open('src/index.css', 'w') as f:
    f.write(content)
print("Removed .footer-cta p block")
