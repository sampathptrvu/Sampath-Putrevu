import fs from 'fs';
let content = fs.readFileSync('src/HomePage.tsx', 'utf-8');

content = content.replace(
  /<div className="editorial-reading grid grid-cols-\[1fr_1px_1fr\] gap-x-8 pb-\[28px\] border-b border-\[var\(--color-rule\)\]">/g,
  '<div className="editorial-reading grid grid-cols-[1fr_1px_1fr] gap-x-8 border-b border-[var(--color-rule)]">'
);
content = content.replace(
  /<h2 className="type-fit-column-heading">Where I fit<\/h2>/g,
  '<h2 className="type-fit-column-heading pb-[28px]">Where I fit</h2>'
);
content = content.replace(
  /<h2 className="type-fit-column-heading">Where I don't<\/h2>/g,
  '<h2 className="type-fit-column-heading pb-[28px]">Where I don\'t</h2>'
);

content = content.replace(
  /<div className="editorial-reading grid grid-cols-\[1fr_1px_1fr\] gap-x-8 py-\[28px\] border-b border-\[var\(--color-rule\)\] ">/g,
  '<div className="editorial-reading grid grid-cols-[1fr_1px_1fr] gap-x-8 border-b border-[var(--color-rule)]">'
);
content = content.replace(
  /<div className="editorial-reading grid grid-cols-\[1fr_1px_1fr\] gap-x-8 py-\[28px\] ">/g,
  '<div className="editorial-reading grid grid-cols-[1fr_1px_1fr] gap-x-8">'
);

content = content.replace(
  /<div className="flex flex-col">/g,
  '<div className="flex flex-col py-[28px]">'
);
// Revert the ones that were not in Best Fit desktop grid.
// Wait, doing global replace on `<div className="flex flex-col">` is dangerous.
