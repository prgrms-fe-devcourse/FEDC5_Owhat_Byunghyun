import { useState } from 'react';

import { User } from '~/api/types/userTypes';
interface useEmailDuplicateParams {
  userList: User[];
}

const useEmailDuplicate = ({ userList }: useEmailDuplicateParams) => {
  const [emailCheckMessage, setEmailCheckMessage] = useState('');
  const [isEmailDuplicate, setIsEmailDuplicate] = useState(true);

  const checkDuplicateEmail = (email: string) => {
    const users: User[] = userList;
    const isDuplicate = users.some(user => user.email === email);

    setIsEmailDuplicate(isDuplicate);
    if (isDuplicate) {
      setEmailCheckMessage('이메일이 이미 사용 중입니다.');
    } else {
      setEmailCheckMessage('가입 가능한 이메일입니다.');
    }
  };

  return {
    emailCheckMessage,
    setIsEmailDuplicate,
    setEmailCheckMessage,
    isEmailDuplicate,
    checkDuplicateEmail,
  };
};

export default useEmailDuplicate;
