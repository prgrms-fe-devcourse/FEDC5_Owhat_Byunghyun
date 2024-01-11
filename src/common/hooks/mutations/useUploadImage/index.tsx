import { useMutation, useQueryClient } from '@tanstack/react-query';

import { instance } from '~/api';
import { User } from '~/api/types/userTypes';

export const useUploadImage = () => {
  // 추후 user.ts로 이동
  const postUploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('isCover', 'false');

    await instance.post<User>(`/users/upload-photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postUploadImage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: error => {
      if (error instanceof Error) console.warn(error.message);
    },
  });

  return mutation;
};
