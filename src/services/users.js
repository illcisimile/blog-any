import axios from 'axios';

const baseUrl = '/api/users';

const signIn = async (credentials) => {
  const response = await axios.post(`${baseUrl}/signin`, credentials);
  return response.data;
};

const signUp = async (credentials) => {
  const response = await axios.post(`${baseUrl}/signup`, credentials);
  return response.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { signIn, signUp };
