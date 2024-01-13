import { useMutation, useQueryClient } from '@tanstack/react-query';

import {
  NotificationRequestBody,
  postNotificationCreate,
} from '~/api/notification';
import { QUERY_KEY } from '~/constants/queryKey';

const useSendNotification = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (body: NotificationRequestBody) => postNotificationCreate(body),
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.NOTIFICATION_LIST],
      });
    },
  });

  return mutation;
};

export default useSendNotification;
