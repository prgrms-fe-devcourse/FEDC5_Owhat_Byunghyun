import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deletePost } from '~/api/post';
import { QUERY_KEY } from '~/constants/queryKey';

const useDeletePost = () => {
  const queryClient = useQueryClient();

  const mutationDeletePost = useMutation({
    mutationFn: (postId: string) => deletePost(postId),
    onSettled: data => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.POST_LIST, data._id],
      });
    },
  });

  return mutationDeletePost;
};

export default useDeletePost;
