import { useState } from 'react';

const usePasswordValidation = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    validatePasswordMatch(value, confirmPassword);
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
    validatePasswordMatch(password, value);
  };

  const validatePasswordMatch = (
    newPassword: string,
    newConfirmPassword: string,
  ) => {
    setIsPasswordMatch(newPassword === newConfirmPassword);
  };

  return {
    password,
    confirmPassword,
    isPasswordMatch,
    handlePasswordChange,
    handleConfirmPasswordChange,
  };
};

export default usePasswordValidation;
