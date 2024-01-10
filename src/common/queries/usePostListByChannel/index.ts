import { useSuspenseQuery } from '@tanstack/react-query';

import { getPostListByChannel } from '~/api/posts';
import { Post } from '~/api/types/postTypes';

import { QUERY_KEY } from '../queryKey';

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
