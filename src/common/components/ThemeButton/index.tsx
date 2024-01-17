import { ComponentProps, useEffect, useState } from 'react';

import { cn } from '~/utils/cn';
import { BrowserStorage } from '~/utils/storage';

import Button from '../Button';
import Icon from '../Icon';

interface ThemeButton extends ComponentProps<'button'> {}

const ThemeButton = ({ className }: ThemeButton) => {
  const myStorage = new BrowserStorage<string>('DARK_MODE');

  const localStorageCheker = (): boolean => {
    if (myStorage.get() === undefined) return false;
    return myStorage.get() === 'dark' ? true : false;
  };
  const [dark, setDark] = useState(localStorageCheker());
  const darkSetButton = () => {
    setDark(state => {
      const update = !state;
      if (update) {
        myStorage.set('dark');
      } else {
        myStorage.set('light');
      }
      return update;
    });
  };

  useEffect(() => {
    if (
      myStorage.get() === 'dark' ||
      (myStorage.get() === undefined &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <Button
      className={cn(
        'z-10 rounded-full shadow-md dark:bg-transparent',
        className,
      )}
      styleType="secondary"
      onClick={darkSetButton}
    >
      {dark ? <Icon id="dark-mode" /> : <Icon id="light-mode" />}
    </Button>
  );
};

export default ThemeButton;
