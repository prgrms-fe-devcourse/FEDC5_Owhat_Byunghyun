import { Comment, Like, Post } from '~/api/types/postTypes';
import { User } from '~/api/types/userTypes';
import Divider from '~/common/components/Divider';
import Feed from '~/common/components/Feed';
import Group from '~/common/components/Group';
import Text from '~/common/components/Text';
import useLikeFromPost from '~/common/hooks/mutations/useLikeFromPost';

import CommentInput from '../CommentInput';
import CommentListItem from '../CommentListItem';
import MoreButton from '../MoreButton';
import PostDetailUserInfo from '../PostDetailUserInfo';

interface PostDetailComponent {
  postDetailData: Post;
  comments: Comment[];
  user: User;
  commentSubmitPending?: boolean;
  handleDeletePost?: (id: string) => void;
  handleEditPost?: (postId: string) => void;
  handleSubmitComment?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const PostDetailComponent = ({
  postDetailData,
  comments,
  handleDeletePost,
  handleEditPost,
  handleSubmitComment,
  commentSubmitPending,
  user,
}: PostDetailComponent) => {
  const likeInfo = postDetailData.likes.find((like: string | Like) => {
    if (typeof like === 'string') return false;

    return like.user === user?._id;
  });
  const likeMutation = useLikeFromPost({
    remove: !!likeInfo,
    authUserId: user?._id,
    postUserId:
      typeof postDetailData.author !== 'string'
        ? postDetailData.author._id
        : '',
  });

  if (typeof postDetailData.author === 'string') return;
  if (typeof postDetailData.channel === 'string') return;

  return (
    <>
      <Group direction="columns" spacing="sm" grow>
        <div className="flex justify-between">
          <PostDetailUserInfo
            _id={postDetailData.author._id}
            fullName={postDetailData.author.fullName}
            profileImage={postDetailData.author?.image}
            channelName={postDetailData.channel.name}
            createdAt={postDetailData.createdAt}
          />
          {postDetailData.author._id === user?._id && (
            <div className="self-start">
              <MoreButton
                type="post"
                id={postDetailData._id}
                handleDelete={handleDeletePost!}
                handleEdit={handleEditPost}
              />
            </div>
          )}
        </div>
        <Feed
          initialState={!!likeInfo}
          title={postDetailData.title}
          comments={postDetailData.comments as string[]}
          likes={postDetailData.likes as string[]}
          image={postDetailData.image as string}
          imgAspect={false}
          textOverflow={false}
          handleLike={() => {
            likeMutation.mutate(
              likeInfo ? (likeInfo as Like)._id : postDetailData._id,
            );
          }}
        />
        <Divider />
        <Text size="large">댓글</Text>
        <Group direction="columns" spacing="md" className="pb-24">
          {comments.map(comment => (
            <CommentListItem
              key={comment._id}
              id={comment._id}
              author={comment.author}
              createdAt={comment.createdAt}
              comment={comment.comment}
              isMyComment={
                user?._id ===
                (typeof comment.author !== 'string' && comment.author._id)
              }
            />
          ))}
        </Group>
      </Group>
      <CommentInput
        loading={commentSubmitPending && commentSubmitPending}
        handleSubmitComment={handleSubmitComment!}
        isLogin={!!user}
        user={user}
      />
    </>
  );
};

export default PostDetailComponent;
