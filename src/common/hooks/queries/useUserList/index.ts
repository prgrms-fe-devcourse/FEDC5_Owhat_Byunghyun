import { useQuery } from '@tanstack/react-query';

import { getUserList } from '~/api/register';
import { QUERY_KEY } from '~/constants/queryKey';

export const useUserListQuery = () => {
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: [QUERY_KEY.USER_LIST],
    queryFn: getUserList,
  });
  return { data, isSuccess, isLoading };
};
