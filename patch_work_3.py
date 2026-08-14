import re

with open('src/WorkPage.tsx', 'r') as f:
    content = f.read()

# We replace all instances of `<p className="work-body">` with `<p className="work-body mt-4">`
content = content.replace('<p className="work-body">', '<p className="work-body mt-4">')

with open('src/WorkPage.tsx', 'w') as f:
    f.write(content)
print("Updated work-body margins")
