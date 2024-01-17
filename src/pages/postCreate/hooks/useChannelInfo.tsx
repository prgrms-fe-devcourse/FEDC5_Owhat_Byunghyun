import { useLocation } from 'react-router-dom';

import useChannelList from '~/common/hooks/queries/useChannelList';

type ChannelNameType = string | undefined;

const useChannelInfo = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const channelId = searchParams.get('channelId') || '65a0c5a44981fe0922561fe4';

  const { channelList } = useChannelList();
  const channelListAbout = channelList.find(({ _id }) => _id === channelId);

  const channelName: ChannelNameType = channelListAbout?.name;

  return { channelId, channelName };
};

export default useChannelInfo;
