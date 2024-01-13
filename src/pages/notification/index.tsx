import { useEffect } from 'react';

import { Post } from '~/api/types/postTypes';
import ArrowBackButton from '~/common/components/ArrowBackButton';
import Group from '~/common/components/Group';
import Text from '~/common/components/Text';
import useNotificationList from '~/common/hooks/queries/useNotificationList';
import useLayout from '~/common/hooks/useLayout';
import { elapsedTime, isOverTwoWeeks } from '~/utils/time';

import Alarm from './components/Alarm';
import SeenButton from './components/SeenButton';

export default function NotificationPage() {
  const { changeMeta, changeBottomNavigator } = useLayout();
  const { notificationList } = useNotificationList();

  const recentNotificationList = notificationList?.filter(
    ({ createdAt }) => !isOverTwoWeeks(createdAt),
  );

  useEffect(() => {
    changeBottomNavigator(true);
    changeMeta({
      title: '알림',
      left: <ArrowBackButton />,
      right: <></>,
    });
  }, []);

  return (
    <section className="scroll-none overflow-y-auto">
      <Group spacing={0} position="right" className="mb-small">
        <SeenButton />
      </Group>
      <Group spacing="sm" direction="columns" align="center">
        {recentNotificationList &&
          recentNotificationList.map(
            ({
              _id,
              seen,
              author,
              follow,
              comment,
              message,
              like,
              createdAt,
            }) => (
              <Alarm
                key={_id}
                seen={seen}
                username={author.fullName}
                follow={!!follow}
                comment={
                  comment ? JSON.parse((comment.post as Post).title).title : ''
                }
                message={!!message}
                like={like ? JSON.parse((like.post as Post).title).title : ''}
                date={elapsedTime(createdAt)}
              />
            ),
          )}
        <Text className="my mb-12 text-base-small">
          최대 2주까지의 알림을 확인할 수 있습니다.
        </Text>
      </Group>
    </section>
  );
}
