import { Navigate } from 'react-router-dom';
import { HeroesApp } from '../HeroesApp';
import { MarvelPage, DcPage } from '../heroes';
import { LoginPage } from '../auth';

export const AppRouter = [
  {
    path: '/',
    element: <HeroesApp />,
    children: [
      {
        index: true,
        element: <Navigate to='/marvel' />
      },
      {
        path: 'marvel',
        element: <MarvelPage /> 
      },
      {
        path: 'dc',
        element: <DcPage /> 
      },
      {
        path: 'login',
        element: <LoginPage /> 
      }
    ]
  },
]