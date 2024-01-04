import { Message, Notification } from './notificationTypes';
import { Like, Post } from './postTypes';

export interface User {
  role: string;
  emailVerified: boolean;
  banned: boolean;
  isOnline: boolean;
  posts: Post[];
  likes: Like[] | string[];
  comments: string[];
  followers: Follow[] | string[];
  following: Follow[] | string[];
  notifications: Notification[] | string[];
  messages: Message[] | string[];
  _id: string;
  fullName: string;
  email: string;
  password?: string;
  createdAt: string;
  updatedAt: string;
  coverImage?: string;
  image?: string;
  __v?: number;
}

export interface Follow {
  _id: string;
  user: string;
  follower: string;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}
