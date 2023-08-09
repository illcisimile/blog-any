import { useState, useEffect } from 'react';
import Blog from './Blog';
import blogService from '../services/blogs';

import Container from './Container';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    blogService.getBlogs().then((blogs) => {
      setBlogs(blogs);
    });
  }, []);

  return (
    <Container semantic='main'>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </Container>
  );
};

export default BlogList;
