import { User } from '~/api/types/userTypes';

import { instance } from '.';

export const getUser = async () => {
  const { data } = await instance.get<User>('/auth-user');

  return data;
};
