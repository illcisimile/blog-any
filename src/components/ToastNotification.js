import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastNotification = () => {
  return (
    <ToastContainer
      position='top-center'
      closeButton={false}
      autoClose={1000}
    />
  );
};

export default ToastNotification;
