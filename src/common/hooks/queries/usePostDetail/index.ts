import { useQuery } from '@tanstack/react-query';

import { getPostDetail } from '~/api/post';
import { QUERY_KEY } from '~/constants/queryKey';

const usePostDetail = (postId: string) => {
  const post = useQuery({
    queryKey: [QUERY_KEY.POST_LIST, postId],
    queryFn: () => getPostDetail(postId),
  });

  return {
    postDetailData: post.data,
    postDetailLoading: post.isLoading,
  };
};
export default usePostDetail;
