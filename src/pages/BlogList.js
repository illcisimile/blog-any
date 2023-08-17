import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { useMatch } from 'react-router-dom';

import Blog from '../components/Blog';
import Container from '../components/Container';

const BlogList = ({ blogs, tag }) => {
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
        <div className='flex justify-end px-8'>
          <button
            type='button'
            className='flex gap-1 rounded-md border-2 border-black px-2 py-1 text-sm hover:bg-black hover:text-white'
            onClick={handleSort}
          >
            {sort}
            {sort === 'latest' ? (
              <>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='h-5 w-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-5 w-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4.5 15.75l7.5-7.5 7.5 7.5'
                />
              </svg>
            )}
          </button>
        </div>
        {sortedBlogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </Container>
    </>
  );
};

export default BlogList;
