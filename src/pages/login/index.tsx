import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { instance } from '~/api';
import ArrowBackButton from '~/common/components/ArrowBackButton';
import Button from '~/common/components/Button';
import Group from '~/common/components/Group';
import Text from '~/common/components/Text';
import useLayout from '~/common/hooks/useLayout';
import { OWHAT_TOKEN } from '~/constants/queryKey';
import { BrowserStorage } from '~/utils/storage';

import LoginForm from './components/LoginForm';

interface LoginParams {
  email: string;
  password: string;
}

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const loginParams: LoginParams = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };

    mutation.mutate(loginParams);
  };

  const mutation = useMutation({
    mutationFn: (userData: LoginParams) => {
      const { email, password } = userData;
      return instance.post('/login', { email, password });
    },
    onSuccess: data => {
      const myStorage = new BrowserStorage<string>(OWHAT_TOKEN);
      myStorage.set(data.data.token);
      navigate('/');
    },
  });

  const { changeMeta, changeBottomNavigator } = useLayout();

  useEffect(() => {
    changeBottomNavigator(false);
    changeMeta({
      title: '로그인',
      left: <ArrowBackButton />,
      right: '',
    });
  }, []);

  return (
    <>
      <Group spacing={1} direction="columns" grow className="p-small">
        <LoginForm onLogin={handleLogin} loading={mutation.isPending} />
        <div className="h-[39px]">
          {mutation.isError && (
            <Text className="text-[13px] text-error">
              이메일 또는 비밀번호가 올바르지 않습니다.
              <br />
              입력한 내용을 다시 확인해 주세요.
            </Text>
          )}
        </div>
      </Group>
      <div className="flex justify-center pb-[50px]">
        <Button styleType="ghost" onClick={() => navigate('/register')}>
          회원가입
        </Button>
      </div>
    </>
  );
};

export default LoginPage;
