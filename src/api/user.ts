import { User } from '~/api/types/userTypes';

import { instance } from '.';

export const getAuthUser = async () => {
  const { data } = await instance.get<User>('/auth-user');

  return data;
};

export const getOnlineUsers = async () => {
  const { data } = await instance.get<User[]>('/users/online-users');

  return data;
};

export const getAllUsers = async () => {
  const { data } = await instance.get<User[]>('/users/get-users', {
    validateStatus: null,
    headers: {
      Authorization: '',
      ignoreGlobalCatch: true,
    },
  });

  return data;
};

export const getUser = async (userId: string) => {
  const { data } = await instance.get<User>(`/users/${userId}`);

  return data;
};

export const putUserSettings = async ({ fullName }: { fullName: string }) => {
  await instance.put(`/settings/update-user`, {
    fullName,
    username: fullName,
  });
};

export const putUpdatePassword = async (password: string) => {
  return await instance.put('/settings/update-password', {
    password,
  });
};

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const { data } = await instance.post('/login', { email, password });

  return data;
};
