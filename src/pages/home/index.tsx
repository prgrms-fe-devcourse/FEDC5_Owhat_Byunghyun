import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import useChannelList from '~/common/hooks/queries/useChannelList';
import usePostListByChannel from '~/common/hooks/queries/usePostListByChannel';
import useInfiniteScroll from '~/common/hooks/useInfiniteScroll';
import useLayout from '~/common/hooks/useLayout';

import ChannelList from './components/ChannelList';
import FeedItem from './components/FeedItem';
import PostCreateButton from './components/PostCreateButton';

export default function HomePage() {
  const { channelList } = useChannelList();
  const [searchParams] = useSearchParams();

  const channelId = searchParams.get('channel') || channelList[0]._id;

  const { changeMeta, changeBottomNavigator } = useLayout();

  const { postList, fetchNextPage, hasNextPage, isFetched } =
    usePostListByChannel(channelId);

  const refetch = () => {
    if (hasNextPage && isFetched) fetchNextPage();
  };
  useEffect(() => {
    changeBottomNavigator(true);
    changeMeta({
      title: 'Owhat!',
      left: <></>,
      right: <></>,
    });
  }, []);

  const { ref } = useInfiniteScroll<HTMLDivElement>(refetch);

  return (
    <section className="flex flex-col gap-5">
      <ChannelList list={channelList} />

      <ul className="scroll-none flex h-full flex-col gap-8 overflow-y-auto">
        {postList.map(post => (
          <FeedItem key={post._id} feed={post} />
        ))}
        <div ref={ref} />
      </ul>
      <PostCreateButton channelId={channelId} />
    </section>
  );
}
