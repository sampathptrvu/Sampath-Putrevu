import { Link } from 'react-router-dom';
import Header from './Header';
import { useMetadata } from './useMetadata';
import { journalismStories } from './data/journalismData';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function JournalismPage() {
  useMetadata({
    title: 'Selected Journalism | Sampath Putrevu',
    description: 'Five selected YourStory pieces from Sampath Putrevu’s reporting on technical founders, products and consequential technology companies.',
    canonical: 'https://sampathputrevu.com/journalism',
    ogTitle: 'Selected Journalism | Sampath Putrevu',
    ogDescription: 'Five selected YourStory pieces from Sampath Putrevu’s reporting on technical founders, products and consequential technology companies.',
    ogUrl: 'https://sampathputrevu.com/journalism'
  });

  return (
    <div className="work-page selection:bg-burgundy selection:text-warm-white font-sans text-warm-white relative">
      <Header />
      <main className="work-page-main work-page-content pb-12">
        <div className="work-page-container flex flex-col" style={{ gap: "var(--site-section-gap)" }}>
          {/* Glass Intro Panel */}
          <section className="work-intro-panel glass-surface">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Selected journalism
            </h1>
            <p className="text-lg md:text-[19px] leading-relaxed text-warm-white/90 mb-6 max-w-[65ch]">
              Over four years at YourStory, I reported on the people, products and decisions behind consequential technology companies. These five pieces are the closest to the narrative work I do today.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[15px] font-medium text-warm-white/70 mb-8 pt-4 border-t border-warm-white/10">
              <span>4 years</span>
              <span className="w-1 h-1 rounded-full bg-warm-white/30"></span>
              <span>406 stories</span>
              <span className="w-1 h-1 rounded-full bg-warm-white/30"></span>
              <span>350+ interviews</span>
            </div>
            <Link to="/" className="inline-flex items-center text-[15px] font-semibold text-warm-white/80 hover:text-warm-white transition-colors focus:outline-none focus:ring-2 focus:ring-warm-white rounded-sm group">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
              Back to homepage
            </Link>
          </section>

          {/* Parchment Work List Panel */}
          <section className="work-list-panel flex flex-col gap-0">
            {journalismStories.map((story, idx) => (
              <div key={story.slug} className={`flex flex-col lg:grid lg:grid-cols-[140px_1fr_220px] xl:grid-cols-[160px_1fr_250px] gap-4 lg:gap-8 py-8 ${idx !== journalismStories.length - 1 ? 'border-b border-divider-dark/10' : ''} group hover:-translate-y-1 transition-transform duration-300 ease-out first:pt-2 last:pb-2`}>
                <div>
                  <span className="type-label-small block text-panel-muted mt-1">{story.label}</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="type-card-heading-1 mb-3 text-panel-heading text-[22px] md:text-[24px] leading-tight text-balance">{story.headline}</h3>
                  <p className="text-panel-body text-[17px] leading-[1.7] max-w-[70ch]">{story.description}</p>
                </div>
                <div className="flex flex-col items-start gap-4 lg:border-l lg:border-divider-dark/10 lg:pl-8">
                  <p className="text-[14px] leading-relaxed text-panel-muted">{story.metadata}</p>
                  <div className="flex flex-col items-start gap-3 mt-auto w-full pt-4 lg:pt-0">
                    <Link to={`/journalism/${story.slug}`} className="inline-flex items-center text-burgundy font-medium hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-burgundy rounded-sm">
                      View story <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                    <a href={story.originalUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-panel-muted text-sm font-medium hover:text-burgundy transition-colors focus:outline-none focus:ring-2 focus:ring-burgundy rounded-sm text-left">
                      Read original <ExternalLink className="w-[14px] h-[14px] ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}
