import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteComment } from '~/api/post';
import { QUERY_KEY } from '~/constants/queryKey';

const useDeleteComment = () => {
  const queryClient = useQueryClient();

  const mutationDeleteComment = useMutation({
    mutationFn: (commentId: string) => deleteComment(commentId),
    onSettled: data => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.POST_LIST, data.post],
      });
    },
  });

  return mutationDeleteComment;
};

export default useDeleteComment;
