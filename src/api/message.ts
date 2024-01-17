import { Message } from '~/api/types/notificationTypes';

import { instance } from '.';

export const getMessageList = async () => {
  const { data } = await instance.get<Message[]>('/messages/conversations');

  return data;
};

export const getMessageListByUserId = async (userId: string) => {
  const { data } = await instance.get<Message[]>(`/messages`, {
    params: { userId },
  });

  return data;
};

export const postMessage = async (userId: string, message: string) => {
  const { data } = await instance.post<Message>(`/messages/create`, {
    receiver: userId,
    message,
  });

  return data;
};
