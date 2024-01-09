import { useEffect } from 'react';

import Group from '~/common/components/Group';
import Icon from '~/common/components/Icon';
import useLayout from '~/common/hooks/useLayout';

import RegisterForm from './components/RegisterForm';

const RegisterPage = () => {
  const { changeMeta } = useLayout();

  useEffect(() => {
    changeMeta({
      title: '회원가입',
      left: <Icon id="arrow-back" className="h-4 w-4" />,
      right: '',
    });
  }, []);

  return (
    <Group direction="columns" spacing="md" grow={true}>
      <RegisterForm />
    </Group>
  );
};

export default RegisterPage;
