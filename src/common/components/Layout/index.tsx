import { createContext, ReactNode, useEffect, useState } from 'react';

import Header, { type HeaderProps } from '../Header';
import NavigationBar from '../NavigationBar';

interface ILayoutContext extends HeaderProps {
  changeMeta: ({ title, left, right }: HeaderProps) => void;
  changeBottomNavigator: (has: boolean) => void;
}

interface LayoutProviderProps {
  children: ReactNode;
}

export const LayoutContext = createContext<ILayoutContext>(
  {} as ILayoutContext,
);

const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const [hasNavigator, setHasNavigator] = useState(true);
  const [template, setTemplate] = useState<HeaderProps>({
    title: '',
    left: null,
    right: null,
  });

  const changeBottomNavigator = (has: boolean) => setHasNavigator(has);

  const changeMeta = ({ title, left, right }: HeaderProps) => {
    setTemplate({
      ...template,
      title: title || template.title,
      left: left || template.left,
      right: right || template.right,
    });
  };

  useEffect(() => {
    document.title = `${
      template.title || 'Owhat!'
    } | OTT에 대한 정보를 한 번에!`;
  }, [template.title]);

  return (
    <LayoutContext.Provider
      value={{ ...template, changeMeta, changeBottomNavigator }}
    >
      <main className="relative mx-auto h-screen max-w-layout rotate-0 overscroll-y-none px">
        <Header {...template} />
        {children}
        {hasNavigator && <NavigationBar />}
      </main>
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;
