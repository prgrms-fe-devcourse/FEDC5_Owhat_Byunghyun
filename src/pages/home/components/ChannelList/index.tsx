import { useSearchParams } from 'react-router-dom';

import { Channel } from '~/api/types/postTypes';
import Button from '~/common/components/Button';
import Carousel from '~/common/components/Carousel';

interface ChannelListProps {
  list: Channel[];
}

const ChannelList = ({ list }: ChannelListProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <Carousel
      childSize={75}
      className="border-b border-b-gray-300 px-0 pb-large"
    >
      {list.map(channel => (
        <Button
          key={channel._id}
          styleType={
            searchParams.get('channel') === channel._id ? 'primary' : 'outline'
          }
          onClick={() => setSearchParams({ channel: channel._id })}
          className="flex aspect-square items-center justify-center overflow-hidden text-ellipsis rounded-full"
        >
          {channel.name}
        </Button>
      ))}
    </Carousel>
  );
};

export default ChannelList;
