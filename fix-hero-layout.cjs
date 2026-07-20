const fs = require('fs');

let content = fs.readFileSync('src/HomePage.tsx', 'utf8');

// 1. Update <section ref={heroRef} ...>
content = content.replace(
  /<section ref=\{heroRef\} className="relative w-full min-h-\[100svh\] flex flex-col justify-start md:justify-center items-center pt-\[18vh\] md:pt-0">/g,
  '<section ref={heroRef} className="relative w-full min-h-[100svh] flex flex-col justify-start items-start pt-[15vh] sm:pt-[18vh] md:pt-[27vh] lg:pt-[26vh]">'
);

// 2. Update <div className="w-full min-[1200px]...
content = content.replace(
  /<div className="w-full min-\[1200px\]:w-\[calc\(100vw-120px\)\] min-\[1200px\]:max-w-none relative z-10 text-left flex flex-col items-start pb-0 md:-mt-\[5vh\] px-5 sm:px-6 md:pr-8 md:pl-\[clamp\(48px,8vw,80px\)\] min-\[768px\]:max-\[1099px\]:px-\[48px\] lg:pl-\[clamp\(80px,10vw,155px\)\] lg:pr-12">/g,
  '<div className="w-full relative z-10 text-left flex flex-col items-start px-5 sm:px-8 md:px-[7.5vw]">'
);

// 3. Update <motion.div className="hero-copy...
content = content.replace(
  /className="hero-copy flex flex-col items-start justify-center w-full min-\[768px\]:max-\[1099px\]:max-w-\[760px\]"/g,
  'className="hero-copy flex flex-col items-start justify-start w-full max-w-[720px]"'
);

// 4. Update <h1>
content = content.replace(
  /<h1 className="hero-headline font-display font-normal not-italic leading-\[1.08\] tracking-\[-0.015em\] text-balance mb-\[28px\] text-warm-white text-left border-solid">/g,
  '<h1 className="font-display font-normal not-italic text-[clamp(48px,4.8vw,76px)] leading-[1.02] tracking-[-0.025em] text-balance max-w-[720px] mb-[28px] text-warm-white text-left border-solid">'
);

fs.writeFileSync('src/HomePage.tsx', content);
