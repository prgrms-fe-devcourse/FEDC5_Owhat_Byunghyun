import { createBrowserRouter } from 'react-router-dom';

import AccountPage from './pages/account';
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
    path: '/account',
    element: <AccountPage />,
  },
]);
