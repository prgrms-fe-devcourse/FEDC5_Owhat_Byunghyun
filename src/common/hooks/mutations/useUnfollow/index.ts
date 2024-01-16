import { useMutation, useQueryClient } from '@tanstack/react-query';

import { instance } from '~/api';
import { QUERY_KEY } from '~/constants/queryKey';

export const useUnfollow = () => {
  const followDelete = async ({ id }: { id: string }) => {
    await instance.delete(`/follow/delete`, {
      data: {
        id,
      },
    });
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: followDelete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.USER] });
    },
  });

  return mutation;
};
