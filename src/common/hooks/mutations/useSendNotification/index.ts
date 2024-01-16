import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postNotificationCreate } from '~/api/notification';
import { NotificationRequestBody } from '~/api/types/notificationTypes';
import { QUERY_KEY } from '~/constants/queryKey';

const useSendNotification = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (body: NotificationRequestBody) => postNotificationCreate(body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.NOTIFICATION_LIST],
      });
    },
  });

  return mutation;
};

export default useSendNotification;
