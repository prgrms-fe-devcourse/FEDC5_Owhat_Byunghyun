import { PostResponse } from '~/api/types/postTypes';
import Group from '~/common/components/Group';
import FeedItem from '~/pages/home/components/FeedItem';

interface PostsListProps {
  userPosts: PostResponse[];
}

const PostsList = ({ userPosts = [] }: PostsListProps) => {
  return (
    <ul className="mt flex flex-col border-t border-t-primary-lighter pt">
      {userPosts.map(post => {
        return (
          <Group
            key={post._id}
            spacing={'md'}
            direction={'columns'}
            className="w-full p"
          >
            <FeedItem feed={post} />
          </Group>
        );
      })}
    </ul>
  );
};

export default PostsList;
