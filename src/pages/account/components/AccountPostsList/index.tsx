import Text from '~/common/components/Text';
import { useUserPosts } from '~/common/hooks/queries/useUserPosts';

import PostsList from '../PostsList';

interface AccountPostsListProps {
  currentUserId: string;
  isMyAccount: boolean;
}

const AccountPostsList = ({
  currentUserId,
  isMyAccount,
}: AccountPostsListProps) => {
  const { userPosts } = useUserPosts(currentUserId);

  return (
    <>
      {userPosts.length === 0 ? (
        <Text
          size={'large'}
          className={'mt-xlarge py-xlarge text-center text-gray-400'}
        >
          작성한 게시물이 없습니다.
        </Text>
      ) : (
        <PostsList userPosts={userPosts} isMyAccount={isMyAccount} />
      )}
    </>
  );
};

export default AccountPostsList;
