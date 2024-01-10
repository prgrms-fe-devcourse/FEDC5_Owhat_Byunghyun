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
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    confirmPassword && validatePasswordMatch(value, confirmPassword);
    validatePasswordStrength(value);
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
    validatePasswordMatch(password, value);
  };

  const validatePasswordMatch = (
    newPassword: string,
    newConfirmPassword: string,
  ) => {
    const isMatchPassword = newPassword === newConfirmPassword;
    const isValidPassword =
      newPassword.length >= 8 &&
      /[a-zA-Z]/.test(newPassword) &&
      /\d/.test(newPassword) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(newPassword);
    setIsPasswordMatch(isMatchPassword);
    onPasswordCompleted(isValidPassword && isMatchPassword);
  };

  const validatePasswordStrength = (newPassword: string) => {
    //영어 대/소문자, 숫자, 특수문자 포함
    const isValid =
      newPassword.length >= 8 &&
      /[a-zA-Z]/.test(newPassword) &&
      /\d/.test(newPassword) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(newPassword);
    setIsPasswordValid(isValid);
  };

  return {
    password,
    confirmPassword,
    isPasswordMatch,
    isPasswordValid,
    handlePasswordChange,
    handleConfirmPasswordChange,
  };
};

export default usePasswordValidation;
