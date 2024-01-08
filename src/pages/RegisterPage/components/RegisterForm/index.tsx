import { useMutation } from '@tanstack/react-query';
import { useCallback, useState } from 'react';

import Button from '~/common/components/Button';
import Group from '~/common/components/Group';

import EmailInput from '../EmailInput';
import PasswordInput from '../PasswordInput';
import UsernameInput from '../UsernameInput';

const API_HOST = import.meta.env.VITE_BASE_URL;

interface RegisterData {
  email: string;
  fullName: string;
  password: string;
}

const RegisterForm = () => {
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

      if (!isEmailCompleted || !isPasswordCompleted || !isFullNameCompleted)
        return;

      const elements = e.currentTarget;
      const email = elements.email.value;
      const fullName = elements.fullName.value;
      const password = elements.password.value;
      mutation.mutate({ email, fullName, password });
    },
    [mutation, isEmailCompleted, isPasswordCompleted, isFullNameCompleted],
  );

  return (
    <form onSubmit={handleSubmit}>
      <Group direction="columns" spacing="md">
        <EmailInput
          mutation={mutation}
          onEmailCompleted={handleEmailCompleted}
        />
        <UsernameInput onFullNameCompleted={handleFullNameCompleted} />
        <PasswordInput onPasswordCompleted={handlePasswordCompleted} />
        <Button
          loading={mutation.isPending}
          type="submit"
          fullwidth={true}
          disabled={
            mutation.isPending ||
            !(isEmailCompleted && isPasswordCompleted && isFullNameCompleted)
          }
        >
          회원가입
        </Button>
      </Group>
    </form>
  );
};

export default RegisterForm;
