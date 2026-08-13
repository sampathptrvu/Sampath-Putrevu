import re

with open('src/HomePage.tsx', 'r') as f:
    tsx = f.read()

tsx = tsx.replace('text-sm font-bold', 'type-button')

with open('src/HomePage.tsx', 'w') as f:
    f.write(tsx)
