import { useQueries } from '@tanstack/react-query';

import { getMessageListByUserId } from '~/api/message';
import { getUser } from '~/api/user';
import { QUERY_KEY } from '~/constants/queryKey';

export const useMessageListByUserId = (userId: string) => {
  const data = useQueries({
    queries: [
      {
        queryKey: [QUERY_KEY.MESSAGE, userId],
        queryFn: () => getMessageListByUserId(userId),
      },
      {
        queryKey: [QUERY_KEY.USER, userId],
        queryFn: () => getUser(userId),
      },
    ],
  });

  return { messageListByUserId: data[0].data || [], user: data[1].data };
};
