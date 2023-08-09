import { useState, useEffect } from 'react';
import Blog from './Blog';
import blogService from '../services/blogs';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    blogService.getBlogs().then((blogs) => {
      setBlogs(blogs);
    });
  }, []);

  return (
    <main>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </main>
  );
};

export default BlogList;
