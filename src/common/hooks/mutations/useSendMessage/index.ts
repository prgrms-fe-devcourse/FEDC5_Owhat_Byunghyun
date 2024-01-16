import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postMessage } from '~/api/message';
import { Message } from '~/api/types/notificationTypes';
import { QUERY_KEY } from '~/constants/queryKey';

import useSendNotification from '../useSendNotification';

const useSendMessage = () => {
  const queryClient = useQueryClient();
  const { mutate: mutateNotification } = useSendNotification();

  const { mutate } = useMutation({
    mutationFn: ({ userId, message }: { userId: string; message: string }) =>
      postMessage(userId, message),
    onSuccess: ({ _id, receiver }: Message) => {
      mutateNotification({
        notificationType: 'MESSAGE',
        notificationTypeId: _id,
        userId: receiver._id,
        postId: null,
      });

      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.MESSAGE],
      });
    },
  });

  return { mutateMessage: mutate };
};

export default useSendMessage;
