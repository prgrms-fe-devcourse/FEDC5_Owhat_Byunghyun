import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ArrowBackButton from '~/common/components/ArrowBackButton';
import Group from '~/common/components/Group';
import useAuthUser from '~/common/hooks/queries/useAuthUser';
import { useUser } from '~/common/hooks/queries/useUser';
import useLayout from '~/common/hooks/useLayout';

import AccountInfo from './components/AccountInfo';
import AccountPostsList from './components/AccountPostsList';

export default function AccountPage() {
  const { user: authUser } = useAuthUser();
  const { userId } = useParams();
  // 1-1. login page가 main branch로 merge하여 Router.tsx에 추가되면 주석 해제
  // const navigate = useNavigate();

  const { user } = useUser(userId);

  const [isMyAccount, setIsMyAccount] = useState(false);

  useEffect(() => {
    if (!userId || userId === authUser?._id) {
      setIsMyAccount(true);
    } else {
      setIsMyAccount(false);
    }
    // 1-2. login page가 main branch로 merge하여 Router.tsx에 추가되면 주석 해제
    // if (!userId) {
    //   navigate('/login');
    // }
  }, [userId, authUser]);

  const { changeMeta } = useLayout();
  useEffect(() => {
    changeMeta({
      title: isMyAccount ? '내 프로필' : `${user?.fullName}님의 프로필`,
      left: <ArrowBackButton />,
      right: <></>,
    });
  }, [isMyAccount]);

  return (
    <Group spacing={10} direction={'columns'} className="py" grow>
      <AccountInfo user={user} isMyAccount={isMyAccount} />
      <AccountPostsList
        currentUserId={user._id ?? userId}
        isMyAccount={isMyAccount}
      />
    </Group>
  );
}
