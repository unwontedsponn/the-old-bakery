// BlogPost.tsx
export default function BlogPost({ title, date, content }: { title: string, date: string, content: string }) {
    return (
      <article className="max-w-4xl mx-auto py-12 px-4 lg:px-8 bg-white rounded-lg shadow-lg">
        {/* Blog Title */}
        <h1 className="text-4xl lg:text-5xl text-pastel-turquoise mb-4">
          {title}
        </h1>
  
        {/* Date */}
        <p className="text-sm text-gray-500 mb-8">{date}</p>
  
        {/* Blog Content */}
        <div className="prose lg:prose-lg max-w-none text-gray-700">
          {content}
        </div>
      </article>
    );
  }  