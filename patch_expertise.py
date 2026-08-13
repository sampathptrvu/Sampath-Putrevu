import re

with open('src/HomePage.tsx', 'r') as f:
    content = f.read()

# We need to replace:
# className="type-body mb-4" with className="type-body mb-4 !font-normal"
# className="type-body space-y-1 list-disc pl-4" with className="type-body space-y-1 list-disc pl-4 !font-normal"

content = content.replace('className="type-body mb-4"', 'className="type-body mb-4 !font-normal"')
content = content.replace('className="type-body space-y-1 list-disc pl-4"', 'className="type-body space-y-1 list-disc pl-4 !font-normal"')

with open('src/HomePage.tsx', 'w') as f:
    f.write(content)

print("Patched HomePage.tsx for focus mode")
