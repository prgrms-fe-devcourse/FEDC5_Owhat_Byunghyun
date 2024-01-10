import { useMutation, useQueryClient } from '@tanstack/react-query';

import { instance } from '~/api';

export const useMutationUnfollow = () => {
  const followDelete = async ({ id }: { id: string }) => {
    try {
      await instance.post(`/follow/Delete/${id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
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
