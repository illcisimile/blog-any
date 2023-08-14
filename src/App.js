import { useEffect } from 'react';
import { Routes, Route, useMatch, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { initializeBlogs } from './reducers/blogReducer';
import { checkIfLoggedIn } from './reducers/userReducer';

import BlogList from './pages/BlogList';
import BlogForm from './pages/BlogForm';
import LoginForm from './pages/LoginForm';
import BlogInfo from './pages/BlogInfo';

import Navbar from './components/Navbar';
import BreakpointIndicator from './components/BreakpointIndicator';
import RegisterForm from './pages/RegisterForm';

const App = () => {
  const dispatch = useDispatch();

  const blogs = useSelector(({ blogs }) => blogs);
  const user = useSelector(({ user }) => user);

  useEffect(() => {
    dispatch(initializeBlogs());
    dispatch(checkIfLoggedIn());
  }, [dispatch]);

  const blogMatch = useMatch('/blog/:id');
  const blog = blogMatch
    ? blogs.find((blog) => blog.id === blogMatch.params.id)
    : null;

  return (
    <>
      <BreakpointIndicator />
      <Navbar user={user} />
      <Routes>
        <Route path='/' element={<BlogList blogs={blogs} />} />
        <Route
          path='/new-blog'
          element={user ? <BlogForm /> : <Navigate replace to='/login' />}
        />
        <Route
          path='/login'
          element={!user ? <LoginForm /> : <Navigate replace to='/' />}
        />
        <Route
          path='/register'
          element={!user ? <RegisterForm /> : <Navigate replace to='/' />}
        />
        <Route path='/blog/:id' element={<BlogInfo blog={blog} />} />
      </Routes>
    </>
  );
};

export default App;
