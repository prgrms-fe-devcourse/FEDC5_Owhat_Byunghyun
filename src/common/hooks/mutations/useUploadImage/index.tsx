import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postUploadImage } from '~/api/image';
import { QUERY_KEY } from '~/constants/queryKey';

export const useUploadImage = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postUploadImage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.USER] });
    },
    onError: error => {
      if (error instanceof Error) console.warn(error.message);
    },
  });

  return mutation;
};
