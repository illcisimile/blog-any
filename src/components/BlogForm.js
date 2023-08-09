import { useField } from '../hooks';

import Container from './Container';
import BlogEditor from './BlogEditor';

const BlogForm = () => {
  const title = useField('text');
  const description = useField('text');
  const content = useField('text');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(content.value);
  };

  return (
    <Container semantic='main'>
      <div className='p-8'>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block'>Title</label>
            <input
              {...title}
              className='mt-1 w-full rounded-md px-3 py-2 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400'
              placeholder='Hello, world!'
            />
          </div>
          <div className='mb-4'>
            <label className='block'>Description</label>
            <input
              {...description}
              className='mt-1 w-full rounded-md px-3 py-2 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400'
              placeholder='Some say polymath; some say dilettante. I specialize in everything.'
            />
          </div>
          <div className='mb-4'>
            <label className='mb-1 block'>Content</label>
            <BlogEditor html={content.value} handleChange={content.onChange} />
          </div>
          <button
            type='submit'
            className='w-full rounded bg-blue-600 px-4 py-2 text-white'
          >
            publish
          </button>
        </form>
      </div>
    </Container>
  );
};

export default BlogForm;
