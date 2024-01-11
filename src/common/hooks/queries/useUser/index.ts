import { useSuspenseQuery } from '@tanstack/react-query';

import { instance } from '~/api';
import { User } from '~/api/types/userTypes';

// 추후 api 폴더 내 user.ts로 이동할 예정임
const getUser = async (id: string) => {
  const { data } = await instance.get<User>(`/users/${id}`);

  return data;
};

export const useUser = (id: string) => {
  const { data: userData } = useSuspenseQuery({
    queryKey: ['user', id],
    queryFn: () => getUser(id),
  });

  return { userData };
};
