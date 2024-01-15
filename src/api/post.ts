import { Post } from '~/api/types/postTypes';
import { UserPost } from '~/common/hooks/queries/useUserPosts';

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

export const getPostListByAuthor = async (
  userId: string,
  offset?: number,
  limit?: number,
) => {
  const { data } = await instance.get<UserPost[]>(`/posts/author/${userId}`, {
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

export const postLikeAlarm = async ({
  likeId,
  postId,
  userId,
}: {
  likeId: string;
  postId: string;
  userId: string;
}) => {
  return await instance.post('/notifications/create', {
    notificationType: 'LIKE',
    notificationTypeId: likeId,
    userId: userId,
    postId: postId,
  });
};

export const deleteLikeFromPost = async (likeId: string) => {
  await instance.delete(`/likes/delete`, {
    data: { id: likeId },
  });
};
