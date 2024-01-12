import { useState } from 'react';

import { User } from '~/api/types/userTypes';
import { useUserListQuery } from '~/common/hooks/queries/userUserList';

const useEmailDuplicate = () => {
  const [emailCheckMessage, setEmailCheckMessage] = useState('');
  const [isEmailDuplicate, setIsEmailDuplicate] = useState(false);

  const userList = useUserListQuery();

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
    setEmailCheckMessage,
    isEmailDuplicate,
    checkDuplicateEmail,
  };
};

export default useEmailDuplicate;
