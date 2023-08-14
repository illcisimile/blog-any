import { useState } from 'react';

export const useField = (type) => {
  const [value, setValue] = useState('');

  const onChange = (event) => setValue(event.target.value);

  return {
    input: { type, value, onChange },
    reset: () => setValue(''),
    set: (value) => setValue(value),
  };
};

export const useError = () => {
  const [message, setMessage] = useState(null);

  return {
    error: message,
    reset: () => setMessage(null),
    set: (message) => setMessage(message),
  };
};
