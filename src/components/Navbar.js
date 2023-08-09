import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className='container mx-auto max-w-4xl p-8 flex justify-between mb-8 flex-wrap'>
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
    </header>
  );
};

export default Navbar;
