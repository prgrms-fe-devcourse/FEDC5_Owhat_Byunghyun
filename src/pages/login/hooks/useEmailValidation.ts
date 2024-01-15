import { useEffect, useState } from 'react';

const useEmailValidation = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

  const validateEmail = (value: string) => {
    const isValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
      value,
    );
    setIsEmailValid(isValid);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    validateEmail(value);
  };

  useEffect(() => {
    validateEmail(email);
  }, [email]);

  return {
    email,
    isEmailValid,
    handleEmailChange,
  };
};

export default useEmailValidation;
