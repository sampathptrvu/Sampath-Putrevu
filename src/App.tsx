import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import WorkPage from './WorkPage';
import NotFoundPage from './NotFoundPage';
import JournalismPage from './JournalismPage';
import StoryDetailPage from './StoryDetailPage';
import homepageBackground from './homepage-background.png';

export default function App() {
  return (
    <Router>
      <div className="site-background-image" style={{ backgroundImage: `url(${homepageBackground})` }} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/journalism" element={<JournalismPage />} />
        <Route path="/journalism/:slug" element={<StoryDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
