import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postUploadCoverImage } from '~/api/image';
import { QUERY_KEY } from '~/constants/queryKey';

export const useUploadCoverImage = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postUploadCoverImage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.USER] });
    },
    onError: error => {
      if (error instanceof Error) console.warn(error.message);
    },
  });

  return mutation;
};
