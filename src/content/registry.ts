export interface Essay {
  slug: string;
  title: string;
  summary: string;
  publishedDate: string;
  updatedDate?: string;
  readingTime: string;
  topic?: string;
  featured: boolean;
  status: 'draft' | 'published';
  body: string;
}

const parseFrontmatter = (fileContent: string): Essay => {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = fileContent.match(frontmatterRegex);

  if (!match) {
    throw new Error('Invalid markdown format. Expected frontmatter.');
  }

  const [, frontmatterStr, body] = match;
  const lines = frontmatterStr.split('\n');
  const metadata: any = {};

  lines.forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim();
      metadata[key] = value === 'true' ? true : value === 'false' ? false : value;
    }
  });

  return {
    ...metadata,
    body: body.trim()
  } as Essay;
};

// Vite feature to import multiple files
const essayModules = import.meta.glob('./essays/*.md', { query: '?raw', import: 'default', eager: true });

export const allEssays: Essay[] = Object.values(essayModules).map((content: any) => parseFrontmatter(content));

export const publishedEssays = allEssays
  .filter(essay => essay.status === 'published')
  .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());

export const getEssayBySlug = (slug: string) => {
  return publishedEssays.find(e => e.slug === slug);
};
