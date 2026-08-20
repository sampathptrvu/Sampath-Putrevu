const fs = require('fs');

let content = fs.readFileSync('src/HomePage.tsx', 'utf8');

// Replace all remaining href="/how-i-help#fit" with to="/best-fit"
// We need to change <a to <Link and </a> to </Link>
content = content.replace(/<a([^>]*)href="\/how-i-help#fit"([^>]*)>/g, '<Link to="/best-fit"$1$2>');
content = content.replace(/<\/a>/g, (match, offset, string) => {
  // Only replace </a> if it closes a Link we just opened, but this might be hard.
  // Actually, we know the text is "Work with me &rarr;" or similar.
  return match; // We will do it more specifically
});

fs.writeFileSync('src/HomePage.tsx', content);
