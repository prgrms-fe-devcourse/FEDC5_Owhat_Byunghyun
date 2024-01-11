import { useState } from 'react';

import { useUserListQuery } from '~/common/hooks/queries/useUserList';

import { User } from '../types';

const useEmailDuplicate = () => {
  const [emailCheckMessage, setEmailCheckMessage] = useState('');
  const [isEmailDuplicate, setIsEmailDuplicate] = useState(false);

  const data = useUserListQuery();

  const checkDuplicateEmail = (email: string) => {
    try {
      const users: User[] = data;
      const isDuplicate = users.some(user => user.email === email);

      setIsEmailDuplicate(isDuplicate);

      if (isDuplicate) {
        setEmailCheckMessage('이메일이 이미 사용 중입니다.');
      } else {
        setEmailCheckMessage('가입 가능한 이메일입니다.');
      }
    } catch (error) {
      console.error('에러 발생:', (error as Error).message);
    }
  };

  return {
    emailCheckMessage,
    setEmailCheckMessage,
    isEmailDuplicate,
    checkDuplicateEmail,
  };
};

export default useEmailDuplicate;
