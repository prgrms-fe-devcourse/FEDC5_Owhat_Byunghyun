import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postNotificationCreate } from '~/api/notification';
import { createComment } from '~/api/post';
import { QUERY_KEY } from '~/constants/queryKey';

const useCreateComment = ({
  postUserId,
  authUserId,
}: {
  postUserId: string;
  authUserId: string;
}) => {
  const queryClient = useQueryClient();

  const mutationCreateComment = useMutation({
    mutationFn: ({ comment, postId }: { comment: string; postId: string }) =>
      createComment({ comment, postId }),
    onSuccess: data => {
      if (postUserId !== authUserId) {
        const notificationTypeId = data._id;
        const userId = postUserId;
        const postId = data.post;
        postNotificationCreate({
          notificationType: 'COMMENT',
          notificationTypeId,
          userId,
          postId,
        });
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.POST_LIST],
      });
    },
  });

  return mutationCreateComment;
};

export default useCreateComment;
