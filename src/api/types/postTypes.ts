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
  likes: Like[] | string[];
  comments: Comment[] | string[];
  _id: string;
  image?: string;
  imagePublicId?: string;
  title: string;
  content?: string;
  channel: Channel | string;
  author: User | string;
  createdAt: string;
  updatedAt: string;
}

export interface Like {
  _id: string;
  user: string;
  post: Post | string;
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  _id: string;
  comment: string;
  author: User | string;
  post: Post | string;
  createdAt: string;
  updatedAt: string;
}
