import { useEffect } from 'react';

import ArrowBackButton from '~/common/components/ArrowBackButton';
import Group from '~/common/components/Group';
import useLayout from '~/common/hooks/useLayout';

import NotificationList from './components/NotificationList';
import SeenButton from './components/SeenButton';

export default function NotificationPage() {
  const { changeMeta, changeBottomNavigator } = useLayout();

  useEffect(() => {
    changeBottomNavigator(true);
    changeMeta({
      title: '알림',
      left: <ArrowBackButton />,
      right: <></>,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <Group spacing={0} position="right" className="mb-small">
        <SeenButton />
      </Group>
      <NotificationList />
    </section>
  );
}
