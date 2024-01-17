import { Post } from '~/api/types/postTypes';
import { User } from '~/api/types/userTypes';
import Group from '~/common/components/Group';
import Loading from '~/common/components/Loading';

import PostItem from './PostItem';
import UserItem from './UserItem';

interface SearchResultsProps {
  mode: 'all' | 'users';
  searchResults: Post[] | User[];
  isLoading: boolean;
}

const SearchResults = ({
  mode,
  searchResults,
  isLoading,
}: SearchResultsProps) => {
  if (isLoading) {
    return (
      <Group spacing="sm" align="center" position="center" className="h-60">
        <Loading />
      </Group>
    );
  }

  return (
    <div className="mb-xlarge">
      <div className="scroll-none h-[calc(100vh-220px)] overflow-y-auto">
        {mode === 'all'
          ? searchResults &&
            (searchResults as Post[]).map((item: Post) => (
              <PostItem post={item} key={item._id} />
            ))
          : searchResults &&
            (searchResults as User[]).map((item: User) => (
              <UserItem user={item} key={item._id} />
            ))}
      </div>
    </div>
  );
};

export default SearchResults;
