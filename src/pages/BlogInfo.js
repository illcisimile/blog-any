import { Helmet } from 'react-helmet-async';
import { formatDate } from '../utils';

import Container from '../components/Container';
import Loading from '../components/Loading';

const BlogInfo = ({ blog }) => {
  if (!blog) {
    return <Loading />;
  }

  return (
    <>
      <Helmet>
        <title>
          {blog.title}: {blog.description} | blog: any
        </title>
      </Helmet>
      <Container semantic='main'>
        <div className='p-8'>
          <h2 className='text-lg font-semibold'>{blog.title} </h2>
          <p className='text-sm'>by {blog.author.name}</p>
          <div className='my-2 flex flex-wrap gap-2'>
            {blog.tags.map((tag) => (
              <a key={tag} href='0' className='bg-gray-950 px-2 py-1 text-sm'>
                {tag}
              </a>
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
          <div
            className='text-white'
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </Container>
    </>
  );
};

export default BlogInfo;
