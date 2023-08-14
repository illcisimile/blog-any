import { Helmet } from 'react-helmet-async';
import { useField, useError } from '../hooks';
import { useEffect, useState, useRef } from 'react';
import { updateBlog } from '../reducers/blogReducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Container from '../components/Container';
import BlogEditor from '../components/BlogEditor';
import Loading from '../components/Loading';

const BlogUpdate = ({ blog }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const title = useField('text');
  const description = useField('text');
  const content = useField('text');
  const tag = useField('text');
  const [tags, setTags] = useState([]);
  const tagRef = useRef(null);

  const titleMessage = useError();
  const descriptionMessage = useError();
  const contentMessage = useError();
  const tagMessage = useError();

  useEffect(() => {
    if (blog) {
      title.set(blog.title);
      description.set(blog.description);
      content.set(blog.content);
      setTags(tags.concat(blog.tags));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blog]);

  if (!blog) {
    return <Loading />;
  }

  const handleUpdate = (event) => {
    event.preventDefault();

    const updatedBlogObject = {
      title: title.input.value,
      description: description.input.value,
      content: content.input.value,
      tags,
    };

    dispatch(updateBlog(blog.id, updatedBlogObject))
      .then(() => navigate(`/blog/${blog.id}`))
      .catch((error) => {
        toast.error('error updating blog');
        const validationError = error.response.data.error;
        titleMessage.set(validationError.title);
        descriptionMessage.set(validationError.description);
        contentMessage.set(validationError.content);
        tagMessage.set(null);
      });
  };

  const handleTag = (event) => {
    if (event.key !== 'Enter') return;

    tagMessage.reset();

    if (tag.input.value === '') {
      tagMessage.set('tag cannot be empty');
    } else if (
      tags.find((t) => t.toLowerCase() === tag.input.value.toLowerCase())
    ) {
      tagMessage.set('tag already added');
    } else {
      setTags(tags.concat(tag.input.value));
    }

    tag.reset();
    tagRef.current.focus();
  };

  const removeTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <>
      <Helmet>
        <title>update blog {blog.title}</title>
      </Helmet>
      <Container semantic='main'>
        <div className='p-8'>
          <h1 className='mb-4 text-center text-xl'>update blog</h1>
          <form>
            <div className='mb-4'>
              <label className='block'>title</label>
              <input
                {...title.input}
                className='my-2 w-full rounded-md border-2 border-gray-300 px-3 py-2 placeholder-gray-400 focus:outline-none'
                placeholder='Hello, world!'
              />
              <p className='text-red-600'>{titleMessage.error}</p>
            </div>
            <div className='mb-4'>
              <label className='block'>description</label>
              <input
                {...description.input}
                className='my-2 w-full rounded-md border-2 border-gray-300 px-3 py-2 placeholder-gray-400 focus:outline-none'
                placeholder='Some say polymath; some say dilettante. I specialize in everything.'
              />
              <p className='text-red-600'>{descriptionMessage.error}</p>
            </div>
            <div className='mb-4'>
              <label className='mb-2 block'>content</label>
              <BlogEditor
                html={content.input.value}
                handleChange={content.input.onChange}
              />
              <p className='text-red-600'>{contentMessage.error}</p>
            </div>
            <div className='mb-4'>
              <label className='block'>enter tag</label>
              <input
                {...tag.input}
                className='my-2 w-full rounded-md border-2 border-gray-300 px-3 py-2 placeholder-gray-400 focus:outline-none'
                placeholder='press Enter to add a new tag'
                ref={tagRef}
                onKeyUp={handleTag}
              />
              <p className='text-red-600'>{tagMessage.error}</p>
            </div>
            {tags.length > 0 && (
              <div className='mb-4 flex w-full flex-wrap items-center gap-2'>
                <label className='block'>Tags:</label>
                {tags.map((t) => (
                  <div
                    key={t}
                    className='flex gap-1 rounded-full border-2 border-black px-2 py-1 text-sm hover:bg-black hover:text-white'
                    onClick={() => removeTag(t)}
                  >
                    <p>{t}</p>
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
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </div>
                ))}
              </div>
            )}
            <button
              className='w-full rounded-md border-2 border-gray-300 bg-white px-4 py-2 hover:bg-black hover:text-white'
              type='button'
              onClick={handleUpdate}
            >
              update
            </button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default BlogUpdate;
