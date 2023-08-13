import { useState, useRef } from 'react';
import { useField } from '../hooks';
import { Helmet } from 'react-helmet-async';

import Container from '../components/Container';
import BlogEditor from '../components/BlogEditor';

const BlogForm = () => {
  const title = useField('text');
  const description = useField('text');
  const content = useField('text');
  const tag = useField('text');
  const [tags, setTags] = useState([]);
  const tagRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      title.input.value,
      description.input.value,
      content.input.value,
      tags,
    );
  };

  const handleTag = (event) => {
    if (event.key !== 'Enter') return;

    if (tag.input.value === '') {
      alert('cannot be empty');
    } else if (
      tags.find((t) => t.toLowerCase() === tag.input.value.toLowerCase())
    ) {
      alert('already added');
    } else {
      setTags(tags.concat(tag.input.value));
    }

    tag.reset();
    tagRef.current.focus();
  };

  const removeTag = (val) => {
    console.log(val, '1');
  };

  return (
    <>
      <Helmet>
        <title>new blog</title>
      </Helmet>
      <Container semantic='main'>
        <div className='p-8'>
          <form>
            <div className='mb-4'>
              <label className='block'>title</label>
              <input
                {...title.input}
                className='mt-2 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:outline-none'
                placeholder='Hello, world!'
              />
            </div>
            <div className='mb-4'>
              <label className='block'>description</label>
              <input
                {...description.input}
                className='mt-2 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:outline-none'
                placeholder='Some say polymath; some say dilettante. I specialize in everything.'
              />
            </div>
            <div className='mb-4'>
              <label className='mb-2 block'>content</label>
              <BlogEditor
                html={content.input.value}
                handleChange={content.input.onChange}
              />
            </div>
            <div className='mb-4'>
              <label className='block'>enter tag</label>
              <input
                {...tag.input}
                className='mt-2 w-full rounded-md border border-r-0 border-l-gray-300 px-3 py-2 placeholder-gray-400 focus:outline-none'
                placeholder='press Enter to add a new tag'
                ref={tagRef}
                onKeyUp={handleTag}
              />
            </div>
            {tags.length > 0 && (
              <div className='mb-4 flex w-full flex-wrap items-center gap-2'>
                <label className='block'>Tags:</label>
                {tags.map((t) => (
                  <div
                    key={t}
                    className='bg-gray-950 px-2 py-1 text-sm text-white'
                    onClick={() => removeTag(t)}
                  >
                    {t}
                  </div>
                ))}
              </div>
            )}
            <button
              className='w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-500'
              type='button'
              onClick={handleSubmit}
            >
              publish
            </button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default BlogForm;
