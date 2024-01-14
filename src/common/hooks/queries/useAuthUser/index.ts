import { useSuspenseQuery } from '@tanstack/react-query';

import { getAuthUser } from '~/api/user';
import { QUERY_KEY } from '~/constants/queryKey';

const useAuthUser = () => {
  const { data, isLoading } = useSuspenseQuery({
    queryKey: [QUERY_KEY.USER],
    queryFn: getAuthUser,
  });

  return { user: data, isLoading };
};

export default useAuthUser;
