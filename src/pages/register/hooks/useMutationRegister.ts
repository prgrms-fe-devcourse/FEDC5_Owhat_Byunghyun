import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

import { instance } from '~/api';

interface RegisterData {
  email: string;
  fullName: string;
  password: string;
}

const useMutationRegister = () => {
  const [isEmailCompleted, setIsEmailCompleted] = useState(false);
  const [isPasswordCompleted, setIsPasswordCompleted] = useState(false);
  const [isFullNameCompleted, setIsFullNameCompleted] = useState(false);

  const handleEmailCompleted = (isValid: boolean) => {
    setIsEmailCompleted(isValid);
  };

  const handlePasswordCompleted = (isValid: boolean) => {
    setIsPasswordCompleted(isValid);
  };

  const handleFullNameCompleted = (isValid: boolean) => {
    setIsFullNameCompleted(isValid);
  };

  const registerUser = async (userData: RegisterData) => {
    const { data } = await instance.post('/signup', userData);

    return data;
  };

  const mutation = useMutation({
    mutationFn: (userData: RegisterData) => {
      return registerUser(userData);
    },
  });
  return {
    mutation,
    isEmailCompleted,
    isPasswordCompleted,
    isFullNameCompleted,
    handleEmailCompleted,
    handlePasswordCompleted,
    handleFullNameCompleted,
  };
};

export default useMutationRegister;
