import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

interface RegisterData {
  email: string;
  fullName: string;
  password: string;
}
const API_HOST = import.meta.env.VITE_BASE_URL;
const PORT = import.meta.env.VITE_PORT;

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
    const response = await fetch(`${API_HOST}:${PORT}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }

    return response.json();
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
