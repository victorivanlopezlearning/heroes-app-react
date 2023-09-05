import { Navigate } from 'react-router-dom';
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';
import { MarvelPage, DcPage, SearchPage, HeroPage } from '../heroes';
import { LoginPage } from '../auth';
import { HeroesLayout } from '../heroes/pages/HeroesLayout';

export const AppRouter = [
  {
    path: '/',
    element: <HeroesLayout />,
    children: HeroesRoutes,
  },
  {
    path: 'login',
    element: <LoginPage />
  }
]