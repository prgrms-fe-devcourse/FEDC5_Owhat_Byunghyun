import { User } from '~/api/types/userTypes';

import { instance } from '.';

export const getAuthUser = async () => {
  const { data } = await instance.get<User>('/auth-user');

  return data;
};

export const putUpdatePassword = async (password: string) => {
  return await instance.put('/settings/update-password', {
    password,
  });
};
