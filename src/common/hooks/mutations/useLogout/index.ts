import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { postLogout } from '~/api/register';
import Toast from '~/common/components/Toast';
import { OWHAT_TOKEN } from '~/constants/token';
import { BrowserStorage } from '~/utils/storage';

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout } = useMutation({
    mutationFn: postLogout,
    onSuccess: () => {
      const storage = new BrowserStorage(OWHAT_TOKEN);
      storage.clear();
      queryClient.invalidateQueries();

      navigate('/');
      Toast.show('로그아웃 되었습니다.', 2000);
    },
  });

  return { logout };
};
