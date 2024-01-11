import { useMutation, useQueryClient } from '@tanstack/react-query';

import { instance } from '~/api';

export const useUnfollow = () => {
  const followDelete = async ({ id }: { id: string }) => {
    await instance.post(`/follow/delete/${id}`);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: followDelete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });

  return mutation;
};
