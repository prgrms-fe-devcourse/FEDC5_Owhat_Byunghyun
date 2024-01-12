import { useSuspenseQuery } from '@tanstack/react-query';

import { getAuthUser, getUser } from '~/api/user';
import { QUERY_KEY } from '~/constants/queryKey';

// 추후 api 폴더 내 user.ts로 이동할 예정임

export const useUser = (id: string | undefined) => {
  const { data: user } = useSuspenseQuery({
    queryKey: [QUERY_KEY.USER, id],
    queryFn: () => (id ? getUser(id) : getAuthUser()),
  });

  return { user };
};
