import { useMutation, useQueryClient } from '@tanstack/react-query';

import { instance } from '~/api';

export const useFollow = () => {
  const followCreate = async ({ userId }: { userId: string }) => {
    await instance.post(`/follow/create`, {
      userId,
    });
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: followCreate,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });

  return mutation;
};
