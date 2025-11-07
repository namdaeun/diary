import fs from 'node:fs';
import path from 'node:path';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Blog API endpoints
app.get('/api/blog', async (_req, res) => {
  try {
    // Simple file-based blog list for now
    const blogDir = path.join(process.cwd(), 'content', 'blog');
    const files = fs
      .readdirSync(blogDir)
      .filter((file) => file.endsWith('.mdx'));

    const blogList = files.map((file) => ({
      slug: file.replace('.mdx', ''),
      title: file.replace('.mdx', '').replace(/-/g, ' '),
      description: `Blog post: ${file.replace('.mdx', '')}`,
      timestamp: new Date().toISOString(),
    }));

    res.json(blogList);
  } catch (error) {
    console.error('Error fetching blog list:', error);
    res.status(500).json({ error: 'Failed to fetch blog list' });
  }
});

app.get('/api/blog/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const blogPath = path.join(process.cwd(), 'content', 'blog', `${slug}.mdx`);

    if (!fs.existsSync(blogPath)) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    const content = fs.readFileSync(blogPath, 'utf-8');

    res.json({
      slug,
      title: slug.replace(/-/g, ' '),
      content,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error fetching blog post:', error);
    res.status(500).json({ error: 'Failed to fetch blog post' });
  }
});

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`🚀 API Server running on http://localhost:${port}`);
});
