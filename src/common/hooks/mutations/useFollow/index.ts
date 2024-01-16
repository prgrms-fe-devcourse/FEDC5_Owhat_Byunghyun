import { useMutation, useQueryClient } from '@tanstack/react-query';

import { instance } from '~/api';
import { Follow } from '~/api/types/userTypes';
import { QUERY_KEY } from '~/constants/queryKey';

import useSendNotification from '../useSendNotification';

export const useFollow = () => {
  const followCreate = async ({ userId }: { userId: string }) => {
    const res = await instance.post(`/follow/create`, {
      userId,
    });

    return res;
  };

  const queryClient = useQueryClient();
  const { mutate: createNotification } = useSendNotification();

  const mutation = useMutation({
    mutationFn: followCreate,
    onSuccess: ({ data }: { data: Follow }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.USER] });

      createNotification({
        notificationType: 'FOLLOW',
        notificationTypeId: data._id,
        userId: data.user,
        postId: null,
      });
    },
  });

  return mutation;
};
