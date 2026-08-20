import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './HomePage';
import WorkPage from './WorkPage';
import AboutPage from './AboutPage';
import PublishedPage from './PublishedPage';
import HowIHelpPage from './HowIHelpPage';
import ContactPage from './ContactPage';
import NotFoundPage from './NotFoundPage';

function ScrollObserver() {
  const location = useLocation();

  useEffect(() => {
    // Feature detection
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    let observer: IntersectionObserver;
    try {
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-pending');
            entry.target.classList.add('reveal-animate');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
    } catch (e) {
      console.warn("IntersectionObserver initialization failed", e);
      return;
    }

    // Small delay to allow React to mount elements before querying
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal-section, .reveal-annotation').forEach(el => {
        const rect = el.getBoundingClientRect();
        // If element is already substantially in initial viewport, skip animation
        // to avoid a flash. We leave it as its default state (opacity 1).
        if (rect.top < window.innerHeight - 50) {
          // Already visible, do nothing.
        } else {
          // Element is below the fold. Prepare for reveal animation.
          el.classList.add('reveal-pending');
          observer.observe(el);
        }
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollObserver />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/published" element={<PublishedPage />} />
        <Route path="/how-i-help" element={<HowIHelpPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
