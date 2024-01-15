import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deletePost } from '~/api/post';
import Toast from '~/common/components/Toast';
import { QUERY_KEY } from '~/constants/queryKey';

const useDeletePost = () => {
  const queryClient = useQueryClient();

  const mutationDeletePost = useMutation({
    mutationFn: (postId: string) => deletePost(postId),
    onSuccess: () => {
      Toast.show('게시글이 삭제되었습니다.', 2000);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.POST_DETAIL],
      });
    },
  });

  return mutationDeletePost;
};

export default useDeletePost;
