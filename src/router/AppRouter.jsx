import { Navigate } from "react-router-dom";
import { HeroesApp } from "../HeroesApp";
import { MarvelPage } from "../heroes/pages/MarvelPage";
import { DcPage } from "../heroes/pages/DcPage";
import { LoginPage } from "../auth/pages/LoginPage";

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