import { useMutation, useQueryClient } from '@tanstack/react-query';

import { instance } from '~/api';

export const useMutationFollow = () => {
  const followCreate = async ({ id }: { id: string }) => {
    try {
      await instance.post(`/follow/create/${id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
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
