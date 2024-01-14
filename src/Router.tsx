import { Suspense } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import AccountEditPage from './pages/accountEdit';
import HomePage from './pages/home';
import FeedSkeleton from './pages/home/components/FeedItem/Skeleton';
import RegisterPage from './pages/register';
import UpdatePasswordPage from './pages/updatePassword';
import { LayoutWrapper } from './routes';

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
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/account-edit"
        element={
          <Suspense fallback={<div>로딩중...</div>}>
            <AccountEditPage />
          </Suspense>
        }
      />
      <Route path="/update-password" element={<UpdatePasswordPage />}></Route>
    </Route>,
  ),
);

export default router;
