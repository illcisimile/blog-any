import Container from './Container';

const Loading = () => {
  return (
    <>
      <Container semantic='main'>
        <div className='flex h-96 items-center justify-center p-4'>
          <h1 className='text-2xl font-extrabold'>loading...</h1>
        </div>
      </Container>
    </>
  );
};

export default Loading;
