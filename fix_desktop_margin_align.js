import fs from 'fs';

let content = fs.readFileSync('src/HomePage.tsx', 'utf-8');

// The proof margin notes are vertically aligned via CSS margin/padding natively, not via items-center.
// Specifically, they align to the source because margin is set to 0. Let's make sure it matches the exact styling of the proof notes.
// Actually, in proof section, it's just: <div className="editorial-margin opacity-0 group-hover:opacity-100 transition-opacity duration-300">
content = content.replace(
  '<div className="hidden lg:flex editorial-margin items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">',
  '<div className="hidden lg:block editorial-margin opacity-0 group-hover:opacity-100 transition-opacity duration-300">'
);

fs.writeFileSync('src/HomePage.tsx', content);
