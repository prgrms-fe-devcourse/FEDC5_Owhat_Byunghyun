import { useCallback } from 'react';

import Button from '~/common/components/Button';
import Group from '~/common/components/Group';

import useMutationRegister from '../../hooks/useMutationRegister';
import EmailInput from '../EmailInput';
import PasswordInput from '../PasswordInput';
import UsernameInput from '../UsernameInput';

const RegisterForm = () => {
  const {
    mutation,
    isEmailCompleted,
    isPasswordCompleted,
    isFullNameCompleted,
    handleEmailCompleted,
    handlePasswordCompleted,
    handleFullNameCompleted,
  } = useMutationRegister();

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
    <form onSubmit={handleSubmit} className="p-small">
      <Group direction="columns" spacing="md" grow={true}>
        <EmailInput
          mutation={mutation}
          onEmailCompleted={handleEmailCompleted}
        />
        <UsernameInput onFullNameCompleted={handleFullNameCompleted} />
        <PasswordInput onPasswordCompleted={handlePasswordCompleted} />
        <div className="fixed bottom-0 left-0 p">
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
        </div>
      </Group>
    </form>
  );
};

export default RegisterForm;
