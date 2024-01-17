import { Link } from 'react-router-dom';

import { Like, PostResponse } from '~/api/types/postTypes';
import Feed from '~/common/components/Feed';
import UserInfo from '~/common/components/UserInfo';
import useLikeFromPost from '~/common/hooks/mutations/useLikeFromPost';
import useSuspenseAuthUser from '~/common/hooks/queries/useSuspenseAuthUser';

interface FeedItemProps {
  feed: PostResponse;
}

const FeedItem = ({ feed }: FeedItemProps) => {
  const { authUser } = useSuspenseAuthUser();
  const likeInfo = feed.likes.find(like => {
    if (typeof like === 'string') return false;

    return like.user === authUser?._id;
  });

  const likeMutation = useLikeFromPost({
    remove: !!likeInfo,
    authUserId: authUser?._id,
    postUserId: typeof feed.author !== 'string' ? feed.author._id : '',
  });

  return (
    <li key={feed._id} className="flex flex-col gap-4 px-1">
      {/* // TODO 라우팅 주소 추후 변경의 여지 있음 */}
      <UserInfo post={feed} authUser={authUser} />

      <Link to={`/posts/${feed._id}`}>
        <Feed
          initialState={!!likeInfo}
          title={feed.title}
          comments={feed.comments as string[]}
          likes={feed.likes}
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
