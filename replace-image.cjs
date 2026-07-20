const fs = require('fs');

const oldPictureRegex = /<picture>\s*<source[^>]+>\s*<source[^>]+>\s*<img\s+src="[^"]+"(\s+alt="")?\s+fetchPriority="high"\s+className="([^"]+)"\s*\/>\s*<\/picture>/g;

const files = ['src/HomePage.tsx', 'src/WorkPage.tsx', 'src/EssaysPage.tsx', 'src/EssayPage.tsx'];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(oldPictureRegex, (match, p1, className) => {
    // We modify the className to use object-center for both mobile and desktop as starting point.
    // Actually, maybe object-[50%_center] ? Let's just try object-[60%_center] or object-center.
    // Let's replace object-\[.*?\] with object-center.
    let newClassName = className.replace(/object-\[[^\]]+\]/g, 'object-center');
    newClassName = newClassName.replace(/md:object-center/g, ''); // deduplicate
    newClassName = newClassName.replace(/lg:object-center/g, ''); // deduplicate
    newClassName = newClassName.replace(/\s+/g, ' ').trim();
    
    // We'll apply `object-[75%_center]` for mobile maybe? Let's just keep it simple: `object-cover object-center`. 
    // The previous was `object-[52%_bottom] md:object-[75%_center] lg:object-[75%_center]`.
    
    return `<img src="https://res.cloudinary.com/wljosnwf/image/upload/v1784421613/sampathputrevu_replace_the_removed_areas_with_marina_bay_sands__165ca779-2407-4a89-9c82-1934d0a14161_mr5tej.png" alt="" fetchPriority="high" className="${className.replace(/object-\[[^\]]+\]/g, 'object-center').replace(/md:object-center/g, '').replace(/lg:object-center/g, '').replace(/\s+/g, ' ')}" />`;
  });
  fs.writeFileSync(file, content);
}
