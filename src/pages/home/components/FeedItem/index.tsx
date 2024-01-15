import { Link } from 'react-router-dom';

import { Like, Post } from '~/api/types/postTypes';
import Feed from '~/common/components/Feed';
import useLikeFromPost from '~/common/hooks/mutations/useLikeFromPost';
import useAuthUser from '~/common/hooks/queries/useAuthUser';

import FeedUserInfo from '../FeedUserInfo';

interface FeedItemProps {
  feed: Post;
}

const FeedItem = ({ feed }: FeedItemProps) => {
  const { user } = useAuthUser();
  const likeInfo = feed.likes.find(like => {
    if (typeof like === 'string') return false;

    return like.user === user?._id;
  });

  const likeMutation = useLikeFromPost({ remove: !!likeInfo });

  if (typeof feed.author === 'string' || typeof feed.channel === 'string')
    return <div>오류</div>;

  return (
    <li key={feed._id} className="flex flex-col gap-4">
      {/* // TODO 라우팅 주소 추후 변경의 여지 있음 */}

      <Link to={`posts/${feed._id}`}>
        <FeedUserInfo
          _id={feed.author._id}
          author={feed.author.fullName}
          channel={feed.channel.name}
          createdAt={feed.createdAt}
        />
        <Feed
          initialState={!!likeInfo}
          title={feed.title}
          comments={feed.comments as string[]}
          likes={feed.likes as string[]}
          image={feed.image as string}
          handleLike={() =>
            likeMutation.mutate(likeInfo ? (likeInfo as Like)._id : feed._id)
          }
        />
      </Link>
    </li>
  );
};

export default FeedItem;
