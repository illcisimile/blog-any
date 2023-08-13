import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';
import BreakpointIndicator from './components/BreakpointIndicator';

const App = () => {
  return (
    <>
      <BreakpointIndicator />
      <Navbar />
      <Routes>
        <Route path='/' element={<BlogList />} />
        <Route path='/new-blog' element={<BlogForm />} />
      </Routes>
    </>
  );
};

export default App;
