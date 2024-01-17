import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { putUpdatePassword } from '~/api/user';
import Toast from '~/common/components/Toast';

export const useUpdatePassword = () => {
  const navigate = useNavigate();
  const { mutate: updatePassword, isPending } = useMutation({
    mutationFn: putUpdatePassword,
    onSuccess: () => {
      Toast.show('비밀번호가 변경되었습니다.');

      navigate('/account');
    },
    onError: error => {
      if (error instanceof Error) console.warn(error.message);
    },
  });

  return { updatePassword, isPending };
};
