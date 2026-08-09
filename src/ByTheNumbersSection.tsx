const roles = [
  {
    title: 'Startup journalist',
    metric: '350+ founder and operator interviews',
    detail: 'Four years at YourStory, where I created Techie Tuesdays, The Turning Point, and The Product Roadmap.',
    lesson: 'Find the thesis hidden beneath the first answer.',
  },
  {
    title: 'VC marketer',
    metric: '100+ editorial assets',
    detail: 'Built Accel SeedToScale and developed founder education and thought leadership across four venture funds.',
    lesson: 'Turn private conviction into public reference material.',
  },
  {
    title: 'Startup marketer',
    metric: '$1.5M in closed-won deals',
    detail: 'Built the inbound engine at Zenskar, led a nine-person team, and grew a newsletter with a 45% average open rate.',
    lesson: 'Carry one narrative through every market touchpoint.',
  },
];

export default function ByTheNumbersSection() {
  return (
    <section className="work-list-panel">
      <h2 className="type-label-small mb-4 uppercase tracking-[0.1em]">By the numbers</h2>
      <h3 className="type-section-heading mb-6 text-balance">
        Three roles. One operating system.
      </h3>
      <p className="type-body-muted max-w-[68ch] text-pretty mb-10 md:mb-12">
        Journalism taught me to find the idea. Venture capital taught me to turn it into public knowledge. Startups taught me to carry it through the market.
      </p>

      <div className="flex flex-col min-[900px]:grid min-[900px]:grid-cols-3 gap-0 min-[900px]:gap-8">
        {roles.map((role, index) => (
          <article
            key={role.title}
            className={`flex flex-col ${index === 0 ? 'pb-8' : index === roles.length - 1 ? 'pt-8' : 'py-8'} min-[900px]:py-0 ${index !== roles.length - 1 ? 'border-b min-[900px]:border-b-0 min-[900px]:border-r border-divider-light min-[900px]:pr-8' : ''}`}
          >
            <h4 className="type-card-heading-2 mb-5">{role.title}</h4>
            <p className="font-sans font-bold text-[20px] text-panel-heading mb-3 tabular-nums">
              {role.metric}
            </p>
            <p className="type-body-muted mb-6 flex-grow">{role.detail}</p>
            <p className="text-[15px] leading-[1.6] text-panel-body italic pt-5 border-t border-divider-light">
              {role.lesson}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
