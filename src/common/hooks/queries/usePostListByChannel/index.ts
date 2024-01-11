import { useSuspenseQuery } from '@tanstack/react-query';

import { getPostListByChannel } from '~/api/post';
import { Post } from '~/api/types/postTypes';
import { QUERY_KEY } from '~/constants/queryKey';

const usePostListByChannel = (channelId: string) => {
  const { data } = useSuspenseQuery<Post[]>({
    queryKey: [QUERY_KEY.POST_LIST, channelId],
    queryFn: () => getPostListByChannel(channelId),
  });

  return {
    postList: data,
  };
};

export default usePostListByChannel;
