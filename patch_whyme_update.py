import re

with open('src/HomePage.tsx', 'r') as f:
    content = f.read()

# Replace hiring, fundraising. -> hiring and fundraising.
content = content.replace("hiring, fundraising.", "hiring and fundraising.")
# Removing the weird focus mode classes as it says replace the entire section. But I'll just use the default class since it's "copy" replacement.
# Wait, "Preserve the existing visual design" -> I will just replace the text inside the p tags.
# Actually I will just replace the first paragraph classes to be safe, because those classes were from focus-mode test.
# "CSS selector 1: ... p:nth-of-type(1)"
content = content.replace('<p className="font-bold text-left text-[24px] italic leading-[44px]">', '<p>')

with open('src/HomePage.tsx', 'w') as f:
    f.write(content)
print("Updated Why me section copy.")
