const fs = require('fs');
fs.mkdirSync('src/lib', { recursive: true });
fs.writeFileSync('src/lib/utils.ts', `import { clsx, type ClassValue } from 'clsx';\nimport { twMerge } from 'tailwind-merge';\n\nexport function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs));\n}\n`);
