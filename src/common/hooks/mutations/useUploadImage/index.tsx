import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postUploadImage } from '~/api/image';

export const useUploadImage = () => {
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
