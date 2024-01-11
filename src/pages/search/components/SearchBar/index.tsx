import { BaseSyntheticEvent, ComponentProps, FormEvent, useState } from 'react';

import Group from '~/common/components/Group';
import Icon from '~/common/components/Icon';
import Input from '~/common/components/Input';
import { cn } from '~/utils/cn';

type OnSubmitFn = (e: BaseSyntheticEvent | FormEvent<HTMLFormElement>) => void;
type OnChangeFn = (e: BaseSyntheticEvent | FormEvent<HTMLInputElement>) => void;

interface SearchBarProps extends ComponentProps<'div'> {
  onSubmit: OnSubmitFn;
  onChange: OnChangeFn;
}

const SearchBar = ({ onSubmit, onChange, className }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (
    e: BaseSyntheticEvent | FormEvent<HTMLInputElement>,
  ) => {
    setInputValue(e.target.value);
    onChange(e);
  };

  const handleClickRemoveIcon = () => {
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <Group
        spacing={5}
        align="center"
        className={cn(
          'rounded-3xl border-2 border-black px py-xsmall',
          className,
        )}
      >
        <Icon id="search" size={18} />
        <Input
          hasBorder={false}
          placeholder="검색어를 입력하세요."
          name="search"
          onChange={handleInputChange}
          value={inputValue}
          className="grow"
        />
        <Icon
          id="cancel"
          size={18}
          className="cursor-pointer"
          onClick={handleClickRemoveIcon}
        />
      </Group>
    </form>
  );
};

export default SearchBar;
