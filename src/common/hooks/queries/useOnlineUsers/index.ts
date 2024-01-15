import { useQuery } from '@tanstack/react-query';

import { getOnlineUsers } from '~/api/user';
import { QUERY_KEY } from '~/constants/queryKey';

const useOnlineUsers = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY.USER_LIST, 'onlineUsers'],
    queryFn: getOnlineUsers,
  });

  return {
    onlineUsers: data || [],
    isLoading,
  };
};

export default useOnlineUsers;
