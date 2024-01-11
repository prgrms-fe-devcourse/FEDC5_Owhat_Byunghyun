import { instance } from '.';

export const getPostListByChannel = async (channelId: string) => {
  const { data } = await instance.get(`/posts/channel/${channelId}`);

  return data;
};

export const postLikeFromPost = async (postId: string) => {
  const { data } = await instance.post(`/likes/create`, { postId });

  return data;
};

export const deleteLikeFromPost = async (postId: string) => {
  await instance.delete(`/likes/delete`, { data: { id: postId } });
};
