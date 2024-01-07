import { useMutation } from '@tanstack/react-query';
import { useCallback } from 'react';

import Button from '~/common/components/Button';
import Group from '~/common/components/Group';

import EmailInput from '../EmailInput';
import PasswordInput from '../PasswordInput';
import UsernameInput from '../UsernameInput';

const API_HOST = import.meta.env.VITE_API_HOST;

interface RegisterData {
  email: string;
  fullName: string;
  password: string;
}

const RegisterForm = () => {
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

      const elements = e.currentTarget;
      const email = elements.email.value;
      const fullName = elements.fullName.value;
      const password = elements.password.value;
      mutation.mutate({ email, fullName, password });
    },
    [mutation],
  );

  return (
    <form onSubmit={handleSubmit}>
      <Group direction="columns" spacing="md">
        <EmailInput mutation={mutation} />
        <UsernameInput />
        <PasswordInput />
        <Button
          loading={mutation.isPending}
          type="submit"
          fullwidth={true}
          disabled={mutation.isPending}
        >
          회원가입
        </Button>
      </Group>
    </form>
  );
};

export default RegisterForm;
