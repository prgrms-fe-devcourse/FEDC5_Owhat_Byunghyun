import { useSearchParams } from 'react-router-dom';

import { Channel } from '~/api/types/postTypes';
import Avatar from '~/common/components/Avatar';
import Carousel from '~/common/components/Carousel';
import { cn } from '~/utils/cn';

interface ChannelListProps {
  list: Channel[];
}

const ChannelList = ({ list }: ChannelListProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getChannelItem = (channel: Channel, idx: number) => {
    const isDefaultChannel = idx === 0;
    const isCurrentChannel = searchParams.get('channel') === channel._id;

    return cn(
      isDefaultChannel ||
        (isCurrentChannel && searchParams.get('channel') === null)
        ? 'ring-2 ring-primary'
        : 'contrast-50 grayscale-[80%]',
    );
  };

  return (
    <Carousel
      childSize={55}
      className="border-b border-b-gray-300 pb-large"
      groupGap={20}
    >
      {list.map((channel, idx) => (
        <Avatar
          key={channel._id}
          src={channel.description}
          shape="circle"
          size="auto"
          onClick={() => setSearchParams({ channel: channel._id })}
          className={getChannelItem(channel, idx)}
        />
      ))}
    </Carousel>
  );
};

export default ChannelList;
