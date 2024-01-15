import { useQuery } from '@tanstack/react-query';

import { getSearchResults } from '~/api/search';
import { Post } from '~/api/types/postTypes';
import { User } from '~/api/types/userTypes';
import { QUERY_KEY } from '~/constants/queryKey';

const useSearchResults = (mode: 'all' | 'users', keyword: string) => {
  const { data, isLoading } = useQuery<(User | Post)[]>({
    queryKey: [QUERY_KEY.SEARCH, mode, keyword],
    queryFn: () => getSearchResults(mode, keyword),
    enabled: !!keyword,
  });

  return {
    data,
    isLoading,
  };
};

export default useSearchResults;
