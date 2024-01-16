import { useEffect, useState } from 'react';

import { BrowserStorage } from '~/utils/storage';

import Button from '../Button';
import Icon from '../Icon';

const ThemeButton = () => {
  const myStorage = new BrowserStorage<string>('DARK_MODE');

  const localStorageCheker = (): boolean => {
    if (myStorage.get()) return false;
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
    <>
      <Button
        className="p-sm z-10 rounded-full p-1"
        styleType="ghost"
        onClick={darkSetButton}
      >
        {dark ? (
          <Icon id="dark-mode" className="fill-yellow-200 stroke-2" />
        ) : (
          <Icon id="light-mode" className="stroke-4 fill-red-400" />
        )}
      </Button>
      <div
        className={`absolute top-0 h-8 w-8 ${
          dark ? 'bg-yellow-200' : 'bg-orange-200'
        }  p-2 blur-md`}
      ></div>
    </>
  );
};

export default ThemeButton;
