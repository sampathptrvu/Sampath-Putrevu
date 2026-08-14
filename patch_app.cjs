const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Add imports for the new pages
content = content.replace(
  "import NotFoundPage from './NotFoundPage';",
  "import NotFoundPage from './NotFoundPage';\nimport JournalismPage from './JournalismPage';\nimport StoryDetailPage from './StoryDetailPage';"
);

// Add the routes
content = content.replace(
  '<Route path="/work" element={<WorkPage />} />',
  '<Route path="/work" element={<WorkPage />} />\n        <Route path="/journalism" element={<JournalismPage />} />\n        <Route path="/journalism/:slug" element={<StoryDetailPage />} />'
);

fs.writeFileSync('src/App.tsx', content);
console.log('App.tsx patched.');
