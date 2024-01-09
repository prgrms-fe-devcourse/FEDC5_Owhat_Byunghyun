import { useEffect, useState } from 'react';

import { instance } from '~/api';

import { User } from '../types';

interface useEmailValidationParams {
  onEmailCompleted: (value: boolean) => void;
}

const useEmailValidation = ({ onEmailCompleted }: useEmailValidationParams) => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isEmailDuplicate, setIsEmailDuplicate] = useState(false);
  const [emailCheckMessage, setEmailCheckMessage] = useState('');
  const [isEmailCheckComplete, setIsEmailCheckComplete] = useState(false);

  const validateEmail = (value: string) => {
    const isValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
      value,
    );
    setIsEmailValid(isValid);
  };

  const checkDuplicateId = async (email: string) => {
    try {
      const { data } = await instance.get('/users/get-users');

      const users: User[] = data;
      const isDuplicate = users.some(user => user.email === email);

      setIsEmailDuplicate(isDuplicate);

      if (isDuplicate) {
        setEmailCheckMessage('이메일이 이미 사용 중입니다.');
      } else {
        setIsEmailCheckComplete(true);
        setEmailCheckMessage('가입 가능한 이메일입니다.');
        onEmailCompleted(true);
      }
    } catch (error) {
      console.error('에러 발생:', (error as Error).message);
    }
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    validateEmail(value);
    setIsEmailDuplicate(false);
    setEmailCheckMessage('');
    setIsEmailCheckComplete(false);
  };

  useEffect(() => {
    validateEmail(email);
  }, [email]);

  return {
    email,
    isEmailValid,
    isEmailDuplicate,
    emailCheckMessage,
    isEmailCheckComplete,
    handleEmailChange,
    checkDuplicateId,
  };
};

export default useEmailValidation;
