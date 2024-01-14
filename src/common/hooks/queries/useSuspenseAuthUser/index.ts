import { useSuspenseQuery } from '@tanstack/react-query';

import { getAuthUser } from '~/api/user';
import { QUERY_KEY } from '~/constants/queryKey';

const useSuspenseAuthUser = () => {
  const { data, isLoading } = useSuspenseQuery({
    queryKey: [QUERY_KEY.USER],
    queryFn: getAuthUser,
  });

  return { authUser: data, isLoading };
};

export default useSuspenseAuthUser;
