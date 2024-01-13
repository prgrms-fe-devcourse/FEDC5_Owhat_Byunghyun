import { instance } from '~/api';

import { Notification } from './types/notificationTypes';

export interface NotificationRequestBody {
  type: 'COMMENT' | 'FOLLOW' | 'LIKE' | 'MESSAGE';
  notificationId: string;
  userId: string;
  postId?: string | null;
}

export const getNotifications = async () => {
  const { data } = await instance.get<Notification[]>('/notifications');

  return data;
};

export const postNotificationCreate = async (body: NotificationRequestBody) => {
  return await instance.post<Notification>('/notifications/create', body);
};

export const putNotificationsToSeen = async () => {
  return await instance.put('notifications/seen');
};
