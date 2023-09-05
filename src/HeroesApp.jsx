import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';

const router = createBrowserRouter(AppRouter);

export const HeroesApp = () => {
  return <RouterProvider router={router} />
}