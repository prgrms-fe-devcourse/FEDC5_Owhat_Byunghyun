import { useEffect, useState } from 'react';

import Button from '../Button';
import Icon from '../Icon';

const ThemeButton = () => {
  const localStorageCheker = (): boolean => {
    if (!localStorage.theme) return false;
    return localStorage.theme === 'dark' ? true : false;
  };
  const [dark, setDark] = useState(localStorageCheker());
  const darkSetButton = () => {
    setDark(state => {
      const update = !state;
      if (update) {
        localStorage.theme = 'dark';
      } else {
        localStorage.theme = 'light';
      }
      return update;
    });
  };

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
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
