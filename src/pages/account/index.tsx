import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ArrowBackButton from '~/common/components/ArrowBackButton';
import Group from '~/common/components/Group';
import Text from '~/common/components/Text';
import useSuspenseAuthUser from '~/common/hooks/queries/useSuspenseAuthUser';
import { useUser } from '~/common/hooks/queries/useUser';
import { useUserPosts } from '~/common/hooks/queries/useUserPosts';
import useLayout from '~/common/hooks/useLayout';

import AccountInfo from './components/AccountInfo';
import PostsList from './components/PostsList';

export default function AccountPage() {
  const { changeMeta, changeBottomNavigator } = useLayout();

  const { userId } = useParams();
  const { authUser } = useSuspenseAuthUser();
  const { user } = useUser(userId ?? authUser._id);
  const { userPosts } = useUserPosts(userId ?? authUser._id);

  useEffect(() => {
    changeBottomNavigator(true);
    changeMeta({
      title: !userId ? '내 프로필' : `${user?.fullName}님의 프로필`,
      left: <ArrowBackButton />,
      right: <></>,
    });
  }, [userId, user.fullName, authUser._id]);

  return (
    <section className="flex overflow-hidden">
      <Group
        spacing={10}
        direction="columns"
        className="scroll-none flex h-full w-full flex-col overflow-y-auto pb-large"
        grow
      >
        <AccountInfo user={user} authUser={authUser} isMyAccount={!userId} />

        {userPosts?.length === 0 ? (
          <Text
            size="large"
            className="mt-xlarge py-xlarge text-center text-gray-400"
          >
            작성한 게시물이 없습니다.
          </Text>
        ) : (
          <PostsList userPosts={userPosts ?? []} />
        )}
      </Group>
    </section>
  );
}
