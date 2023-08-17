import { Helmet } from 'react-helmet-async';
import { useField, useError } from '../hooks';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Container from '../components/Container';
import { useDispatch } from 'react-redux';
import { registerUser } from '../reducers/userReducer';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = useField('text');
  const username = useField('text');
  const password = useField('password');
  const confirmPassword = useField('password');

  const nameMessage = useError();
  const usernameMessage = useError();
  const passwordMessage = useError();
  const confirmPasswordMessage = useError();

  const handleRegister = (event) => {
    event.preventDefault();

    const credentials = {
      name: name.input.value,
      username: username.input.value,
      password: password.input.value,
      confirmPassword: confirmPassword.input.value,
    };

    dispatch(registerUser(credentials))
      .then(() => navigate('/'))
      .catch((error) => {
        toast.error('error signing up');
        const validationError = error.response.data.error;
        nameMessage.set(validationError.name);
        usernameMessage.set(validationError.username);
        passwordMessage.set(validationError.password);
        confirmPasswordMessage.set(validationError.confirmPassword);
      });
  };

  return (
    <>
      <Helmet>
        <title>sign up | blog: any</title>
      </Helmet>
      <Container semantic='main'>
        <div className='flex flex-col items-center p-8'>
          <h1 className='mb-8 text-xl'>sign up to get started</h1>
          <form onSubmit={handleRegister}>
            <div className='mb-4'>
              <label className='my-2 block text-center'>name</label>
              <input
                {...name.input}
                className='my-2 w-96 rounded-md border-2 border-gray-300 px-3 py-2 text-center placeholder-gray-400 focus:outline-none'
                placeholder='Jack Stratton'
              />
              <p className='text-center text-red-600'>{nameMessage.error}</p>
            </div>
            <div className='mb-4'>
              <label className='my-2 block text-center'>username</label>
              <input
                {...username.input}
                className='my-2 w-96 rounded-md border-2 border-gray-300 px-3 py-2 text-center placeholder-gray-400 focus:outline-none'
                placeholder='jack'
              />
              <p className='text-center text-red-600'>
                {usernameMessage.error}
              </p>
            </div>
            <div className='mb-4'>
              <label className='my-2 block text-center'>password</label>
              <input
                {...password.input}
                className='my-2 w-96 rounded-md border-2 border-gray-300 px-3 py-2 text-center placeholder-gray-400 focus:outline-none'
                placeholder='****'
              />
              <p className='text-center text-red-600'>
                {passwordMessage.error}
              </p>
            </div>
            <div className='mb-4'>
              <label className='my-2 block text-center'>confirm password</label>
              <input
                {...confirmPassword.input}
                className='my-2 w-96 rounded-md border-2 border-gray-300 px-3 py-2 text-center placeholder-gray-400 focus:outline-none'
                placeholder='****'
              />
              <p className='text-center text-red-600'>
                {confirmPasswordMessage.error}
              </p>
            </div>
            <div className='mb-4'>
              <p className='my-2 text-center'>
                back to{' '}
                <Link to='/signin' className='underline'>
                  sign in
                </Link>
              </p>
            </div>
            <button
              className='w-full rounded-md border-2 border-gray-300 bg-white px-4 py-2 hover:bg-black hover:text-white'
              type='submit'
            >
              sign up
            </button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default SignUpForm;
