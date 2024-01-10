import { useSuspenseQuery } from '@tanstack/react-query';

import { getChannelList } from '~/api/channel';
import { Channel } from '~/api/types/postTypes';

import { QUERY_KEY } from '../queryKey';

const useChannelList = () => {
  const { data } = useSuspenseQuery<Channel[]>({
    queryKey: [QUERY_KEY.CHANNEL_LIST],
    queryFn: getChannelList,
  });

  return {
    channelList: data,
  };
};

export default useChannelList;
