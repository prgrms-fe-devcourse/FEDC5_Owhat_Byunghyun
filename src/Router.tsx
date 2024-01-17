import { Suspense } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import AccountPage from './pages/account';
import AccountSkeleton from './pages/account/components/AccountSkeleton';
import AccountEditPage from './pages/accountEdit';
import AccountEditSkeleton from './pages/accountEdit/components/AccountEditSkeleton';
import FollowPage from './pages/follow';
import FollowSkeleton from './pages/follow/components/FollowSkeleton';
import HomePage from './pages/home';
import FeedSkeleton from './pages/home/components/FeedItem/Skeleton';
import LoginPage from './pages/login';
import MessagePage from './pages/message';
import MessageSendPage from './pages/messageSend';
import NotificationPage from './pages/notification';
import PostDetailPage from './pages/postDetail';
import RegisterPage from './pages/register';
import SearchPage from './pages/search';
import UpdatePasswordPage from './pages/updatePassword';
import { PublicRouter, LayoutWrapper, PrivateRouter } from './routes';


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
      <Route element={<PrivateRouter />}>
        <Route
          path="/account"
          element={
            <Suspense fallback={<AccountSkeleton />}>
              <AccountPage />
            </Suspense>
          }
        />
        <Route path="/update-password" element={<UpdatePasswordPage />} />
        <Route
          path="/account-edit"
          element={
            <Suspense fallback={<AccountEditSkeleton />}>
              <AccountEditPage />
            </Suspense>
          }
        />
      </Route>
      <Route
        path="/account/:userId"
        element={
          <Suspense fallback={<AccountSkeleton />}>
            <AccountPage />
          </Suspense>
        }
      />
      <Route
        path="/follow"
        element={
          <Suspense fallback={<FollowSkeleton />}>
            <FollowPage />
          </Suspense>
        }
      />

      <Route path="/message" element={<MessagePage />} />
      <Route path="/message/:userId" element={<MessageSendPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/notification" element={<NotificationPage />} />
      <Route path="/posts/:postId" element={<PostDetailPage />} />
      <Route element={<PublicRouter />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Route>,
  ),
);

export default router;
