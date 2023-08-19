import Container from './Container';

const BlogSkeleton = () => {
  return (
    <>
      <Container semantic='main'>
        <div className='flex h-96 items-center justify-center p-8'>
          <h1 className='text-2xl font-extrabold'>no blogs yet...</h1>
        </div>
      </Container>
    </>
  );
};

export default BlogSkeleton;
