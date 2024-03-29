import { ChangeEvent, FormEvent, useState } from 'react';

import Group from '~/common/components/Group';
import Icon from '~/common/components/Icon';
import Input from '~/common/components/Input';

type OnSubmitFn = (e: FormEvent<HTMLFormElement>) => void;
type OnChangeFn = (e: ChangeEvent<HTMLInputElement>) => void;

interface SearchBarProps {
  onSubmit: OnSubmitFn;
  onChange: OnChangeFn;
}

const SearchBar = ({ onSubmit, onChange }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange(e);
  };

  const handleClickRemoveIcon = () => {
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit} className="h-16">
      <Group
        spacing={5}
        align="center"
        className="mb-xlarge flex-nowrap rounded-3xl border-2 border-black px py-xsmall"
      >
        <Icon id="search" size={18} className="flex-shrink-0" />
        <Input
          hasBorder={false}
          placeholder="검색어를 입력하세요."
          name="search"
          onChange={handleInputChange}
          value={inputValue}
          className="w-full dark:bg-transparent dark:text-white"
        />
        <Icon
          id="cancel"
          size={18}
          className="flex-shrink-0 cursor-pointer justify-self-end"
          onClick={handleClickRemoveIcon}
        />
      </Group>
    </form>
  );
};

export default SearchBar;
