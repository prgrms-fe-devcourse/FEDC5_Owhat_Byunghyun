import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postUploadCoverImage } from '~/api/image';

export const useUploadCoverImage = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postUploadCoverImage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: error => {
      if (error instanceof Error) console.warn(error.message);
    },
  });

  return mutation;
};
