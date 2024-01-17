import { useEffect } from 'react';

import ArrowBackButton from '~/common/components/ArrowBackButton';
import Group from '~/common/components/Group';
import Loading from '~/common/components/Loading';
import Tab from '~/common/components/Tab';
import useAuthUser from '~/common/hooks/queries/useAuthUser';
import useLayout from '~/common/hooks/useLayout';

import UserList from './components/UserList';

export default function MoreUsersPage() {
  const { user, isLoading } = useAuthUser();
  const { changeMeta } = useLayout();

  useEffect(() => {
    changeMeta({
      title: user?.fullName || '',
      left: <ArrowBackButton />,
      right: '',
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
        <Tab.Item title="접속중" label="online">
          <UserList currentUser={user} isOnline />
        </Tab.Item>
        <Tab.Item title="전체 사용자" label="all">
          <UserList currentUser={user} />
        </Tab.Item>
      </Tab>
    </section>
  );
}
