import { useQuery } from '@tanstack/react-query';

import { getNotifications } from '~/api/notification';
import { QUERY_KEY } from '~/constants/queryKey';

const useNotificationList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEY.NOTIFICATION_LIST],
    queryFn: getNotifications,
  });

  return {
    notificationList: data,
    isLoading,
    isError,
  };
};

export default useNotificationList;
