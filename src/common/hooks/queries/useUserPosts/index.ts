import { useQuery } from '@tanstack/react-query';

import { getPostListByAuthor } from '~/api/post';
import { QUERY_KEY } from '~/constants/queryKey';

export const useUserPosts = (id: string) => {
  const { data: userPosts, isError } = useQuery({
    queryKey: [QUERY_KEY.POST_LIST, id],
    queryFn: () => getPostListByAuthor(id),
  });

  return { userPosts, isError };
};
