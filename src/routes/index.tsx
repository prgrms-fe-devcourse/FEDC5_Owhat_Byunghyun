import { Navigate, Outlet } from 'react-router-dom';

import LayoutProvider from '~/common/components/Layout';
import Toast from '~/common/components/Toast';
import useAuthUser from '~/common/hooks/queries/useAuthUser';

export const LayoutWrapper = () => (
  <LayoutProvider>
    <Outlet />
  </LayoutProvider>
);

export const PublicRouter = () => {
  const { user } = useAuthUser();

  return <>{user ? <Navigate to="/" /> : <Outlet />}</>;
};

export const PrivateRouter = () => {
  const { user, isLoading } = useAuthUser();

  if (!user && !isLoading) Toast.show('로그인이 필요한 서비스입니다.');

  if (!isLoading) return <>{user ? <Outlet /> : <Navigate to="/login" />}</>;
};
