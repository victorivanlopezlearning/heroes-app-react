import { Navigate } from 'react-router-dom';
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';
import { LoginPage } from '../auth';
import { HeroesLayout } from '../heroes/pages/HeroesLayout';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = [
  {
    path: '/',
    element:
      <PrivateRoute>
        <HeroesLayout />
      </PrivateRoute>,
    children: HeroesRoutes,
  },
  {
    path: 'login',
    element:
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
  }
]