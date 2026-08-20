import fs from 'fs';

let content = fs.readFileSync('src/HomePage.tsx', 'utf-8');

// The original line in Row 3:
// <div className="editorial-reading flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_1px_1fr] lg:gap-x-8 py-[32px] lg:py-[28px]">
// We will replace it with:
// <div className="editorial-reading flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_1px_1fr] lg:gap-x-8 pt-[32px] pb-0 lg:py-[28px]">

const target = '<div className="editorial-reading flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_1px_1fr] lg:gap-x-8 py-[32px] lg:py-[28px]">';
const replacement = '<div className="editorial-reading flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_1px_1fr] lg:gap-x-8 pt-[32px] pb-0 lg:py-[28px]">';

if (content.includes(target)) {
  content = content.replace(target, replacement);
  fs.writeFileSync('src/HomePage.tsx', content);
  console.log("Successfully fixed padding.");
} else {
  console.log("Could not find target padding string.");
}
