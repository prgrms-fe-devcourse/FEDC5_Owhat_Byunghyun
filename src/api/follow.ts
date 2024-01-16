import { instance } from '~/api';

export const postFollow = async (userId: string) => {
  const { data } = await instance.post('/follow/create', { userId });

  return data;
};

export const deleteFollow = async (followId: string) => {
  await instance.delete('/follow/delete', {
    data: { id: followId },
  });
};
