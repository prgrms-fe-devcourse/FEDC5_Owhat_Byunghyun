import { Suspense } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import HomePage from './pages/home';
import FeedSkeleton from './pages/home/components/FeedItem/Skeleton';
import NotificationPage from './pages/notification';
import RegisterPage from './pages/register';
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
      <Route path="/notification" element={<NotificationPage />} />
    </Route>,
  ),
);

export default router;
