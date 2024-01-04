import { Comment, Like } from './postTypes';
import { User } from './userTypes';

export interface Notification {
  seen: boolean;
  _id: string;
  author: User;
  user: User | string;
  post: string | null;
  follow?: string;
  comment?: Comment;
  message?: string;
  like?: Like;
  createdAt: string;
  updatedAt: string;
  __v?: number;
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
