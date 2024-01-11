import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import AccountPage from './pages/account';
import AccountEditPage from './pages/accountEdit';
import FollowPage from './pages/follow';
import HomePage from './pages/HomePage';
import MessagePage from './pages/message';
import NotificationPage from './pages/notification';
import SearchPage from './pages/search';
import UpdatePasswordPage from './pages/updatePassword';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/search',
    element: <SearchPage />,
  },
  {
    path: '/message',
    element: <MessagePage />,
  },
  {
    path: '/notification',
    element: <NotificationPage />,
  },
  {
    path: '/account/:userId',
    element: (
      <Suspense fallback={<div>loading...</div>}>
        <AccountPage />
      </Suspense>
    ),
  },
  {
    path: '/account-edit',
    element: <AccountEditPage />,
  },
  {
    path: '/update-password',
    element: <UpdatePasswordPage />,
  },
  {
    path: '/follow',
    element: <FollowPage />,
  },
]);
