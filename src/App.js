import { Routes, Route } from 'react-router-dom';

import BlogList from './pages/BlogList';
import BlogForm from './pages/BlogForm';
import LoginForm from './pages/LoginForm';

import Navbar from './components/Navbar';
import BreakpointIndicator from './components/BreakpointIndicator';

const App = () => {
  return (
    <>
      <BreakpointIndicator />
      <Navbar />
      <Routes>
        <Route path='/' element={<BlogList />} />
        <Route path='/new-blog' element={<BlogForm />} />
        <Route path='/login' element={<LoginForm />} />
      </Routes>
    </>
  );
};

export default App;
