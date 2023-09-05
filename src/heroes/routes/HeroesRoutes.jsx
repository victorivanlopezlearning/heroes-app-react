
export const HeroesRoutes = [
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
    path: 'search',
    element: <SearchPage />
  },
  {
    path: 'hero',
    element: <HeroPage />
  },
];
