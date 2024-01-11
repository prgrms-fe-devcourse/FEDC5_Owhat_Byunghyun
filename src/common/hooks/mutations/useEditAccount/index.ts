import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { instance } from '~/api';

export const useEditAccount = (userId: string) => {
  // 추후 user.ts로 이동
  const putUserSettings = async ({ fullName }: { fullName: string }) => {
    await instance.put(`/settings/update-user`, {
      fullName,
      username: fullName,
    });
  };

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: putUserSettings,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });

      // AccountPage merge 후 route 수정되어 작동할 예정
      navigate(`/account/${userId}`);
    },
    onError: error => {
      if (error instanceof Error) console.warn(error.message);
    },
  });

  return mutation;
};
