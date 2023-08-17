import { Link } from 'react-router-dom';
import { formatDate } from '../utils';

const Blog = ({ blog }) => {
  return (
    <>
      <div className='border-b-2 border-dashed border-black p-8'>
        <h2 className='text-lg font-semibold'>
          <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
        </h2>
        <p className='text-sm'>by {blog.author.name}</p>
        <p className='my-2'>{blog.description}</p>
        <div className='flex justify-between'>
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
          <p>{formatDate(blog.createdAt).toLowerCase()}</p>
        </div>
      </div>
    </>
  );
};

export default Blog;
