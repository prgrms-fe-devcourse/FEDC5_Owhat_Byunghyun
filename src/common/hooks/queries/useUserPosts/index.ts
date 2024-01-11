import { useSuspenseQuery } from '@tanstack/react-query';

import { instance } from '~/api';
import { Channel, Like, Post } from '~/api/types/postTypes';
import { User } from '~/api/types/userTypes';

type OmittedPost = Omit<Post, 'likes' | 'author' | 'channel'>;

export interface UserPost extends OmittedPost {
  likes: Like[];
  author: User;
  channel: Channel;
}

// 추후 api 폴더 내 post.ts로 이동할 예정임
const getUserPosts = async (userId: string) => {
  const { data } = await instance.get<UserPost[]>(`/posts/author/${userId}`);

  return data;
};

export const useUserPosts = (id: string) => {
  const { data: userPosts } = useSuspenseQuery({
    queryKey: ['userPosts', id],
    queryFn: () => getUserPosts(id),
  });

  return { userPosts };
};
