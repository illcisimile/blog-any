import { Link } from 'react-router-dom';

import Container from './Container';

const Navbar = () => {
  return (
    <Container semantic='header'>
      <nav className='mb-8 flex flex-wrap justify-between p-8'>
        <div>
          <h1 className='text-2xl font-bold'>
            <Link to='/'>blog: any</Link>
          </h1>
          <p className='text-lg'>my pleasure, let's rock</p>
        </div>
        <ul className='flex items-center gap-4'>
          <li>
            <Link to='/new-blog'>new blog</Link>
          </li>
          <li>
            <Link to='/'>profile</Link>
          </li>
          <li>
            <Link to='/'>log out</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
