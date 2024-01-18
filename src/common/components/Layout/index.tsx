import { useQueryClient } from '@tanstack/react-query';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import useAuthUser from '~/common/hooks/queries/useAuthUser';
import useNotificationList from '~/common/hooks/queries/useNotificationList';
import { QUERY_KEY } from '~/constants/queryKey';

import AcordionButton from '../AcordionButton';
import Header, { type HeaderProps } from '../Header';
import Loading from '../Loading';
import NavigationBar from '../NavigationBar';
import ThemeButton from '../ThemeButton';

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
  const location = useLocation();
  const isRootPath = location.pathname === '/';

  const queryClient = useQueryClient();
  const { user, isLoading: userLoading } = useAuthUser();
  const {
    notificationList,
    isLoading: notiLoading,
    isError,
  } = useNotificationList();

  if (isError) {
    queryClient.setQueryData([QUERY_KEY.NOTIFICATION_LIST], null);
  }
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
          <NavigationBar
            isLogin={!!user}
            myProfile={user?.image}
            isAlarm={
              notificationList?.some(notification => !notification.seen) ||
              false
            }
          />
        )}
        {isRootPath ? (
          <div className="fixed bottom-[130px] right-[60px] z-10 -translate-x-1/2">
            <AcordionButton />
          </div>
        ) : (
          <div className="fixed bottom-[95px] right-[26px] z-10 ">
            <ThemeButton className="p-1" />
          </div>
        )}
      </main>
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;
