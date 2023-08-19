import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { useMatch } from 'react-router-dom';

import Blog from '../components/Blog';
import Container from '../components/Container';
import SortButton from '../components/SortButton';
import BlogSkeleton from '../components/BlogSkeleton';

const BlogList = ({ blogs }) => {
  const [sort, setSort] = useState('latest');

  const handleSort = () => {
    setSort(sort === 'latest' ? 'oldest' : 'latest');
  };

  const sortedBlogs =
    sort === 'latest'
      ? [...blogs].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      : blogs;

  const blogsWithTagMatch = useMatch('/tag/:tag');

  return (
    <>
      <Helmet>
        <title>
          {blogsWithTagMatch === null
            ? 'home | blog: any'
            : `${blogsWithTagMatch.params.tag} | blog: any`}
        </title>
      </Helmet>
      <Container semantic='main'>
        {sortedBlogs.length > 0 ? (
          <>
            <SortButton sort={sort} handleSort={handleSort} />
            {sortedBlogs.map((blog) => (
              <Blog key={blog.id} blog={blog} />
            ))}
          </>
        ) : (
          <BlogSkeleton />
        )}
      </Container>
    </>
  );
};

export default BlogList;
