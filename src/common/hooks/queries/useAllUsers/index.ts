import { useQuery } from '@tanstack/react-query';

import { getAllUsers } from '~/api/user';
import { QUERY_KEY } from '~/constants/queryKey';

export const useAllUsers = () => {
  const { data: allUsers } = useQuery({
    queryKey: [QUERY_KEY.USER_LIST],
    queryFn: getAllUsers,
  });

  return { allUsers };
};
