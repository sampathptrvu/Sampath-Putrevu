import re

with open('src/ByTheNumbersSection.tsx', 'r') as f:
    content = f.read()

old_text = "Three roles. One operating system."
new_text = "3 roles. 1 operating system."

if old_text in content:
    content = content.replace(old_text, new_text)
    with open('src/ByTheNumbersSection.tsx', 'w') as f:
        f.write(content)
    print("Patched heading successfully.")
else:
    print("Could not find the target text.")
