import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteLikeFromPost, postLikeFromPost } from '~/api/post';
import { QUERY_KEY } from '~/constants/queryKey';

const useLikeFromPost = ({ remove }: { remove: boolean }) => {
  const queryClient = useQueryClient();
  const fn = remove ? deleteLikeFromPost : postLikeFromPost;

  const { mutate } = useMutation({
    mutationFn: (id: string) => fn(id),
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.POST_LIST],
      });
    },
  });

  return {
    mutateLike: mutate,
  };
};

export default useLikeFromPost;
