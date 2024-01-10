import { useSuspenseQuery } from '@tanstack/react-query';

import { instance } from '~/api';
import { User } from '~/api/types/userTypes';
const getUser = async (id: string) => {
  const { data } = await instance.get<User>(`/users/${id}`);

  return data;
};

export const useQueryUser = (id: string) => {
  const { data: userData } = useSuspenseQuery({
    queryKey: ['user', id],
    queryFn: () => getUser(id),
  });

  return { userData };
};
