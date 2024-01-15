import { useMutation, useQueryClient } from '@tanstack/react-query';

import {
  deleteLikeFromPost,
  postLikeAlarm,
  postLikeFromPost,
} from '~/api/post';
import Toast from '~/common/components/Toast';
import { QUERY_KEY } from '~/constants/queryKey';

const useLikeFromPost = ({ remove }: { remove: boolean }) => {
  const queryClient = useQueryClient();
  const fn = remove ? deleteLikeFromPost : postLikeFromPost;

  const likeMutation = useMutation({
    mutationFn: (id: string) => fn(id),
    onError: () => {
      Toast.show('로그인 후 이용해주세요.', 2000);
    },
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
