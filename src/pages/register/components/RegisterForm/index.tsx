import { useCallback } from 'react';

import Button from '~/common/components/Button';
import Group from '~/common/components/Group';

import { useRegisterMutation } from '../../hooks/queries/useRegisterMutation';
import useMutationRegister from '../../hooks/useRegisterValidation';
import EmailInput from '../EmailInput';
import PasswordInput from '../PasswordInput';
import UsernameInput from '../UsernameInput';

const RegisterForm = () => {
  const {
    isEmailCompleted,
    isPasswordCompleted,
    isFullNameCompleted,
    handleEmailCompleted,
    handlePasswordCompleted,
    handleFullNameCompleted,
  } = useMutationRegister();

  const mutation = useRegisterMutation();

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
      <Group
        direction="columns"
        spacing="md"
        grow={true}
        className="pb-[100px]"
      >
        <EmailInput
          mutation={mutation}
          onEmailCompleted={handleEmailCompleted}
        />
        <UsernameInput onFullNameCompleted={handleFullNameCompleted} />
        <PasswordInput onPasswordCompleted={handlePasswordCompleted} />
      </Group>
      <div className="fixed bottom-0 left-0 w-full p">
        <Button
          loading={mutation.isPending}
          type="submit"
          fullwidth={true}
          disabled={
            mutation.isPending ||
            !(isEmailCompleted && isPasswordCompleted && isFullNameCompleted)
          }
          className="max-w-[360px]"
        >
          회원가입
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
