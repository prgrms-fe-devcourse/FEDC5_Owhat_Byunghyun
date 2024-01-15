import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { login } from '~/api/user';
import Toast from '~/common/components/Toast';
import { OWHAT_TOKEN } from '~/constants/token';
import { BrowserStorage } from '~/utils/storage';

interface LoginParams {
  email: string;
  password: string;
}

export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ email, password }: LoginParams) =>
      login({ email, password }),
    onSuccess: data => {
      const myStorage = new BrowserStorage<string>(OWHAT_TOKEN);
      myStorage.set(data.token);
      queryClient.invalidateQueries();
      navigate('/');
      Toast.show('로그인 되었습니다. 환영합니다!', 2000);
    },
  });

  return mutation;
};
