import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postNotificationCreate } from '~/api/notification';
import { deleteLikeFromPost, postLikeFromPost } from '~/api/post';
import Toast from '~/common/components/Toast';
import { QUERY_KEY } from '~/constants/queryKey';

const useLikeFromPost = ({
  remove,
  authUserId,
  postUserId,
}: {
  remove: boolean;
  authUserId: string | undefined;
  postUserId: string;
}) => {
  const queryClient = useQueryClient();
  const fn = remove ? deleteLikeFromPost : postLikeFromPost;

  const likeMutation = useMutation({
    mutationFn: (id: string) => fn(id),
    onSuccess: data => {
      if (remove || authUserId === postUserId) return;

      const notificationTypeId = data._id;
      const userId = postUserId!;
      const postId = data.post;
      postNotificationCreate({
        notificationType: 'LIKE',
        notificationTypeId,
        userId,
        postId,
      });
    },
    onError: () => {
      Toast.show('로그인 후 이용해주세요.', 2000);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.POST_LIST],
      });
    },
  });

  return likeMutation;
};

export default useLikeFromPost;
