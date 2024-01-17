import { instance } from '~/api';

import {
  Notification,
  NotificationRequestBody,
} from './types/notificationTypes';

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
