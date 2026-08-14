const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

const depsToRemove = [
    '@google/genai',
    'better-sqlite3',
    'date-fns',
    'dotenv',
    'express',
    'gray-matter',
    'react-markdown',
    'remark-gfm',
    'vite'
];

for (const dep of depsToRemove) {
    if (pkg.dependencies && pkg.dependencies[dep]) {
        delete pkg.dependencies[dep];
    }
}

const devDepsToRemove = [
    '@types/express',
    'tsx'
];

for (const dep of devDepsToRemove) {
    if (pkg.devDependencies && pkg.devDependencies[dep]) {
        delete pkg.devDependencies[dep];
    }
}

fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n');
