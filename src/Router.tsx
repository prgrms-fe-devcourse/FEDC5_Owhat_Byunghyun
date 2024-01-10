import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import AccountPage from './pages/account';
import AccountEditPage from './pages/account/edit';
import UpdatePasswordPage from './pages/account/edit/password';
import FollowPage from './pages/follow';
import HomePage from './pages/HomePage';
import MessagePage from './pages/message';
import NotificationPage from './pages/notification';
import SearchPage from './pages/search';

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
    path: '/account/:id',
    element: (
      <Suspense fallback={<div>loading...</div>}>
        <AccountPage />
      </Suspense>
    ),
  },
  {
    path: '/account/edit',
    element: <AccountEditPage />,
  },
  {
    path: '/account/edit/password',
    element: <UpdatePasswordPage />,
  },
  {
    path: '/follow',
    element: <FollowPage />,
  },
]);
