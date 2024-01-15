import Group from '~/common/components/Group';
import Loading from '~/common/components/Loading';
import Text from '~/common/components/Text';
import useNotificationList from '~/common/hooks/queries/useNotificationList';
import { isOverTwoWeeks } from '~/utils/time';

import Alarm from './Alarm';

const NotificationList = () => {
  const { notificationList, isLoading } = useNotificationList();

  const recentNotificationList = notificationList?.filter(
    ({ createdAt }) => !isOverTwoWeeks(createdAt),
  );

  if (isLoading) {
    return (
      <Group spacing="sm" align="center" position="center" className="h-60">
        <Loading />
      </Group>
    );
  }

  if (recentNotificationList && recentNotificationList.length === 0) {
    return (
      <Group spacing="sm" align="center" position="center" className="h-60">
        <Text className="my-20 text-center">최신 알림이 없습니다.</Text>
      </Group>
    );
  }

  return (
    <ul className="scroll-none align-center flex h-full flex-col gap-3 overflow-y-auto">
      {recentNotificationList?.map(notification => (
        <Alarm key={notification._id} alarm={notification} />
      ))}
      <Text className="mb-16 text-center text-base-small">
        최대 2주까지의 알림을 확인할 수 있습니다.
      </Text>
    </ul>
  );
};

export default NotificationList;
