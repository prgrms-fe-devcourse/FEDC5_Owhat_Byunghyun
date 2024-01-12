import { instance } from '.';

export const getChannelList = async () => {
  const { data } = await instance.get('/channels');

  return data;
};
