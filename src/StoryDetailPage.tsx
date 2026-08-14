import { useParams, Link } from 'react-router-dom';
import Header from './Header';
import NotFoundPage from './NotFoundPage';
import { useMetadata } from './useMetadata';
import { journalismStories } from './data/journalismData';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function StoryDetailPage() {
  const { slug } = useParams();
  const story = journalismStories.find((s) => s.slug === slug);

  if (!story) {
    return <NotFoundPage />;
  }

  useMetadata({
    title: `${story.headline} | Sampath Putrevu`,
    description: story.description,
    canonical: `https://sampathputrevu.com/journalism/${story.slug}`,
    ogTitle: `${story.headline} | Sampath Putrevu`,
    ogDescription: story.description,
    ogUrl: `https://sampathputrevu.com/journalism/${story.slug}`
  });

  return (
    <div className="work-page selection:bg-burgundy selection:text-warm-white font-sans text-warm-white relative">
      <Header />
      <main className="work-page-main work-page-content pb-12">
        <div className="work-page-container flex flex-col" style={{ gap: "var(--site-section-gap)" }}>
          <section className="work-list-panel">
            <span className="type-label-small mb-[26px] block">{story.label}</span>
            <h1 className="type-card-heading-1 mb-[30px] !text-balance !text-3xl">
              {story.headline}
            </h1>
            <p className="work-body mb-[32px] !text-lg">
              {story.description}
            </p>
            <p className="type-body-muted mb-[32px]">
              {story.metadata}
            </p>

            <div className="mb-[40px] pt-[32px] border-t border-divider-light">
              <p className="work-body mb-6">
                Reported and written by Sampath Putrevu.
              </p>
              <a
                href={story.originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="type-button-ghost inline-flex items-center text-burgundy font-medium hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-burgundy rounded-[2px]"
              >
                Read the original on YourStory <ExternalLink className="w-5 h-5 ml-1.5" />
              </a>
            </div>

            <Link to="/journalism" className="inline-flex items-center text-[15px] font-semibold text-burgundy hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-burgundy focus:ring-offset-2 focus:ring-offset-transparent rounded-[2px] mt-2">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Back to Selected journalism
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
