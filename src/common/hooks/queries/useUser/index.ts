import { useSuspenseQuery } from '@tanstack/react-query';

import { getAuthUser, getUser } from '~/api/user';
import { QUERY_KEY } from '~/constants/queryKey';

export const useUser = (id: string | undefined) => {
  const { data: user } = useSuspenseQuery({
    queryKey: [QUERY_KEY.USER, id],
    queryFn: () => (id ? getUser(id) : getAuthUser()),
  });

  return { user };
};
