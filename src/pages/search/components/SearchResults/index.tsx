import { useEffect, useState } from 'react';

import { Post } from '~/api/types/postTypes';
import { User } from '~/api/types/userTypes';
import Group from '~/common/components/Group';
import Loading from '~/common/components/Loading';
import Text from '~/common/components/Text';
import useSearchResults from '~/common/hooks/queries/useSearchResults';

import PostItem from './PostItem';
import UserItem from './UserItem';

interface SearchResultsProps {
  mode: 'all' | 'users';
  keyword: string;
}

const SearchResults = ({ mode, keyword }: SearchResultsProps) => {
  const [postResults, setPostResults] = useState<Post[]>([]);
  const { data: searchResults = [], isLoading } = useSearchResults(
    mode,
    keyword,
  );

  const isJson = (str: string) => {
    try {
      const json = JSON.parse(str);
      return json && typeof json === 'object';
    } catch (e) {
      return false;
    }
  };

  const jsonToData = (title: string) => {
    if (isJson(title)) {
      const { title: postTitle, content: postContent } = JSON.parse(title);

      return { postTitle, postContent };
    } else {
      return { postTitle: title, postContent: '' };
    }
  };

  useEffect(() => {
    if (mode === 'all') {
      const filteredSearchResults = searchResults
        .filter(result => 'title' in result)
        .filter(result => {
          const { postTitle, postContent } = jsonToData((result as Post).title);
          return postTitle.includes(keyword) || postContent.includes(keyword);
        });

      setPostResults(filteredSearchResults as Post[]);
    }
  }, [searchResults]);

  return (
    <div className="mb-xlarge">
      {isLoading ? (
        <Group spacing="sm" align="center" position="center" className="h-60">
          <Loading />
        </Group>
      ) : (
        <>
          <Text className="h-6 pl-small text-base-small">{`검색 결과 ${
            mode === 'all' ? postResults.length : searchResults.length
          }건`}</Text>
          <div className="scroll-none h-[calc(100vh-250px)] overflow-y-auto">
            {mode === 'all'
              ? postResults &&
                postResults.map((item: Post) => (
                  <PostItem post={item} key={item._id} />
                ))
              : searchResults &&
                (searchResults as User[]).map((item: User) => (
                  <UserItem user={item} key={item._id} />
                ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchResults;
