import Header from './Header';
import { Link } from 'react-router-dom';
import { useMetadata } from './useMetadata';

export default function NotFoundPage() {
  useMetadata({
    title: "Page Not Found | Sampath Putrevu",
    description: "The page you are looking for could not be found.",
    canonical: "https://sampathputrevu.com/",
    ogTitle: "Page Not Found | Sampath Putrevu",
    ogDescription: "The page you are looking for could not be found.",
    ogUrl: "https://sampathputrevu.com/",
    ogType: "website",
    robots: "noindex, nofollow"
  });

  return (
    <div className="min-h-screen selection:bg-burgundy selection:text-warm-white font-sans text-warm-white flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center text-center px-4" style={{ minHeight: "calc(100vh - 100px)", paddingTop: "80px" }}>
        <h1 className="type-hero-headline mb-4" style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.38)" }}>
          Page not found
        </h1>
        <p className="type-hero-description mb-8" style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.38)" }}>
          The page you’re looking for does not exist or may have moved.
        </p>

        <div className="hero-actions flex flex-col md:flex-row gap-4">
          <Link
            to="/"
            className="w-full md:w-auto text-center inline-flex items-center justify-center px-5 md:px-[22px] py-[11px] bg-burgundy text-warm-white rounded-[4px] type-button hover:bg-burgundy-dark transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent cursor-pointer shadow-sm"
          >
            Back to home
          </Link>
          <Link
            to="/work"
            className="w-full md:w-auto text-center inline-flex items-center justify-center px-5 md:px-[22px] py-[11px] bg-white/10 backdrop-blur-sm border border-white/20 text-warm-white rounded-[4px] type-button hover:bg-white/15 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent cursor-pointer shadow-sm"
          >
            Past work
          </Link>
        </div>
      </main>
    </div>
  );
}
