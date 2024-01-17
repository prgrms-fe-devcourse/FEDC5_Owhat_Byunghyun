import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ArrowBackButton from '~/common/components/ArrowBackButton';
import Button from '~/common/components/Button';
import Group from '~/common/components/Group';
import HomeButton from '~/common/components/HomeButton';
import Text from '~/common/components/Text';
import { useLogin } from '~/common/hooks/mutations/useLogin';
import useLayout from '~/common/hooks/useLayout';

import LoginForm from './components/LoginForm';

interface LoginParams {
  email: string;
  password: string;
}

const LoginPage = () => {
  const navigate = useNavigate();

  const mutation = useLogin();
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const loginParams: LoginParams = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };

    mutation.mutate(loginParams);
  };

  const { changeMeta, changeBottomNavigator } = useLayout();

  useEffect(() => {
    changeBottomNavigator(false);
    changeMeta({
      title: '로그인',
      left: <ArrowBackButton />,
      right: <HomeButton />,
    });
  }, []);

  return (
    <>
      <Group spacing={1} direction="columns" grow className="p-small">
        <LoginForm
          onLogin={handleLogin}
          loading={mutation.isPending}
          isError={mutation.isError}
        />
      </Group>
      <div className="flex items-center justify-end pb-[50px]">
        <Text size="small" className="text-gray-500">
          아직 회원이 아니신가요?
        </Text>
        <Button styleType="ghost" onClick={() => navigate('/register')}>
          회원가입
        </Button>
      </div>
    </>
  );
};

export default LoginPage;
