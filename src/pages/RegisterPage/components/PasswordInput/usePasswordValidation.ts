import { useState } from 'react';

interface usePasswordValidationParams {
  onPasswordCompleted: (value: boolean) => void;
}

const usePasswordValidation = ({
  onPasswordCompleted,
}: usePasswordValidationParams) => {
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
    const isValidPassword =
      newPassword === newConfirmPassword && newPassword.length >= 8;
    setIsPasswordMatch(isValidPassword);
    onPasswordCompleted(isValidPassword);
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
