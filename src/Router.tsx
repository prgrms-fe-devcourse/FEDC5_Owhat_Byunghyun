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
import MessageSendPage from './pages/messageSend';
import NotificationPage from './pages/notification';
import PostDetailPage from './pages/postDetail';
import RegisterPage from './pages/register';
import SearchPage from './pages/search';
import UpdatePasswordPage from './pages/updatePassword';
import { LayoutWrapper, PublicRouter } from './routes';

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
      <Route path="/update-password" element={<UpdatePasswordPage />} />
      <Route
        path="/account-edit"
        element={
          <Suspense fallback={<div>로딩중...</div>}>
            <AccountEditPage />
          </Suspense>
        }
      />
      <Route path="/message" element={<MessagePage />} />
      <Route path="/message/:userId" element={<MessageSendPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/notification" element={<NotificationPage />} />
      <Route path="/posts/:postId" element={<PostDetailPage />} />
      <Route element={<AuthUserRouter />}>
      <Route element={<PublicRouter />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Route>,
  ),
);

export default router;
