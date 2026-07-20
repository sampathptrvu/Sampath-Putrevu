import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import WorkPage from './WorkPage';
import EssaysPage from './EssaysPage';
import EssayPage from './EssayPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/essays" element={<EssaysPage />} />
        <Route path="/essays/:slug" element={<EssayPage />} />
      </Routes>
    </Router>
  );
}
