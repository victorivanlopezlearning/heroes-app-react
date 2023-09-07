import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { AuthProvider } from './auth';

const router = createBrowserRouter(AppRouter);

export const HeroesApp = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}