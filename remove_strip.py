import re
with open('src/WorkPage.tsx', 'r') as f:
    content = f.read()

pattern = r'\s*<p className="font-sans text-\[14px\] md:text-\[15px\] font-medium text-burgundy mb-10 md:whitespace-nowrap text-center text-balance leading-relaxed">\s*\$2\.5M closed-won influenced · 9-person team built and led · 350\+ founders and investors interviewed · 6 venture-backed startups · 4 venture capital firms\s*</p>'
content = re.sub(pattern, '', content)

with open('src/WorkPage.tsx', 'w') as f:
    f.write(content)
