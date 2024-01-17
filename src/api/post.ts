import { PostResponse } from '~/api/types/postTypes';

import { instance } from '.';

export const getPostListByChannel = async (
  channelId: string,
  offset: number,
  limit: number,
) => {
  const { data } = await instance.get<PostResponse[]>(
    `/posts/channel/${channelId}`,
    {
      params: {
        offset,
        limit,
      },
    },
  );

  return data;
};

export const getPostListByAuthor = async (
  userId: string,
  offset?: number,
  limit?: number,
) => {
  const { data } = await instance.get<PostResponse[]>(
    `/posts/author/${userId}`,
    {
      params: {
        offset,
        limit,
      },
    },
  );

  return data;
};

export const postLikeFromPost = async (postId: string) => {
  const { data } = await instance.post(`/likes/create`, { postId });
  return data;
};

export const deleteLikeFromPost = async (likeId: string) => {
  const { data } = await instance.delete(`/likes/delete`, {
    data: { id: likeId },
  });
  return data;
};

export const deleteComment = async (commentId: string) => {
  const { data } = await instance.delete(`/comments/delete`, {
    data: {
      id: commentId,
    },
  });
  return data;
};

export const createComment = async ({
  comment,
  postId,
}: {
  comment: string;
  postId: string;
}) => {
  const { data } = await instance.post(`/comments/create`, {
    comment,
    postId,
  });
  return data;
};

export const getPostDetail = async (postId: string) => {
  const { data } = await instance.get(`/posts/${postId}`);

  return data;
};

export const deletePost = async (postId: string) => {
  const { data } = await instance.delete(`/posts/delete`, {
    data: {
      id: postId,
    },
  });
  return data;
};

export const postPostCreate = async (
  title: string,
  file: File,
  channelId: string,
) => {
  const formData = new FormData();

  formData.append('title', title);
  formData.append('image', file);
  formData.append('channelId', channelId);

  const { data } = await instance.post(`/posts/create`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return data;
};
