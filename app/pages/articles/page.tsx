// app/pages/articles/page.tsx
'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/app/Header';
import Footer from '@/app/Footer';

interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  isFeatured?: boolean;
}

export default function Articles() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/getBlogPosts');
      if (res.ok) {
        const data = await res.json();
        setPosts(data);
      } else {
        console.error('Failed to fetch posts');
      }
    };

    fetchPosts();    
  }, []);  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      
      <Header />      
      <div className="max-w-4xl mx-auto py-12 px-4 lg:px-8">        
        <h1 className="text-5xl mb-8 text-center text-montserrat text-pastel-turquoise">Articles</h1>
        <div className="grid gird-cols-1 gap-6">
          {posts.map((post) => (
            <div key={post.slug} className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <Link href={`/pages/articles/${post.slug}`}
                className="text-3xl text-pastel-turquoise hover:text-coral-blush transition-colors duration-200">
                  {post.title}
                  <p className="text-sm text-gray-500 mt-2">{post.date}</p>
              </Link>              
            </div>
          ))}
        </div>       
      </div>      
      <Footer />

    </main>   
  );
}