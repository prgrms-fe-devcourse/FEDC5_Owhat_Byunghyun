import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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
  const { changeMeta } = useLayout();
  const navigate = useNavigate();
  const { authUser } = useSuspenseAuthUser();
  const { userId } = useParams();

  const { user } = useUser(userId ?? authUser._id);

  const [isMyAccount, setIsMyAccount] = useState(false);
  const { userPosts } = useUserPosts(userId ?? authUser._id);

  useEffect(() => {
    if (!authUser._id && !userId) {
      // alert 사용시 alert가 두 번 뜨는 문제 있음
      navigate('/login');
    }

    if (authUser?._id === userId) {
      setIsMyAccount(true);
    } else {
      setIsMyAccount(false);
    }

    changeMeta({
      title: isMyAccount ? '내 프로필' : `${user?.fullName}님의 프로필`,
      left: <ArrowBackButton />,
      right: <></>,
    });
  }, [isMyAccount, userId, authUser]);

  return (
    <section className="flex overflow-hidden">
      <Group
        spacing={10}
        direction={'columns'}
        className="scroll-none flex h-full flex-col overflow-y-auto pb"
        grow
      >
        <AccountInfo
          user={user}
          authUser={authUser}
          isMyAccount={isMyAccount}
        />

        {userPosts?.length === 0 ? (
          <Text
            size={'large'}
            className={'mt-xlarge py-xlarge text-center text-gray-400'}
          >
            작성한 게시물이 없습니다.
          </Text>
        ) : (
          <PostsList userPosts={userPosts ?? []} isMyAccount={isMyAccount} />
        )}
      </Group>
    </section>
  );
}
