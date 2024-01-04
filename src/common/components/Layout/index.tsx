import { createContext, ReactNode, useEffect, useState } from 'react';

import Header, { type HeaderProps } from '../Header';

interface ILayoutContext extends HeaderProps {
  changeMeta: ({ title, left, right }: HeaderProps) => void;
}

interface LayoutProviderProps {
  children: ReactNode;
}

export const LayoutContext = createContext<ILayoutContext>(
  {} as ILayoutContext,
);

const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const [template, setTemplate] = useState<HeaderProps>({
    title: '',
    left: null,
    right: null,
  });

  const changeMeta = ({
    title,
    left,
    right,
  }: Omit<ILayoutContext, 'changeMeta'>) => {
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
    <LayoutContext.Provider value={{ ...template, changeMeta }}>
      <main className="max-w-layout px">
        <Header {...template} />
        {children}
      </main>
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;
