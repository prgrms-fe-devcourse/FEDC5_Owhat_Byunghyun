import { Link } from 'react-router-dom';

import { Like, PostResponse } from '~/api/types/postTypes';
import Feed from '~/common/components/Feed';
import UserInfo from '~/common/components/UserInfo';
import useLikeFromPost from '~/common/hooks/mutations/useLikeFromPost';
import useSuspenseAuthUser from '~/common/hooks/queries/useSuspenseAuthUser';

const UserFeedItem = ({ post }: { post: PostResponse }) => {
  const { authUser } = useSuspenseAuthUser();
  const likeInfo = post.likes.find(like => {
    if (typeof like === 'string') return false;

    return like.user === authUser?._id;
  });

  const likeMutation = useLikeFromPost({ remove: !!likeInfo });

  return (
    <li key={post._id} className="flex flex-col gap-4">
      <UserInfo post={post} authUser={authUser} />
      <Link to={`/posts/${post._id}`}>
        <Feed
          initialState={!!likeInfo}
          title={post.title}
          comments={post.comments as string[]}
          likes={post.likes}
          image={post.image as string}
          handleLike={() =>
            likeMutation.mutate(likeInfo ? (likeInfo as Like)._id : post._id)
          }
        />
      </Link>
    </li>
  );
};

export default UserFeedItem;
