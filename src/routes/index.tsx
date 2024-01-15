import { Navigate, Outlet } from 'react-router-dom';

import LayoutProvider from '~/common/components/Layout';
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
  const { user } = useAuthUser();

  return <>{user ? <Outlet /> : <Navigate to="/login" />}</>;
};

export const AuthUserRouter = () => {
  const { user } = useAuthUser();

  return <>{user ? <Navigate to="/" /> : <Outlet />}</>;
};
