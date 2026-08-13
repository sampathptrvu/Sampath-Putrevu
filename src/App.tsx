import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import WorkPage from './WorkPage';
import NotFoundPage from './NotFoundPage';
import homepageBackground from './homepage-background.png';

export default function App() {
  return (
    <Router>
      <div className="site-background-image" style={{ backgroundImage: `url(${homepageBackground})` }} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
