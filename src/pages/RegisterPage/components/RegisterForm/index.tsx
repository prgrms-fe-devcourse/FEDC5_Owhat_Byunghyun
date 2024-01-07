import { useMutation } from '@tanstack/react-query';
import { useCallback } from 'react';

import Button from '~/common/components/Button';
import Group from '~/common/components/Group';

import EmailInput from '../EmailInput';
import useEmailValidation from '../EmailInput/useEmailValidation';
import PasswordInput from '../PasswordInput';
import usePasswordValidation from '../PasswordInput/usePasswordValidation';
import UsernameInput from '../UsernameInput';
import useUsernameValidation from '../UsernameInput/useNameValidation';

const API_HOST = import.meta.env.VITE_API_HOST;

interface RegisterData {
  email: string;
  fullName: string;
  password: string;
}

const RegisterForm = () => {
  const {
    email,
    isEmailValid,
    isEmailDuplicate,
    emailCheckMessage,
    isEmailCheckComplete,
    handleEmailChange,
    checkDuplicateId,
  } = useEmailValidation();

  const {
    password,
    confirmPassword,
    isPasswordMatch,
    handlePasswordChange,
    handleConfirmPasswordChange,
  } = usePasswordValidation();

  const {
    username,
    isUsernameValid,
    setUsername: setUsernameValidation,
  } = useUsernameValidation();

  const registerUser = async (userData: RegisterData) => {
    const response = await fetch(`${API_HOST}/signup`, {
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

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!isPasswordMatch || !isEmailValid || isEmailDuplicate) return;

      const elements = e.currentTarget;
      const email = elements.email.value;
      const fullName = elements.fullName.value;
      const password = elements.password.value;
      mutation.mutate({ email, fullName, password });
    },
    [mutation, isPasswordMatch, isEmailValid, isEmailDuplicate],
  );

  return (
    <form onSubmit={handleSubmit}>
      <Group direction="columns" spacing="md">
        <EmailInput
          email={email}
          handleEmailChange={handleEmailChange}
          mutation={mutation}
          checkDuplicateId={checkDuplicateId}
          isEmailValid={isEmailValid}
          isEmailCheckComplete={isEmailCheckComplete}
          isEmailDuplicate={isEmailDuplicate}
          emailCheckMessage={emailCheckMessage}
        />
        <UsernameInput
          username={username}
          setUsernameValidation={setUsernameValidation}
          isUsernameValid={isUsernameValid}
        />
        <PasswordInput
          password={password}
          handlePasswordChange={handlePasswordChange}
          confirmPassword={confirmPassword}
          handleConfirmPasswordChange={handleConfirmPasswordChange}
          isPasswordMatch={isPasswordMatch}
        />
        <Button
          loading={mutation.isPending}
          type="submit"
          fullwidth={true}
          disabled={
            mutation.isPending ||
            !isEmailValid ||
            isEmailDuplicate ||
            !username ||
            !isUsernameValid ||
            !password ||
            !confirmPassword ||
            !isPasswordMatch
          }
        >
          회원가입
        </Button>
      </Group>
    </form>
  );
};

export default RegisterForm;
