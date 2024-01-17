import { Comment, Like } from './postTypes';
import { Follow, User } from './userTypes';

export interface Notification {
  seen: boolean;
  _id: string;
  author: User;
  user: User | string;
  post?: string | null;
  follow?: Follow;
  comment?: Comment;
  message?: string;
  like?: Like;
  createdAt: string;
  updatedAt: string;
}

export interface Conversation {
  _id: string[];
  message: string;
  sender: User;
  receiver: User;
  seen: boolean;
  createdAt: string;
}

export interface Message {
  _id: string;
  message: string;
  sender: User;
  receiver: User;
  seen: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface NotificationRequestBody {
  notificationType: 'COMMENT' | 'FOLLOW' | 'LIKE' | 'MESSAGE';
  notificationTypeId: string;
  userId: string;
  postId: string | null;
}
