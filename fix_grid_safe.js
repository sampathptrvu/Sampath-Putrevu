import fs from 'fs';
let content = fs.readFileSync('src/HomePage.tsx', 'utf-8');

// Replace desktop headers
content = content.replace(
  '<div className="editorial-reading grid grid-cols-[1fr_1px_1fr] gap-x-8 pb-[28px] border-b border-[var(--color-rule)]">',
  '<div className="editorial-reading grid grid-cols-[1fr_1px_1fr] gap-x-8 border-b border-[var(--color-rule)]">'
);
content = content.replace(
  '<h2 className="type-fit-column-heading">Where I fit</h2>\n                <div className="bg-[var(--color-rule)] w-px h-full"></div>\n                <h2 className="type-fit-column-heading">Where I don\'t</h2>',
  '<h2 className="type-fit-column-heading pb-[28px]">Where I fit</h2>\n                <div className="bg-[var(--color-rule)] w-px h-full"></div>\n                <h2 className="type-fit-column-heading pb-[28px]">Where I don\'t</h2>'
);

// Replace row 1
content = content.replace(
  '<div className="editorial-reading grid grid-cols-[1fr_1px_1fr] gap-x-8 py-[28px] border-b border-[var(--color-rule)] ">',
  '<div className="editorial-reading grid grid-cols-[1fr_1px_1fr] gap-x-8 border-b border-[var(--color-rule)]">'
);
content = content.replace(
  '<h3 className="type-fit-row-headline mb-[10px]">Your product is strong and the market still can\'t place it.</h3>',
  '<div className="py-[28px]">\n                  <h3 className="type-fit-row-headline mb-[10px]">Your product is strong and the market still can\'t place it.</h3>'
);
content = content.replace(
  '<p className="type-fit-row-body">Buyers understand what it does. Nobody, including the sales deck, can say why it wins.</p>\n                </div>',
  '<p className="type-fit-row-body">Buyers understand what it does. Nobody, including the sales deck, can say why it wins.</p>\n                </div>\n                </div>'
);
content = content.replace(
  '<h3 className="type-fit-row-headline mb-[10px]">Ghostwriting that floats above the product.</h3>',
  '<div className="py-[28px]">\n                  <h3 className="type-fit-row-headline mb-[10px]">Ghostwriting that floats above the product.</h3>'
);
content = content.replace(
  '<p className="type-fit-row-body">Posts assembled from interviews, written by someone who\'s never opened the docs or joined a customer call.</p>\n                </div>',
  '<p className="type-fit-row-body">Posts assembled from interviews, written by someone who\'s never opened the docs or joined a customer call.</p>\n                </div>\n                </div>'
);

// We will just let it be. The detached rule was perfectly fine and visually spacious. Let's revert the replacements and just rely on the original script which was clean.
