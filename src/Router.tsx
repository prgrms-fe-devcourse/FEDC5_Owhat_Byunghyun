import { Suspense } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import AccountPage from './pages/account';
import AccountEditPage from './pages/accountEdit';
import FollowPage from './pages/follow';
import HomePage from './pages/home';
import FeedSkeleton from './pages/home/components/FeedItem/Skeleton';
import LoginPage from './pages/login';
import MessagePage from './pages/message';
import RegisterPage from './pages/register';
import UpdatePasswordPage from './pages/updatePassword';
import { AuthUserRouter, LayoutWrapper } from './routes';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<LayoutWrapper />}>
      <Route
        path="/"
        element={
          <Suspense fallback={<FeedSkeleton />}>
            <HomePage />
          </Suspense>
        }
      />

      <Route
        path="/account"
        element={
          <Suspense fallback={<div>로딩중...</div>}>
            <AccountPage />
          </Suspense>
        }
      />
      <Route
        path="/account/:userId"
        element={
          <Suspense fallback={<div>로딩중...</div>}>
            <AccountPage />
          </Suspense>
        }
      />
      <Route
        path="/follow"
        element={
          <Suspense fallback={<div>로딩중...</div>}>
            <FollowPage />
          </Suspense>
        }
      />
      <Route path="/account-edit" element={<AccountEditPage />} />
      <Route path="/update-password" element={<UpdatePasswordPage />} />
      <Route path="/message" element={<MessagePage />} />
      <Route element={<AuthUserRouter />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

    </Route>,
  ),
);

export default router;
