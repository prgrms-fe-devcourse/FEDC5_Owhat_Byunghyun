import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postMessage } from '~/api/message';
import { Message } from '~/api/types/notificationTypes';
import { QUERY_KEY } from '~/constants/queryKey';

const useSendMessage = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: ({ userId, message }: { userId: string; message: string }) =>
      postMessage(userId, message),
    onSuccess: ({ receiver }: Message) => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.MESSAGE, receiver._id],
      });
    },
  });

  return { mutateMessage: mutate };
};

export default useSendMessage;
