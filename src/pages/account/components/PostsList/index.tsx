import Feed from '~/common/components/Feed';
import Group from '~/common/components/Group';
import UserInfo from '~/common/components/UserInfo';
import { UserPost } from '~/common/hooks/queries/useUserPosts';

interface PostsListProps {
  userPosts: UserPost[];
  isMyAccount: boolean;
}

const PostsList = ({ userPosts, isMyAccount }: PostsListProps) => {
  return (
    <ul className="mt flex flex-col border-t border-t-primary-lighter pt">
      {userPosts.map(
        ({
          _id,
          author,
          channel,
          title,
          createdAt,
          image,
          likes,
          comments,
          content,
        }) => {
          const { _id: userId, image: profileImage, fullName } = author;
          const { name: channelName } = channel;

          return (
            <Group
              key={_id}
              spacing={'md'}
              direction={'columns'}
              className="w-full  p"
            >
              <UserInfo
                _id={userId}
                profileImage={profileImage}
                author={fullName}
                channel={channelName}
                createdAt={createdAt}
                isMyAccount={isMyAccount}
              />
              <Feed
                content={content}
                initialState={false}
                title={title}
                image={image}
                likes={likes}
                comments={comments}
              />
            </Group>
          );
        },
      )}
    </ul>
  );
};

export default PostsList;
