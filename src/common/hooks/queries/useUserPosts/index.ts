import { useSuspenseQuery } from '@tanstack/react-query';

import { getPostListByAuthor } from '~/api/post';
import { Channel, Like, Post } from '~/api/types/postTypes';
import { User } from '~/api/types/userTypes';
import { QUERY_KEY } from '~/constants/queryKey';

type OmittedPost = Omit<Post, 'likes' | 'author' | 'channel'>;

export interface UserPost extends OmittedPost {
  likes: Like[];
  author: User;
  channel: Channel;
}

export const useUserPosts = (id: string) => {
  const { data: userPosts } = useSuspenseQuery({
    queryKey: [QUERY_KEY.POST_LIST, id],
    queryFn: () => getPostListByAuthor(id),
  });

  return { userPosts };
};
