import { useQuery } from '@tanstack/react-query';

import { getUserList } from '~/api/register';

export const useUserListQuery = () => {
  const { data } = useQuery({
    queryKey: ['duplicateEmail'],
    queryFn: async () => {
      const { data } = await getUserList();
      return data;
    },
  });
  return data;
};
