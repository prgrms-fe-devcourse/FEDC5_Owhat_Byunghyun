import { useQuery } from '@tanstack/react-query';

import { getUserList } from '~/api/register';
import { getOnlineUsers } from '~/api/user';
import { QUERY_KEY } from '~/constants/queryKey';

const useUsersList = (online: boolean) => {
  const fn = online ? getOnlineUsers : getUserList;
  const key = online
    ? [QUERY_KEY.USER_LIST, 'onlineUsers']
    : [QUERY_KEY.USER_LIST];

  const { data, isLoading } = useQuery({
    queryKey: key,
    queryFn: fn,
  });

  return {
    users: data || [],
    isLoading,
  };
};

export default useUsersList;
