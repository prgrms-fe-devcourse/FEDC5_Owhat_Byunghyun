import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { instance } from '~/api';

interface RegisterData {
  email: string;
  fullName: string;
  password: string;
}

const useMutationRegister = () => {
  const navigate = useNavigate();

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

  const mutation = useMutation({
    mutationFn: async (userData: RegisterData) => {
      return await instance.post('/signup', userData);
    },
    onSuccess: () => {
      alert('회원가입에 성공했습니다!');
      navigate('/login');
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
