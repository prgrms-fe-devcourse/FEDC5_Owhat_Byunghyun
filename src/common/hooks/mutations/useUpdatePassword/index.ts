import { useMutation } from '@tanstack/react-query';

import { putUpdatePassword } from '~/api/user';

export const useUpdatePassword = () => {
  const { mutate: updatePassword } = useMutation({
    mutationFn: putUpdatePassword,
    onSuccess: () => {
      alert('비밀번호가 변경되었습니다.');
    },
    onError: error => {
      if (error instanceof Error) console.warn(error.message);
    },
  });

  return { updatePassword };
};
