import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { postJoinUser } from '~/api/register';
import Toast from '~/common/components/Toast';

interface RegisterData {
  email: string;
  fullName: string;
  password: string;
}

export const useRegisterMutation = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (userData: RegisterData) => postJoinUser(userData),
    onSuccess: () => {
      Toast.show('회원가입이 완료되었습니다.', 2000);
      navigate('/login');
    },
  });

  return mutation;
};
