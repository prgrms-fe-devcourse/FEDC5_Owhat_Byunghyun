import { Link } from 'react-router-dom';

import { Like, Post } from '~/api/types/postTypes';
import Feed from '~/common/components/Feed';
import useLikeFromPost from '~/common/hooks/mutations/useLikeFromPost';
import useUser from '~/common/hooks/queries/useUser';

interface FeedItemProps {
  feed: Post;
}

const FeedItem = ({ feed }: FeedItemProps) => {
  const { user } = useUser();
  const isLiked = feed.likes.find(like => {
    if (typeof like === 'string') return false;

    return like.user === user?._id;
  });

  const { mutateLike } = useLikeFromPost({ remove: !!isLiked });

  return (
    <li key={feed._id} className="flex flex-col gap-4">
      {/* // TODO 라우팅 주소 추후 변경의 여지 있음 */}
      <Link to={`detail/${feed._id}`}>
        <Feed
          initialState={!!isLiked}
          title={feed.title}
          comments={feed.comments as string[]}
          likes={feed.likes as string[]}
          image={feed.image as string}
          handleLike={() =>
            mutateLike(isLiked ? (isLiked as Like)._id : feed._id)
          }
        />
      </Link>
    </li>
  );
};

export default FeedItem;
