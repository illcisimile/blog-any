import axios from 'axios';

const baseUrl = 'http://localhost:3001/blogs';

const getBlogs = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getBlogs,
};
