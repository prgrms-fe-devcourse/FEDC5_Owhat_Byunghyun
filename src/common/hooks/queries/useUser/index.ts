import { useSuspenseQuery } from '@tanstack/react-query';

import { getUser } from '~/api/user';
import { QUERY_KEY } from '~/constants/queryKey';

export const useUser = (id: string) => {
  const { data: user } = useSuspenseQuery({
    queryKey: [QUERY_KEY.USER, id],
    queryFn: () => getUser(id),
  });

  return { user };
};
