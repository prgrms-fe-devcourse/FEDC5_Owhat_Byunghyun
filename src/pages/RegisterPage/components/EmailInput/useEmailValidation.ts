import { useEffect, useState } from 'react';

import { User } from '~/common/api/types';

const API_HOST = 'https://kdt.frontend.5th.programmers.co.kr:5007';

const useEmailValidation = () => {
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
      const response = await fetch(`${API_HOST}/users/get-users`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('서버에서 오류 응답');
      }

      const users: User[] = await response.json();
      const isDuplicate = users.some(user => user.email === email);

      setIsEmailDuplicate(isDuplicate);

      if (isDuplicate) {
        setEmailCheckMessage('이메일이 이미 사용 중입니다.');
      } else {
        setIsEmailCheckComplete(true);
        setEmailCheckMessage('가입 가능한 이메일입니다.');
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
