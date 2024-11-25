import { createBrowserRouter } from 'react-router-dom';

import { Loading } from '@/components/Loading.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    async lazy() {
      const { AppLayout } = await import('../layouts/AppLayout.tsx');
      return { Component: AppLayout };
    },
    hydrateFallbackElement: <Loading />,
    children: [
      {
        index: true,
        async lazy() {
          const { HomePage } = await import('../pages/HomePage.tsx');
          return { Component: HomePage };
        },
        hydrateFallbackElement: <Loading />,
      },
    ],
  },
  {
    path: '*',
    async lazy() {
      const { NotFoundPage } = await import('../pages/NotFoundPage.tsx');
      return { Component: NotFoundPage };
    },
    hydrateFallbackElement: <Loading />,
  },
]);

export default router;
