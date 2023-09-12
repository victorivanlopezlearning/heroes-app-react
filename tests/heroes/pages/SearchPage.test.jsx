import { fireEvent, render, screen } from '@testing-library/react';
import { SearchPage } from '../../../src/heroes/pages/SearchPage';
import { RouterProvider, createMemoryRouter, useSearchParams } from 'react-router-dom';
import { AppRouter } from '../../../src/router/AppRouter';
import { AuthContext } from '../../../src/auth';

const mockSetSearchParams = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useSearchParams: () => [jest.requireActual("react-router-dom").useSearchParams()[0], mockSetSearchParams]
}));

describe('Tests in <SearchPage />', () => {

  beforeEach(() => jest.clearAllMocks());

  test('should show with default values', () => {

    const router = createMemoryRouter(AppRouter, {
      initialEntries: ['/search'],
    });

    const { container } = render(
      <AuthContext.Provider value={{ logged: true }}>
        <RouterProvider router={router}>
          <SearchPage />
        </RouterProvider>
      </AuthContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });

  test('should show a hero and the input value of the queryString', () => {

    const heroSearched = 'batman';

    const router = createMemoryRouter(AppRouter, {
      initialEntries: [`/search?q=${heroSearched}`],
    });

    render(
      <AuthContext.Provider value={{ logged: true }}>
        <RouterProvider router={router}>
          <SearchPage />
        </RouterProvider>
      </AuthContext.Provider>
    );

    const input = screen.getByRole('textbox');
    expect(input.value).toBe(heroSearched);
  });

  test('should show an error if a hero is not found', () => {

    const heroSearched = 'batman1234';

    const router = createMemoryRouter(AppRouter, {
      initialEntries: [`/search?q=${heroSearched}`],
    });

    render(
      <AuthContext.Provider value={{ logged: true }}>
        <RouterProvider router={router}>
          <SearchPage />
        </RouterProvider>
      </AuthContext.Provider>
    );

    const alert = screen.getByRole('alert');

    expect(alert.textContent).toBe(`${heroSearched} no encontrado. Favor de buscar otro heroe`);
  });

  test('should call the setSearchParams function', () => {

    const heroSearched = 'batman';

    const router = createMemoryRouter(AppRouter, {
      initialEntries: [`/search`],
    });

    render(
      <AuthContext.Provider value={{ logged: true }}>
        <RouterProvider router={router}>
          <SearchPage />
        </RouterProvider>
      </AuthContext.Provider>
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: heroSearched } });

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(mockSetSearchParams).toHaveBeenCalled();
    expect(mockSetSearchParams).toHaveBeenCalledWith(`?q=${heroSearched}`);
  });
});