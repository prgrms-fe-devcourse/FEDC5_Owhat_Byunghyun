import { useMutation, useQueryClient } from '@tanstack/react-query';

import { putNotificationsToSeen } from '~/api/notification';
import { QUERY_KEY } from '~/constants/queryKey';

const useSeenNotification = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => putNotificationsToSeen(),
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.NOTIFICATION_LIST],
      });
    },
  });

  return mutation;
};

export default useSeenNotification;
