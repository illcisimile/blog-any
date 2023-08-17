import { useEffect } from 'react';
import { Routes, Route, useMatch, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { initializeBlogs } from './reducers/blogReducer';
import { checkIfLoggedIn } from './reducers/userReducer';

import BlogList from './pages/BlogList';
import BlogForm from './pages/BlogForm';
import SignInForm from './pages/SignInForm';
import BlogInfo from './pages/BlogInfo';
import BlogUpdate from './pages/BlogUpdate';

import Navbar from './components/Navbar';
import BreakpointIndicator from './components/BreakpointIndicator';
import SignUpForm from './pages/SignUpForm';
import Profile from './pages/Profile';
import ToastNotification from './components/ToastNotification';

const App = () => {
  const dispatch = useDispatch();

  const blogs = useSelector(({ blogs }) => blogs);
  const user = useSelector(({ user }) => user);

  useEffect(() => {
    dispatch(initializeBlogs());
    dispatch(checkIfLoggedIn());
  }, [dispatch]);

  const blogMatch = useMatch('/blog/:blogId');
  const foundBlog = blogMatch
    ? blogs.find((blog) => blog.id === blogMatch.params.blogId)
    : null;

  const blogsWithTagMatch = useMatch('/tag/:tag');
  const foundBlogsWithTag = blogsWithTagMatch
    ? blogs.filter((blog) => blog.tags.includes(blogsWithTagMatch.params.tag))
    : null;

  const userMatch = useMatch('/profile/:username');
  const foundUserBlogs = userMatch
    ? blogs.filter((blog) => blog.author.username === userMatch.params.username)
    : null;

  const updateBlogMatch = useMatch('/update/:blogId');
  const foundUpdateBlog = updateBlogMatch
    ? blogs.find((blog) => blog.id === updateBlogMatch.params.blogId)
    : null;

  return (
    <>
      <BreakpointIndicator />
      <ToastNotification />
      <Navbar user={user} />
      <Routes>
        <Route path='/' element={<BlogList blogs={blogs} />} />
        <Route path='/blog/:blogId' element={<BlogInfo blog={foundBlog} />} />
        <Route
          path='/tag/:tag'
          element={<BlogList blogs={foundBlogsWithTag} />}
        />

        <Route
          path='/signin'
          element={!user ? <SignInForm /> : <Navigate replace to='/' />}
        />
        <Route
          path='/signup'
          element={!user ? <SignUpForm /> : <Navigate replace to='/' />}
        />
        <Route
          path='/new-blog'
          element={user ? <BlogForm /> : <Navigate replace to='/' />}
        />
        <Route
          path='/update/:blogId'
          element={
            user ? (
              <BlogUpdate blog={foundUpdateBlog} />
            ) : (
              <Navigate replace to='/' />
            )
          }
        />
        <Route
          path='/profile/:username'
          element={<Profile userBlogs={foundUserBlogs} />}
        />
      </Routes>
    </>
  );
};

export default App;
