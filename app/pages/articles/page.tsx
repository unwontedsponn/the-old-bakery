// Blog-page.tsx
import fs from 'fs/promises'; // Use async fs methods
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Header from '@/app/Header';
import Footer from '@/app/Footer';

const postsDirectory = path.join(process.cwd(), 'app/blogData');

// This is a Server Component by default
export default async function BlogList() {
  // Fetch blog posts from the Markdown files asynchronously
  const filenames = await fs.readdir(postsDirectory); // Async version of readdir
  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = await fs.readFile(filePath, 'utf8'); // Async version of readFile
      const { data } = matter(fileContents);

      return {
        slug: filename.replace('.md', ''),
        title: data.title,
        date: data.date,
      };
    })
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <Header />      

      <div className="max-w-4xl mx-auto py-12 px-4 lg:px-8">        
        <h1 className="text-5xl mb-8 text-center text-montserrat text-pastel-turquoise">Blog</h1>
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug} className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <Link href={`blog/${post.slug}`}
                className="text-3xl text-pastel-turquoise hover:text-coral-blush transition-colors duration-200">
                  {post.title}
                
              </Link>
              <p className="text-sm text-gray-500 mt-2">{post.date}</p>
            </li>
          ))}
        </ul>       
      </div>
      
      <Footer />
    </main>   
  );
}
