import { useEffect, useState } from 'react';

import Icon from '~/common/components/Icon';
import useLayout from '~/common/hooks/useLayout';

import RegisterForm from './components/RegisterForm';
import { useRegisterMutation } from './hooks/queries/useRegisterMutation';

const RegisterPage = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const { changeMeta } = useLayout();

  useEffect(() => {
    changeMeta({
      title: '회원가입',
      left: <Icon id="arrow-back" className="h-4 w-4" />,
      right: '',
    });
  }, []);

  const mutation = useRegisterMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isCompleted) return;

    const elements = e.currentTarget;
    const email = elements.email.value;
    const fullName = elements.username.value;
    const password = elements.password.value;
    mutation.mutate({ email, fullName, password });
  };

  const handleFormCompleted = (isValid: boolean) => {
    setIsCompleted(isValid);
  };

  return (
    <RegisterForm
      mutation={mutation}
      onRegisterCompleted={handleFormCompleted}
      handleSubmit={handleSubmit}
    />
  );
};

export default RegisterPage;
