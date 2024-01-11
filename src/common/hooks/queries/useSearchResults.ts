import { useQuery } from '@tanstack/react-query';

import { getSearchResults } from '~/api/search';
import { Post } from '~/api/types/postTypes';
import { User } from '~/api/types/userTypes';

export const useSearchResults = (mode: 'all' | 'users', keyword: string) => {
  const { data, isLoading } = useQuery<(User | Post)[]>({
    queryKey: ['search', mode, keyword],
    queryFn: () => getSearchResults(mode, keyword),
    enabled: !!keyword,
  });

  return {
    data,
    isLoading,
  };
};
