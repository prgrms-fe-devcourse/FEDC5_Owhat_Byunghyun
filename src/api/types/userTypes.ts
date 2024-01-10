import { Message, Notification } from './notificationTypes';
import { Like, Post } from './postTypes';

export interface User {
  role: string;
  emailVerified: boolean;
  banned: boolean;
  isOnline: boolean;
  posts: Post[];
  likes: Like[];
  comments: string[];
  followers: Follow[] | string[];
  following: Follow[] | string[];
  notifications: Notification[];
  messages: Message[];
  _id: string;
  fullName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  coverImage?: string;
  image?: string;
}

export interface Follow {
  _id: string;
  user: string;
  follower: string;
  createdAt: string;
  updatedAt: string;
}
