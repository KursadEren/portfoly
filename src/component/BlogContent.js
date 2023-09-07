import React from 'react';
import { Link } from 'react-router-dom';
import "../Componentcss/BlogContent.css"

const BlogContent = () => {
  // Blog gönderilerini listeleyin
  const blogPosts = [
    { id: 1, title: 'Blog Gönderisi 1', content: "içerik 1" },
    { id: 2, title: 'Blog Gönderisi 2', content: 'İçerik 2' },
    { id: 3, title: 'Blog Gönderisi 3', content: 'İçerik 2' },
    { id: 4, title: 'Blog Gönderisi 4', content: 'İçerik 2' },
    { id: 5, title: 'Blog Gönderisi 5', content: 'İçerik 2' },
    // Diğer gönderiler
  ];

  return (
    <div className='Container'>
      <h2>Tüm Blog Gönderileri</h2>
      <div className="blog-card-container">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <h3>{post.title}</h3>
            <Link to={`/blog/${post.id}`}>Daha fazla oku</Link>
          </div>
        ))}
      </div>
      <style jsx>
        {`
        .Container{
          color:black;
        }
        `}
      </style>
    </div>
  );
};

export default BlogContent;
