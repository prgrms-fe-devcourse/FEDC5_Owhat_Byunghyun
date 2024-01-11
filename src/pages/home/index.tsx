import { useSearchParams } from 'react-router-dom';

import useChannelList from '~/common/hooks/queries/useChannelList';
import usePostListByChannel from '~/common/hooks/queries/usePostListByChannel';

import ChannelList from './components/ChannelList';
import FeedItem from './components/FeedItem';

export default function HomePage() {
  const { channelList } = useChannelList();
  const [searchParams] = useSearchParams();

  const { postList } = usePostListByChannel(
    searchParams.get('channel') || channelList[0]._id,
  );

  return (
    <section className="flex flex-col gap-5">
      <ChannelList list={channelList} />

      <ul className="scroll-none flex h-full flex-col gap-12 overflow-y-auto">
        {postList.map(post => (
          <FeedItem key={post._id} feed={post} />
        ))}
      </ul>
    </section>
  );
}
