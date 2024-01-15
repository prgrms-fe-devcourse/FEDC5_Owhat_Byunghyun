import Group from '~/common/components/Group';
import { UserPost } from '~/common/hooks/queries/useUserPosts';
import FeedItem from '~/pages/home/components/FeedItem';

interface PostsListProps {
  userPosts: UserPost[];
  isMyAccount: boolean;
}

const PostsList = ({ userPosts = [] }: PostsListProps) => {
  return (
    <ul className="mt flex flex-col border-t border-t-primary-lighter pt">
      {userPosts.map(feed => {
        return (
          <Group
            key={feed._id}
            spacing={'md'}
            direction={'columns'}
            className="w-full p"
          >
            <FeedItem feed={feed} />
          </Group>
        );
      })}
    </ul>
  );
};

export default PostsList;
