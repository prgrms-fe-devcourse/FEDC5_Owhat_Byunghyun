import { useEffect, useState } from 'react';

import { Post } from '~/api/types/postTypes.ts';
import { User } from '~/api/types/userTypes.ts';
import ArrowBackButton from '~/common/components/ArrowBackButton/index.tsx';
import Tab from '~/common/components/Tab';
import useSearchResults from '~/common/hooks/queries/useSearchResults/index.ts';
import useLayout from '~/common/hooks/useLayout.ts';
import { jsonToData } from '~/utils/jsonToData.ts';

import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import useSearchForm from './hooks/useSearchForm.ts';
import type { ValuesObj } from './type.ts';

const SearchPage = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [postResults, setPostResults] = useState<Post[]>([]);

  const { data: allResults, isLoading: isAllLoading } = useSearchResults(
    'all',
    keyword,
  );
  const { data: userResults, isLoading: isUserLoading } = useSearchResults(
    'users',
    keyword,
  );

  const { changeMeta } = useLayout();
  const { handleChange, handleSubmit } = useSearchForm({
    initialValues: {
      search: '',
    },
    onSubmit: ({ search = '' }: ValuesObj) => {
      setKeyword(search);
    },
    validate: ({ search }: ValuesObj) => {
      const errors: ValuesObj = {};

      if (!search) return errors;
      if (!search.trim()) errors.search = '검색어를 입력하세요.';

      return errors;
    },
  });

  useEffect(() => {
    if (!allResults) return;

    const filteredSearchResults = allResults
      .filter(result => 'title' in result)
      .filter(result => {
        const { postTitle, postContent } = jsonToData((result as Post).title);
        return postTitle.includes(keyword) || postContent.includes(keyword);
      });

    setPostResults(filteredSearchResults as Post[]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allResults]);

  useEffect(() => {
    changeMeta({
      title: '검색',
      left: <ArrowBackButton />,
      right: '',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <SearchBar onSubmit={handleSubmit} onChange={handleChange} />
      {keyword && (
        <Tab>
          <Tab.Item title="포스트" subText={postResults.length} label="all">
            <SearchResults
              mode="all"
              searchResults={postResults}
              isLoading={isAllLoading}
            />
          </Tab.Item>
          <Tab.Item title="사용자" subText={userResults?.length} label="user">
            <SearchResults
              mode="users"
              searchResults={userResults as User[]}
              isLoading={isUserLoading}
            />
          </Tab.Item>
        </Tab>
      )}
    </section>
  );
};

export default SearchPage;
