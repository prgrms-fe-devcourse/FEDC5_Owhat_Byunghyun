import { useMutation, useQueryClient } from '@tanstack/react-query';

import { putUserSettings } from '~/api/user';
import { QUERY_KEY } from '~/constants/queryKey';

export const useEditAccount = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: putUserSettings,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.USER] });
    },
    onError: error => {
      if (error instanceof Error) console.warn(error.message);
    },
  });

  return mutation;
};
