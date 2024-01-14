import { Message } from '~/api/types/notificationTypes';

import { instance } from '.';

export const getMessageList = async () => {
  const { data } = await instance.get<Message[]>('/messages/conversations');

  return data;
};
