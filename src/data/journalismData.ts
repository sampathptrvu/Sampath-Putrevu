export interface JournalismStory {
  slug: string;
  label: string;
  headline: string;
  description: string;
  metadata: string;
  originalUrl: string;
}

export const journalismStories: JournalismStory[] = [
  {
    slug: 'postman',
    label: 'POSTMAN',
    headline: 'How a vision to play the long game in the industry helped Postman build a rockstar product',
    description: 'How a developer tool created to solve one API workflow evolved into a platform spanning the API lifecycle.',
    metadata: 'Sampath Putrevu · YourStory · 20 May 2020 · 7 min read',
    originalUrl: 'https://yourstory.com/2020/05/product-roadmap-postman-api-development-tech-startup'
  },
  {
    slug: 'hubspot',
    label: 'HUBSPOT',
    headline: 'He wanted to be a mechanical engineer, but blogged his way and built CRM company HubSpot',
    description: 'A technical-founder profile about code, entrepreneurship and the thinking behind a company that helped establish inbound marketing as a category.',
    metadata: 'Sampath Putrevu · YourStory · 26 November 2019 · 8 min read',
    originalUrl: 'https://yourstory.com/2019/11/techie-tuesday-crm-company-hubspot-cto-dharmesh-shah'
  },
  {
    slug: 'observe-ai',
    label: 'OBSERVE.AI',
    headline: 'Why San Francisco-based voice AI platform Observe.ai found a target market first and then built a product',
    description: 'The founders began with an operational problem in call centres, found customers who recognised it and built the product around a continuous market-feedback loop.',
    metadata: 'Sampath Putrevu · YourStory · 28 January 2020 · 5 min read',
    originalUrl: 'https://yourstory.com/2019/12/san-francisco-observe-ai-voice-customer-experience-product'
  },
  {
    slug: 'google-maps-india',
    label: 'GOOGLE MAPS INDIA',
    headline: 'Mapping the journey of Lalitesh Katragadda, the creator of Google Maps India',
    description: 'From robotics and computational geometry to the technical and institutional problem of mapping India at scale.',
    metadata: 'Sampath Putrevu · YourStory · 5 February 2018 · 8 min read',
    originalUrl: 'https://yourstory.com/2018/02/mapping-journey-lalitesh-katragadda-creator-google-maps-india'
  },
  {
    slug: 'razorpay',
    label: 'RAZORPAY',
    headline: 'How Razorpay’s Shashank Kumar built India’s first online payment gateway for startups',
    description: 'A technical-founder profile about developer-friendly APIs, payment infrastructure and building for an underserved startup market.',
    metadata: 'Sampath Putrevu · YourStory · 30 July 2019 · 8 min read',
    originalUrl: 'https://yourstory.com/2019/07/techie-tuesday-razorpay-shashank-kumar-payments-startups'
  }
];
