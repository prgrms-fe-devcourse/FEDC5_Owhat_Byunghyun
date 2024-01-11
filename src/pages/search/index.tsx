import { useState } from 'react';

import Tab from '~/common/components/Tab';

import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import useForm from './hooks/useForm';
import type { ValuesObj } from './type.ts';

const SearchPage = () => {
  const [keyword, setKeyword] = useState<string>('');

  const { handleChange, handleSubmit } = useForm({
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

  return (
    <>
      <SearchBar
        onSubmit={handleSubmit}
        onChange={handleChange}
        className="mb-xlarge"
      />
      {keyword && (
        <Tab>
          <Tab.Item title="포스트 + 사용자" label="all">
            <SearchResults mode="all" keyword={keyword} />
          </Tab.Item>
          <Tab.Item title="사용자" label="user">
            <SearchResults mode="users" keyword={keyword} />
          </Tab.Item>
        </Tab>
      )}
    </>
  );
};

export default SearchPage;
