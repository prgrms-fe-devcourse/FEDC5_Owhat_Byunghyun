import { Post } from '~/api/types/postTypes';

import { instance } from '.';

export const getPostListByChannel = async (
  channelId: string,
  offset: number,
  limit: number,
) => {
  const { data } = await instance.get<Post[]>(`/posts/channel/${channelId}`, {
    params: {
      offset,
      limit,
    },
  });

  return data;
};

export const postLikeFromPost = async (postId: string) => {
  const { data } = await instance.post(`/likes/create`, { postId });

  return data;
};

export const deleteLikeFromPost = async (postId: string) => {
  await instance.delete(`/likes/delete`, { data: { id: postId } });
};
