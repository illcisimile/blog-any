const Blog = ({ blog }) => {
  const date = new Date(blog.createdAt);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  return (
    <>
      <div className='border-b-2 border-dashed border-b-white p-8'>
        <h2 className='text-lg font-semibold'>
          <a href='0'>{blog.title}</a>
        </h2>
        <p className='text-sm'>by {blog.author}</p>
        <p className='py-2'>{blog.description}</p>
        <div className='flex justify-between'>
          <div className='flex flex-wrap gap-2'>
            {blog.tags.map((tag) => (
              <a key={tag} href='0' className='bg-gray-950 px-2 py-1 text-sm'>
                {tag}
              </a>
            ))}
          </div>
          <p>{formattedDate}</p>
        </div>
      </div>
    </>
  );
};

export default Blog;
