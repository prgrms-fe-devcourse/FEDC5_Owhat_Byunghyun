import { Suspense } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import NotFoundPage from './pages/404';
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
import MoreUsersPage from './pages/moreUsers';
import NotificationPage from './pages/notification';
import PostCreatePage from './pages/postCreate';
import PostDetailPage from './pages/postDetail';
import RegisterPage from './pages/register';
import SearchPage from './pages/search';
import UpdatePasswordPage from './pages/updatePassword';
import { LayoutWrapper, PrivateRouter, PublicRouter } from './routes';

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
      <Route path="/posts/:postId" element={<PostDetailPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route
        path="/follow"
        element={
          <Suspense fallback={<FollowSkeleton />}>
            <FollowPage />
          </Suspense>
        }
      />
      <Route
        path="/account/:userId"
        element={
          <Suspense fallback={<AccountSkeleton />}>
            <AccountPage />
          </Suspense>
        }
      />
      <Route path="/message" element={<MessagePage />} />
      <Route path="/more-users" element={<MoreUsersPage />} />

      <Route element={<PrivateRouter />}>
        <Route path="/postCreate" element={<PostCreatePage />} />
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
        <Route path="/message/:userId" element={<MessageSendPage />} />
        <Route path="/notification" element={<NotificationPage />} />
      </Route>

      <Route element={<PublicRouter />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);

export default router;
