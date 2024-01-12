import { useQuery } from '@tanstack/react-query';

import { getUserList } from '~/api/register';

export const useUserListQuery = () => {
  const { data } = useQuery({
    queryKey: ['UserList'],
    queryFn: getUserList,
  });
  return data;
};
