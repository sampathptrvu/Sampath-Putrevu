import fs from 'fs';
const css = fs.readFileSync('src/index.css', 'utf8');
let depth = 0;
let lines = css.split('\n');
for (let i = 0; i < lines.length; i++) {
  for (let j = 0; j < lines[i].length; j++) {
    if (lines[i][j] === '{') depth++;
    if (lines[i][j] === '}') {
      depth--;
      if (depth < 0) {
        console.log('Extra closing brace at line', i + 1, ':', lines[i]);
        process.exit(1);
      }
    }
  }
}
if (depth > 0) {
  console.log('Missing closing brace(s)');
} else {
  console.log('Braces matched');
}
