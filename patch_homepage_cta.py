with open('src/HomePage.tsx', 'r') as f:
    content = f.read()

content = content.replace('<h2 className="type-cta-heading mb-4 tracking-[-0.015em]">The story is the strategy.</h2>\n          ', '')

with open('src/HomePage.tsx', 'w') as f:
    f.write(content)
