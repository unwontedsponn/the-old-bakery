// app/pages/articles/[slug]/page.tsx
import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Header from '@/app/Header';
import Footer from '@/app/Footer';

const postsDirectory = path.join(process.cwd(), 'app/blogData');

// Fetch post by slug
async function getPost(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContents);
  return { content, metadata: data };
}

type Params = { slug: string };

export default async function Blog({ params }: { params: Promise<Params> }) {
  const { slug } = await params; // Await `params` to avoid the error
  const { content, metadata } = await getPost(slug);

  // Dynamically import plugins
  const ReactMarkdown = (await import('react-markdown')).default;
  const remarkGfm = (await import('remark-gfm')).default;
  const remarkBreaks = (await import('remark-breaks')).default;
  const rehypeRaw = (await import('rehype-raw')).default;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <article className="max-w-4xl mx-auto py-12 px-4 lg:px-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl lg:text-5xl text-pastel-turquoise mb-4">
          {metadata.title}
        </h1>
        <p className="text-sm text-gray-500 mb-8">{metadata.date}</p>
        
        <ReactMarkdown
          className="markdown-content"
          remarkPlugins={[remarkGfm, remarkBreaks]}
          rehypePlugins={[rehypeRaw]}
        >
          {content}
        </ReactMarkdown>
      </article>
      <Footer />
    </main>
  );
}
