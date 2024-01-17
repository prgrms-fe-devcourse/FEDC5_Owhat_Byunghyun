import { createContext, ReactNode, useEffect, useState } from 'react';

import useAuthUser from '~/common/hooks/queries/useAuthUser';
import useNotificationList from '~/common/hooks/queries/useNotificationList';

import AcordionButton from '../AcordionButton';
import Header, { type HeaderProps } from '../Header';
import Loading from '../Loading';
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
  //TODO: 추후 useQUERY를 줄이는 방법으로 리팩토링
  const { user, isLoading: userLoading } = useAuthUser();
  const { notificationList, isLoading: notiLoading } = useNotificationList();
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

  if (userLoading || notiLoading) return <Loading />;

  return (
    <LayoutContext.Provider
      value={{ ...template, changeMeta, changeBottomNavigator }}
    >
      <main className="relative mx-auto h-screen max-w-layout rotate-0 overscroll-y-none px">
        <Header {...template} />
        {children}
        {hasNavigator && (
          <>
            <div className="fixed bottom-[100px] right-[40px] z-10 -translate-x-1/2">
              <AcordionButton />
            </div>
            <NavigationBar
              isLogin={!!user}
              myProfile={user?.image}
              isAlarm={
                notificationList?.some(notification => !notification.seen) ||
                false
              }
            />
          </>
        )}
      </main>
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;
