const Container = ({ children, semantic }) => {
  switch (semantic) {
    case 'header':
      return (
        <header>
          <div className='mx-auto max-w-4xl'>{children}</div>
        </header>
      );
    case 'main':
      return (
        <main>
          <div className='mx-auto max-w-4xl'>{children}</div>
        </main>
      );
    case 'footer':
      return (
        <footer>
          <div className='mx-auto max-w-4xl'>{children}</div>
        </footer>
      );
    default:
      <div className='mx-auto max-w-4xl'>{children}</div>;
  }
};

export default Container;
