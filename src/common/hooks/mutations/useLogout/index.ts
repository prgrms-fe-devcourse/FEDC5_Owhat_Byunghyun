import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { postLogout } from '~/api/register';
import { OWHAT_TOKEN } from '~/constants/token';
import { BrowserStorage } from '~/utils/storage';

export const useLogout = () => {
  const navigate = useNavigate();

  const { mutate: logout } = useMutation({
    mutationFn: postLogout,
    onSuccess: () => {
      const storage = new BrowserStorage(OWHAT_TOKEN);
      storage.clear();

      navigate('/');
      // 토스트 컴포넌트 추가 시 alert 대신 사용
      alert('로그아웃 되었습니다.');
    },
  });

  return { logout };
};
