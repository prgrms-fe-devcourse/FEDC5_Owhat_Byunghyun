import { Suspense } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import HomePage from './pages/home';
import FeedSkeleton from './pages/home/components/FeedItem/Skeleton';
import RegisterPage from './pages/register';
import SearchPage from './pages/search';
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
      <Route path="/search" element={<SearchPage />} />
    </Route>,
  ),
);

export default router;
