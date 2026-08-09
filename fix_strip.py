import re
with open('src/WorkPage.tsx', 'r') as f:
    content = f.read()

match = re.search(r'(<section className="work-list-panel">)(.*?)(<div className="work-entry">)', content, re.DOTALL)
if match:
    new_text = match.group(1) + """
            <p className="font-sans text-[14px] md:text-[15px] font-medium text-burgundy mb-10 md:whitespace-nowrap text-center text-balance leading-relaxed">
              $2.5M closed-won influenced · 9-person team built and led · 350+ founders and investors interviewed · 6 venture-backed startups · 4 venture capital firms
            </p>
            
            """ + match.group(3)
    content = content[:match.start()] + new_text + content[match.end():]
    with open('src/WorkPage.tsx', 'w') as f:
        f.write(content)
    print("Success")
else:
    print("Not found")
