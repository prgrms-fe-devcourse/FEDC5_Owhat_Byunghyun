import { useSearchParams } from 'react-router-dom';

const useChannelInfo = () => {
  const [searchParams] = useSearchParams();
  const channelId = searchParams.get('channel') || '65a0c5a44981fe0922561fe4';

  return { channelId };
};

export default useChannelInfo;
