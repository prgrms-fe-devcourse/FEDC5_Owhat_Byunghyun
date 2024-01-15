import { instance } from '.';

export const getSearchResults = async (
  mode: 'all' | 'users',
  keyword: string,
) => {
  const { data } = await instance.get(
    `/search/${mode}/${encodeURIComponent(keyword)}`,
  );

  return data;
};
