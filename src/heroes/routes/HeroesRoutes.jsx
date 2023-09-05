import { Navigate } from "react-router-dom";
import { MarvelPage, DcPage, HeroPage, SearchPage } from "../pages";

export const HeroesRoutes = [
  {
    index: true,
    element: <Navigate to='/marvel' />
  },
  {
    path: '/*',
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
    path: 'search',
    element: <SearchPage />
  },
  {
    path: 'hero',
    element: <HeroPage />
  },
];
