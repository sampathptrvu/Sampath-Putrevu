import re

with open('src/HomePage.tsx', 'r') as f:
    content = f.read()

old_p = """<p className="font-bold text-left text-[24px] italic">"""
new_p = """<p className="font-bold text-left text-[24px] italic leading-[44px]">"""

if old_p in content:
    content = content.replace(old_p, new_p)
    with open('src/HomePage.tsx', 'w') as f:
        f.write(content)
    print("Patched line-height")
else:
    print("Not found")

