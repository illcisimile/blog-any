import axios from 'axios';

const baseUrl = '/api/blogs';

let token = null;
let config = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
  config = {
    headers: { Authorization: token },
  };
};

const getBlogs = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createBlog = async (blogObject) => {
  const response = await axios.post(baseUrl, blogObject, config);
  return response.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  setToken,
  getBlogs,
  createBlog,
};
