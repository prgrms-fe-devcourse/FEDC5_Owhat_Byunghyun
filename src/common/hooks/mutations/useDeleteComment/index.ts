import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteComment } from '~/api/post';
import Toast from '~/common/components/Toast';
import { QUERY_KEY } from '~/constants/queryKey';

const useDeleteComment = () => {
  const queryClient = useQueryClient();

  const mutationDeleteComment = useMutation({
    mutationFn: (commnetId: string) => deleteComment(commnetId),
    onSuccess: () => {
      Toast.show('댓글이 삭제되었습니다.', 2000);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.POST_DETAIL],
      });
    },
  });

  return mutationDeleteComment;
};

export default useDeleteComment;
