import fs from 'fs';

let content = fs.readFileSync('src/HomePage.tsx', 'utf-8');

// The mobile inline version:
content = content.replace(
  '<div className="lg:hidden editorial-margin mt-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">',
  '<div className="lg:hidden flex flex-col gap-[12px] mt-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">'
);

// The desktop margin track version:
// Currently: <div className="hidden lg:block editorial-margin opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// We just want: <div className="editorial-margin opacity-0 group-hover:opacity-100 transition-opacity duration-300">
content = content.replace(
  '<div className="hidden lg:block editorial-margin opacity-0 group-hover:opacity-100 transition-opacity duration-300">',
  '<div className="editorial-margin opacity-0 group-hover:opacity-100 transition-opacity duration-300">'
);

fs.writeFileSync('src/HomePage.tsx', content);
