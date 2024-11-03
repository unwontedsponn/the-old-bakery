import fs from 'fs/promises'; // Use async fs methods
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import BlogPost from '@/app/components/BlogPost';
import Header from '@/app/Header';
import Footer from '@/app/Footer';
import { GetServerSideProps } from 'next';

const postsDirectory = path.join(process.cwd(), 'app/blogData');

// Fetch post by slug
async function getPost(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    return { data, content };
  } catch (error) {
    return null; // Handle file not found
  }
}

// Ensure the component function is not marked as `async` unless required.
export default function Blog({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const postPromise = getPost(slug);

  return postPromise.then(post => {
    if (!post) notFound(); // Handle 404 if the post is not found

    return (
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Header />
        <BlogPost title={post.data.title} date={post.data.date} content={post.content} />
        <Footer />
      </main>
    );
  });
}

// Add this function to ensure `params` typing
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params?.slug) {
    return { notFound: true };
  }
  return {
    props: {
      params,
    },
  };
};
