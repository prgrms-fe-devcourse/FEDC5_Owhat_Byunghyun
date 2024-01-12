import { useEffect, useState } from 'react';

import ArrowBackButton from '~/common/components/ArrowBackButton';
import useLayout from '~/common/hooks/useLayout';

import { useRegisterMutation } from '../../common/hooks/mutations/useRegister';
import RegisterForm from './components/RegisterForm';

const RegisterPage = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const { changeMeta, changeBottomNavigator } = useLayout();

  useEffect(() => {
    changeBottomNavigator(false);
    changeMeta({
      title: '회원가입',
      left: <ArrowBackButton />,
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
