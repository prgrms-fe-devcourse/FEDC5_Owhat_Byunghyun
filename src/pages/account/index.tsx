import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Group from '~/common/components/Group';
import Icon from '~/common/components/Icon';
import { useUser } from '~/common/hooks/queries/useUser';
import useLayout from '~/common/hooks/useLayout';

import AccountInfo from './components/AccountInfo';
import AccountPostsList from './components/AccountPostsList';

export default function AccountPage() {
  const { userId = '' } = useParams();
  const navigate = useNavigate();
  if (!userId) {
    navigate('/login');
  }

  const [isMyAccount, setIsMyAccount] = useState(false);
  const token = localStorage.getItem('OWHAT_TOKEN');

  const { changeMeta } = useLayout();
  const { user } = useUser(userId);

  useEffect(() => {
    changeMeta({
      title: isMyAccount ? '내 프로필' : `${user.fullName}님의 프로필`,
      left: isMyAccount ? (
        <></>
      ) : (
        <Icon
          id="arrow-back"
          onClick={() => {
            //  뒤로 가기
          }}
        />
      ),
      right: <></>,
    });

    if (token && userId === user._id) {
      setIsMyAccount(true);
    }
  }, [token]);

  return (
    <Group spacing={10} direction={'columns'} className="py" grow>
      <AccountInfo user={user} isMyAccount={isMyAccount} />
      <AccountPostsList currentUserId={userId} isMyAccount={isMyAccount} />
    </Group>
  );
}
