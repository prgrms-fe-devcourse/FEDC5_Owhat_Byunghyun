import { useSuspenseQuery } from '@tanstack/react-query';

import { instance } from '~/api';
import { User } from '~/api/types/userTypes';

// 추후 api 폴더 내 user.ts로 이동할 예정임
const getUser = async (userId: string) => {
  const { data } = await instance.get<User>(`/users/${userId}`);

  return data;
};

export const useUser = (id: string) => {
  const { data: user } = useSuspenseQuery({
    queryKey: ['user', id],
    queryFn: () => getUser(id),
  });

  return { user };
};
