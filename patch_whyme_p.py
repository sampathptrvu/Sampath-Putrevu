import re

with open('src/HomePage.tsx', 'r') as f:
    content = f.read()

old_p = """                <div className="flex flex-col gap-5 text-lg font-normal leading-relaxed text-panel-body w-full max-w-[58ch] min-w-0">
                  <p>
                    Many technical companies do not have a marketing problem. They have a language problem.
                  </p>"""

new_p = """                <div className="flex flex-col gap-5 text-lg font-normal leading-relaxed text-panel-body w-full max-w-[58ch] min-w-0">
                  <p className="font-bold text-left text-[24px] italic">
                    Many technical companies do not have a marketing problem. They have a language problem.
                  </p>"""

if old_p in content:
    content = content.replace(old_p, new_p)
    with open('src/HomePage.tsx', 'w') as f:
        f.write(content)
    print("Patched first p in Why me")
else:
    print("Could not find the target string")

