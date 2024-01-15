import { User } from '~/api/types/userTypes';

import { instance } from '.';

export const getAuthUser = async () => {
  const { data } = await instance.get<User>('/auth-user');

  return data;
};

export const getOnlineUsers = async () => {
  const { data } = await instance.get<User[]>('/users/online-users');
  
  return data;
}

export const getUser = async (userId: string) => {
  const { data } = await instance.get<User>(`/users/${userId}`);

  return data;
};
