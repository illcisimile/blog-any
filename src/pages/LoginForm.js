import { Helmet } from 'react-helmet-async';
import { useField } from '../hooks';
import { useDispatch } from 'react-redux';
import { loginUser } from '../reducers/userReducer';
import { useNavigate } from 'react-router-dom';

import Container from '../components/Container';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const username = useField('text');
  const password = useField('password');

  const handleLogin = async (event) => {
    event.preventDefault();

    const credentials = {
      username: username.input.value,
      password: password.input.value,
    };

    dispatch(loginUser(credentials))
      .then(() => navigate('/'))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Helmet>
        <title>log in | blog: any</title>
      </Helmet>
      <Container semantic='main'>
        <div className='flex flex-col items-center p-8'>
          <h1 className='mb-8 text-xl'>log in to your account</h1>
          <form onSubmit={handleLogin}>
            <div className='mb-4'>
              <label className='block text-center'>username</label>
              <input
                {...username.input}
                className='mt-2 w-96 rounded-md border border-gray-300 px-3 py-2 text-center placeholder-gray-400 focus:outline-none'
                placeholder='jack'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-center'>password</label>
              <input
                {...password.input}
                className='mt-2 w-96 rounded-md border border-gray-300 px-3 py-2 text-center placeholder-gray-400 focus:outline-none'
                placeholder='****'
              />
            </div>
            <button
              className='w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-500'
              type='submit'
            >
              log in
            </button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default LoginForm;
