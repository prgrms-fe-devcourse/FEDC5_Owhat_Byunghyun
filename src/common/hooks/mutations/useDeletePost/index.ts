import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deletePost } from '~/api/post';

const useDeletePost = () => {
  const queryClient = useQueryClient();

  const mutationDeletePost = useMutation({
    mutationFn: (postId: string) => deletePost(postId),
    onSettled: () => {
      queryClient.invalidateQueries();
    },
  });

  return mutationDeletePost;
};

export default useDeletePost;
