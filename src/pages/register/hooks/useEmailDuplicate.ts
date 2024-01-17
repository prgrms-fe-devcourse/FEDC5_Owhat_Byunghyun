import { useState } from 'react';

import { User } from '~/api/types/userTypes';
import { ERROR, MESSAGE } from '~/constants/message';
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
      setEmailCheckMessage(ERROR.DUPLICATE_EMAIL);
    } else {
      setEmailCheckMessage(MESSAGE.POSSIBLE_EMAIL);
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
