import { createSlice } from '@reduxjs/toolkit';
import blogService from '../services/blogs';

const blogSlice = createSlice({
  name: 'blogs',
  initialState: [],
  reducers: {
    setBlogs(state, action) {
      return action.payload;
    },
    appendBlog(state, action) {
      state.push(action.payload);
    },
  },
});

export const { setBlogs, appendBlog } = blogSlice.actions;

export const initializeBlogs = () => {
  return async (dispatch) => {
    await blogService.getBlogs().then((blogs) => dispatch(setBlogs(blogs)));
  };
};

export const newBlog = (blogObject) => {
  return async (dispatch) => {
    await blogService.createBlog(blogObject).then((blog) => {
      dispatch(appendBlog(blog));
    });
  };
};

export default blogSlice.reducer;
