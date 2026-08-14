import json

with open('package.json', 'r') as f:
    pkg = json.load(f)

deps_to_remove = [
    '@google/genai',
    'better-sqlite3',
    'date-fns',
    'dotenv',
    'express',
    'gray-matter',
    'react-markdown',
    'remark-gfm',
    'vite'
]

for dep in deps_to_remove:
    if 'dependencies' in pkg and dep in pkg['dependencies']:
        del pkg['dependencies'][dep]

dev_deps_to_remove = [
    '@types/express',
    'tsx'
]

for dep in dev_deps_to_remove:
    if 'devDependencies' in pkg and dep in pkg['devDependencies']:
        del pkg['devDependencies'][dep]

with open('package.json', 'w') as f:
    json.dump(pkg, f, indent=2)
    f.write('\n')
