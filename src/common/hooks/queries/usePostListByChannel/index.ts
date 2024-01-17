import { useInfiniteQuery } from '@tanstack/react-query';

import { getPostListByChannel } from '~/api/post';
import { PostResponse } from '~/api/types/postTypes';
import { QUERY_KEY } from '~/constants/queryKey';

const usePostListByChannel = (channelId: string, offset = 0, limit = 10) => {
  const { data, isLoading, hasNextPage, fetchNextPage, isFetched } =
    useInfiniteQuery<PostResponse[]>({
      queryKey: [QUERY_KEY.POST_LIST, channelId],
      queryFn: ({ pageParam = offset }) =>
        getPostListByChannel(channelId, pageParam as number, limit),
      initialPageParam: offset,
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length < limit) return undefined;

        return pages.flat().length;
      },
    });

  return {
    postList: data?.pages.flat() || [],
    isFetched,
    isLoading,
    hasNextPage,
    fetchNextPage,
  };
};

export default usePostListByChannel;
