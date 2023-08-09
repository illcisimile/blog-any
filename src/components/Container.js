const Container = ({ children, semantic }) => {
  switch (semantic) {
    case 'header':
      return (
        <header>
          <div className='container mx-auto max-w-4xl'>{children}</div>
        </header>
      );
    case 'main':
      return (
        <main>
          <div className='container mx-auto max-w-4xl'>{children}</div>
        </main>
      );
    case 'footer':
      return (
        <footer>
          <div className='container mx-auto max-w-4xl'>{children}</div>
        </footer>
      );
    default:
      <div className='container mx-auto max-w-4xl'>{children}</div>;
  }
};

export default Container;
