const fs = require('fs');

const data = [
  {
    category: "Brand and Content Platforms",
    items: [
      { title: "Masai School", url: "https://www.masaischool.com/" },
      { title: "Masai School Blog", url: "https://www.masaischool.com/blog/" },
      { title: "Masai School Website and Product Pages", url: "https://www.masaischool.com/" },
      { title: "Masai School on X", url: "https://twitter.com/masaischool" },
      { title: "Masai School on LinkedIn", url: "https://www.linkedin.com/school/masai-school/" }
    ]
  },
  {
    category: "Interviews and Earned Media",
    items: [
      { title: "My Interview With the Founders of Masai School", url: "https://yourstory.com/2019/11/masai-school-bengaluru-engineers-coders-isa-bootcamp" },
      { title: "Masai School Raises $5 Million to Build an Alternative to College Education", url: "https://yourstory.com/2021/03/masai-school-alternate-college-education-india-raises-5million-fund" }
    ]
  },
  {
    category: "Series A Funding",
    items: [
      { title: "CNBC-TV18: Masai School Raises $5 Million Led by Omidyar Network India", url: "https://www.cnbctv18.com/startup/edtech-startup-masai-school-raises-5-million-led-by-omidyar-network-india-8722161.htm" },
      { title: "Masai School’s Series A Announcement", url: "https://www.masaischool.com/blog/we-raised-5m-in-series-a-funding-that-also-raised-our-own-limits/" },
      { title: "Inc42: Masai School Raises $5 Million to Bridge India’s Technology Skills Gap", url: "https://inc42.com/buzz/masai-school-looks-to-bridge-skill-gap-among-indias-aspiring-techies-with-5-mn-series-a/" },
      { title: "The Economic Times: Masai School Raises $5 Million Led by Omidyar Network India", url: "https://economictimes.indiatimes.com/tech/funding/edtech-startup-masai-school-gets-5-million-funding-led-by-omidyar/articleshow/81699496.cms?from=mdr" },
      { title: "VCCircle: Omidyar Network India Leads Masai School’s Series A", url: "https://www.vccircle.com/omidyar-network-india-leads-series-a-round-in-masai-school" },
      { title: "YourStory: Masai School Funding Coverage", url: "https://yourstory.com/2021/10/funding-edtech-startup-masai-school-indian-cxos" }
    ]
  },
  {
    category: "Series A2 Bridge Round",
    items: [
      { title: "YourStory: Masai School Raises Funding From Indian CXOs", url: "https://yourstory.com/2021/10/funding-edtech-startup-masai-school-indian-cxos" },
      { title: "Inc42: Masai School Raises Funding From 21 Angel Investors", url: "https://inc42.com/buzz/masai-school-raises-funds-from-21-angel-investors/" }
    ]
  },
  {
    category: "Series B Funding",
    items: [
      { title: "The Weekend Leader: Masai School Raises $10 Million and Brings on Mithali Raj and Bhaichung Bhutia as Investors", url: "https://www.theweekendleader.com/Headlines/77673/jobtech-startup-masai-school-raises-10-million-funding-and-ropes-in-mithali-raj-bhaichung-bhutia-as-investors.html" },
      { title: "Moneycontrol: Masai School Raises $10 Million in Series B Funding", url: "https://www.moneycontrol.com/news/business/startup/masai-school-onboards-mithali-raj-bhaichung-bhutia-as-investors-raises-10-mn-in-funding-9467551.html" },
      { title: "Inc42: Masai School Secures $10 Million for Scholarships and Upskilling Courses", url: "https://inc42.com/buzz/masai-school-secures-10-mn-to-add-scholarships-upskilling-courses/" },
      { title: "YourStory: Masai School Raises Series B Funding", url: "https://yourstory.com/2022/11/masai-school-seriesb-round-mithaliraj-bhaichung-bhutia" }
    ]
  },
  {
    category: "Prepleaf Acquisition",
    items: [
      { title: "VCCircle: Masai School Acquires Data Analytics Institute Prepleaf", url: "https://www.vccircle.com/masai-school-buys-data-analytics-institute-prepleaf" },
      { title: "The Economic Times: Masai School Acquires Prepleaf for $1 Million", url: "https://economictimes.indiatimes.com/tech/startups/tech-skilling-startup-masai-school-acquires-data-analytics-firm-prepleaf-for-1-million/articleshow/88404992.cms?from=mdr" },
      { title: "YourStory: Masai School Acquires Prepleaf", url: "https://yourstory.com/2021/12/masai-school-acquires-prepleaf-data-analytics-startup-1-million-edtech" },
      { title: "Business World: Masai School Acquires Prepleaf for $1 Million", url: "https://www.bwdisrupt.com/article/masai-school-acquires-data-analytics-institute-prepleaf-for-1-million-415406" }
    ]
  },
  {
    category: "Campaigns, Programs, and Other Announcements",
    items: [
      { title: "The Economic Times: Masai School’s Digital Ad Uses Humour to Encourage Enrolment", url: "https://brandequity.economictimes.indiatimes.com/news/research/advertising/masai-schools-digital-ad-film-employs-humour-to-encourage-enrolment/80682307" },
      { title: "Masai School Launches the Glide Program", url: "https://indianstartupnews.com/news/masai-school-launches-glide-program-to-reward-top-performing-students/" },
      { title: "Mint: Masai School Acquires Design Shift Academy", url: "https://www.livemint.com/companies/news/education-startup-masai-school-acquires-design-shift-academy-11623237983955.html" },
      { title: "Masai School Announces the Acquisition of Design Shift Academy", url: "https://blog.masaischool.com/masai-school-acquisition-design-shift-ui-ux-product-management/" },
      { title: "The Indian Express: How AI Is Revolutionising Technology Hiring and Careers in India", url: "https://indianexpress.com/article/technology/artificial-intelligence/ai-is-revolutionising-tech-hiring-and-careers-in-india-masai-school-ceo-prateek-shukla-9020126/" },
      { title: "PR Newswire: Masai School’s Study Now, Pay Later Program", url: "https://www.prnewswire.com/in/news-releases/masai-school-s-study-now-pay-later-option-gives-aspirants-an-opportunity-to-begin-a-career-in-software-development-857064871.html" },
      { title: "The Times of India: Masai School’s Study Now, Pay Later Program", url: "https://timesofindia.indiatimes.com/masai-schools-study-now-pay-later-option-gives-aspirants-an-opportunity-to-begin-a-career-in-software-development/articleshow/86420433.cms" },
      { title: "The Year That Was: How 2020 Treated Masai School—and Vice Versa", url: "https://masaischool.medium.com/the-year-that-was-how-2020-treated-masai-school-and-the-vice-versa-354dd148a598" }
    ]
  }
];

