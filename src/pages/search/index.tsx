import { useEffect, useState } from 'react';

import Tab from '~/common/components/Tab';
import useLayout from '~/common/hooks/useLayout.ts';

import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import useSearchForm from './hooks/useSearchForm.ts';
import type { ValuesObj } from './type.ts';

const SearchPage = () => {
  const [keyword, setKeyword] = useState<string>('');
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
    changeMeta({
      title: '검색',
      left: '',
      right: '',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <SearchBar onSubmit={handleSubmit} onChange={handleChange} />
      {keyword && (
        <Tab>
          <Tab.Item title="포스트" label="all">
            <SearchResults mode="all" keyword={keyword} />
          </Tab.Item>
          <Tab.Item title="사용자" label="user">
            <SearchResults mode="users" keyword={keyword} />
          </Tab.Item>
        </Tab>
      )}
    </section>
  );
};

export default SearchPage;
