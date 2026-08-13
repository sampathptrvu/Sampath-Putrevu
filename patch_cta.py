import re

with open('src/index.css', 'r') as f:
    content = f.read()

old_val = "--type-cta-p-size: 16px;"
new_val = "--type-cta-p-size: 24px;"

if old_val in content:
    content = content.replace(old_val, new_val)
    with open('src/index.css', 'w') as f:
        f.write(content)
    print("Replaced successfully.")
else:
    print("Not found.")