const linkClass = "font-sans font-normal text-[15px] lg:text-[16px] leading-[1.55] text-[var(--color-text)] underline decoration-[1px] underline-offset-[3px] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] transition-colors";

let masaiContent = `<div className="rule-major my-[48px] lg:my-[64px]"></div>

              <div className="w-full">
                <h3 className="font-serif font-semibold text-[22px] md:text-[24px] lg:text-[28px] text-[var(--color-text)] mb-[24px]">
                  At Masai School
                </h3>
`;

data.forEach((section, index) => {
  masaiContent += `                <h4 className="font-sans font-medium text-[16px] lg:text-[18px] text-[var(--color-text)] mb-[16px] ${index > 0 ? 'mt-[32px]' : ''}">${section.category}</h4>
                <ul className="flex flex-col gap-[16px]">`;
  section.items.forEach(item => {
    masaiContent += `\n                  <li>
                    <a
                      href="${item.url}"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="${linkClass}"
                    >
                      ${item.title}
                    </a>
                  </li>`;
  });
  masaiContent += `\n                </ul>\n`;
});

masaiContent += `              </div>\n\n              `;

let fileContent = fs.readFileSync('src/PublishedPage.tsx', 'utf8');

// Find insertion point before "Press coverage earned for clients"
const targetSearch = `<div className="rule-major my-[48px] lg:my-[64px]"></div>

              <div className="w-full">
                <h3 className="font-serif font-semibold text-[22px] md:text-[24px] lg:text-[28px] text-[var(--color-text)] mb-[24px]">
                  Press coverage earned for clients`;

if (fileContent.includes(targetSearch)) {
  fileContent = fileContent.replace(targetSearch, masaiContent + targetSearch);
  fs.writeFileSync('src/PublishedPage.tsx', fileContent);
  console.log("Successfully inserted Masai section.");
} else {
  // Try finding a looser match
  const looseSearch = /<div className="rule-major my-\[48px\] lg:my-\[64px\]"><\/div>\s*<div className="w-full">\s*<h3 className="font-serif font-semibold text-\[22px\] md:text-\[24px\] lg:text-\[28px\] text-\[var\(--color-text\)\] mb-\[24px\]">\s*Press coverage earned for clients/;
  if (looseSearch.test(fileContent)) {
    fileContent = fileContent.replace(looseSearch, masaiContent + '$&');
    fs.writeFileSync('src/PublishedPage.tsx', fileContent);
    console.log("Successfully inserted Masai section via regex.");
  } else {
    console.error("Could not find insertion point.");
    process.exit(1);
  }
}
