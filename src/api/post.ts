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

export const deleteLikeFromPost = async (likeId: string) => {
  await instance.delete(`/likes/delete`, {
    data: { id: likeId },
  });
};

export const deleteComment = async (commnetId: string) => {
  await instance.delete(`/comments/delete`, {
    data: {
      id: commnetId,
    },
  });
};

export const createComment = async ({
  comment,
  postId,
}: {
  comment: string;
  postId: string;
}) => {
  const { data } = await instance.post(`/comments/create`, {
    comment: comment,
    postId: postId,
  });
  return data;
};

export const getPostDetail = async (postId: string) => {
  const { data } = await instance.get(`/posts/${postId}`);

  return data;
};

export const deletePost = async (postId: string) => {
  await instance.delete(`/posts/delete`, {
    data: {
      id: postId,
    },
  });
};
