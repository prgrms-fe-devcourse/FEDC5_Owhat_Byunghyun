import { ComponentProps } from 'react';

import { Post } from '~/api/types/postTypes';
import { User } from '~/api/types/userTypes';
import Group from '~/common/components/Group';
import Loading from '~/common/components/Loading';
import Text from '~/common/components/Text';
import { useSearchResults } from '~/common/hooks/queries/useSearchResults';
import { cn } from '~/utils/cn';

import PostItem from './PostItem';
import UserItem from './UserItem';

interface SearchResultsProps extends ComponentProps<'div'> {
  mode: 'all' | 'users';
  keyword: string;
}

const SearchResults = ({ mode, keyword, className }: SearchResultsProps) => {
  const { data: searchResults = [], isLoading } = useSearchResults(
    mode,
    keyword,
  );

  return (
    <div className={cn('mb-xlarge', className)}>
      {isLoading ? (
        <Group spacing="sm" align="center" position="center" className="h-60">
          <Loading />
        </Group>
      ) : (
        <>
          <Text className="pb-small pl-small text-base-small">{`검색 결과 ${searchResults.length}건`}</Text>
          {searchResults &&
            searchResults.map((item: User | Post) =>
              'role' in item ? (
                <UserItem user={item} key={item._id} />
              ) : (
                <PostItem post={item} key={item._id} />
              ),
            )}
        </>
      )}
    </div>
  );
};

export default SearchResults;
