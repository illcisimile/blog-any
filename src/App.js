import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<BlogList />} />
        <Route path='/new-blog' element={<BlogForm />} />
      </Routes>
    </>
  );
};

export default App;
