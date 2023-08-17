import { Helmet } from 'react-helmet-async';
import { formatDate } from '../utils';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Container from '../components/Container';

const BlogInfo = ({ blog }) => {
  const user = useSelector(({ user }) => user);

  return (
    <>
      <Helmet>
        <title>
          {blog.title}: {blog.description} | blog: any
        </title>
      </Helmet>
      <Container semantic='main'>
        <div className='p-8'>
          <div className='flex flex-wrap items-start justify-between gap-2'>
            <div>
              <h2 className='text-lg font-semibold'>{blog.title} </h2>
              <p className='text-sm'>by {blog.author.name}</p>
            </div>
            {user && user.username === blog.author.username && (
              <Link
                to={`/update/${blog.id}`}
                className='rounded-full border-2 border-black px-2 py-1 text-sm hover:bg-black hover:text-white'
              >
                update blog
              </Link>
            )}
          </div>
          <p className='my-2'>{blog.description}</p>
          <div className='flex flex-wrap gap-2'>
            {blog.tags.map((tag) => (
              <Link
                to={`/tag/${tag}`}
                key={tag}
                className='rounded-full border-2 border-black px-2 py-1 text-sm hover:bg-black hover:text-white'
              >
                {tag}
              </Link>
            ))}
          </div>

          <div className='my-4'>
            <p className='text-sm italic'>
              created on {formatDate(blog.createdAt).toLowerCase()}
            </p>
            {blog.updatedAt && (
              <p className='text-sm italic'>
                last modified on {formatDate(blog.createdAt).toLowerCase()}
              </p>
            )}
          </div>
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </Container>
    </>
  );
};

export default BlogInfo;
