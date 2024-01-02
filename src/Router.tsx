import { createBrowserRouter } from 'react-router-dom';

import AccountPage from './pages/AccountPage';
import HomePage from './pages/HomePage';
import MessagePage from './pages/MessagePage';
import NotificationPage from './pages/NotificationPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
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
