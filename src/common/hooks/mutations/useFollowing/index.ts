import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteFollow, postFollow } from '~/api/follow';
import { postNotificationCreate } from '~/api/notification';
import { Follow } from '~/api/types/userTypes';
import { QUERY_KEY } from '~/constants/queryKey';

const useFollowing = (follow: boolean) => {
  const queryClient = useQueryClient();
  const fn = follow ? postFollow : deleteFollow;

  const followMutation = useMutation({
    mutationFn: (id: string) => fn(id),
    onSuccess: (data: Follow) => {
      if (follow) {
        postNotificationCreate({
          notificationType: 'FOLLOW',
          notificationTypeId: data._id,
          userId: data.user,
          postId: null,
        });
      }

      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.USER],
      });
    },
  });

  return followMutation;
};

export default useFollowing;
