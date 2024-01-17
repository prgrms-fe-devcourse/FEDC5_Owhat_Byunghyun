import { useEffect } from 'react';

import ArrowBackButton from '~/common/components/ArrowBackButton';
import Group from '~/common/components/Group';
import Loading from '~/common/components/Loading';
import Tab from '~/common/components/Tab';
import useAuthUser from '~/common/hooks/queries/useAuthUser';
import useUsersList from '~/common/hooks/queries/useUsersList';
import useLayout from '~/common/hooks/useLayout';

import UserList from './components/UserList';

export default function MoreUsersPage() {
  const { user, isLoading } = useAuthUser();
  const { changeMeta, changeBottomNavigator } = useLayout();

  const { users: onlineUsers } = useUsersList(true);
  const { users: allUsers } = useUsersList(false);

  useEffect(() => {
    changeBottomNavigator(true);
    changeMeta({
      title: user?.fullName || '사용자',
      left: <ArrowBackButton />,
      right: <></>,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  if (isLoading) {
    return (
      <Group spacing="sm" align="center" position="center" className="h-60">
        <Loading />
      </Group>
    );
  }

  return (
    <section className="pb-[56px]">
      <Tab>
        <Tab.Item title="접속중" subText={onlineUsers.length} label="online">
          <UserList users={onlineUsers} currentUser={user} />
        </Tab.Item>
        <Tab.Item title="전체 사용자" subText={allUsers.length} label="all">
          <UserList users={allUsers} currentUser={user} />
        </Tab.Item>
      </Tab>
    </section>
  );
}
