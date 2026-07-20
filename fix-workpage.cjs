const fs = require('fs');

let content = fs.readFileSync('src/WorkPage.tsx', 'utf8');

// 1. Add past-work-intro to intro column
const oldIntro = 'className="flex flex-col items-start justify-center w-full max-w-4xl pt-8 pb-12"';
const newIntro = 'className="past-work-intro flex flex-col items-start justify-center w-full max-w-4xl pt-8 pb-12"';
content = content.replace(oldIntro, newIntro);

// 2. Add past-work-intro to project list container
const oldList = '<FadePanel className="w-full">';
const newList = '<FadePanel className="past-work-intro w-full">';
content = content.replace(oldList, newList);

fs.writeFileSync('src/WorkPage.tsx', content);
