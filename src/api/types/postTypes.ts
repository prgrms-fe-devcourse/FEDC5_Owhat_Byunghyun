import { User } from './userTypes';

export interface Channel {
  authRequired: boolean;
  posts: string[];
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface Post {
  likes: Like[];
  comments: Comment[];
  _id: string;
  image?: string;
  imagePublicId?: string;
  title: string;
  channel: Channel;
  author: User;
  createdAt: string;
  updatedAt: string;
}

export interface Like {
  _id: string;
  user: string;
  post: string;
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  _id: string;
  comment: string;
  author: User;
  post: string;
  createdAt: string;
  updatedAt: string;
}
