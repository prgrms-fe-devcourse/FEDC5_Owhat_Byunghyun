import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Group from '~/common/components/Group';
import Icon from '~/common/components/Icon';
import { useUser } from '~/common/hooks/queries/useUser';
import useLayout from '~/common/hooks/useLayout';

import AccountInfo from './components/AccountInfo';
import AccountPostsList from './components/AccountPostsList';

export default function AccountPage() {
  const [isMyAccount, setIsMyAccount] = useState(false);
  const token = localStorage.getItem('OWHAT_TOKEN');

  const { pathname } = useLocation();
  const currentUserId = pathname.split('/')[2];

  if (token === currentUserId) {
    setIsMyAccount(true);
  }

  const { changeMeta } = useLayout();
  const { user } = useUser(currentUserId);

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
  }, []);

  return (
    <Group spacing={10} direction={'columns'} className="py" grow>
      <AccountInfo user={user} isMyAccount={isMyAccount} />
      <AccountPostsList
        currentUserId={currentUserId}
        isMyAccount={isMyAccount}
      />
    </Group>
  );
}
