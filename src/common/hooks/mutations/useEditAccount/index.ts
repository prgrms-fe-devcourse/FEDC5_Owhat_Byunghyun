import { useMutation, useQueryClient } from '@tanstack/react-query';

import { putUserSettings } from '~/api/user';

export const useEditAccount = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: putUserSettings,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: error => {
      if (error instanceof Error) console.warn(error.message);
    },
  });

  return mutation;
};
