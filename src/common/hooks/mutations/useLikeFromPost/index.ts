import { useMutation, useQueryClient } from '@tanstack/react-query';

import {
  deleteLikeFromPost,
  postLikeAlarm,
  postLikeFromPost,
} from '~/api/post';
import { QUERY_KEY } from '~/constants/queryKey';

const useLikeFromPost = ({ remove }: { remove: boolean }) => {
  const queryClient = useQueryClient();
  const fn = remove ? deleteLikeFromPost : postLikeFromPost;

  const likeMutation = useMutation({
    mutationFn: (id: string) => fn(id),
    onSuccess: data => {
      if (!remove) {
        const likeId = data._id;
        const userId = data.user;
        const postId = data.post;
        postLikeAlarm({ likeId, userId, postId });
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.POST_LIST],
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.POST_DETAIL],
      });
    },
  });

  return likeMutation;
};

export default useLikeFromPost;
