import { fireEvent, render, screen } from '@testing-library/react';
import { Navbar } from '../../../src/ui/components/Navbar';
import { AuthContext } from '../../../src/auth/context';
import { RouterProvider, createMemoryRouter, useNavigate } from 'react-router-dom';
import { AppRouter } from '../../../src/router/AppRouter';

const mockUseNavigate = jest.fn();

// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'), // Indicar que use de manera default todo lo que tiene la librería a la que se le hizo el mock
//   useNavigate: () => mockUseNavigate
// }));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Tests in <Navbar />', () => {

  const logoutMock = jest.fn();

  const contextValue = {
    logged: true,
    user: {
      name: 'Víctor Iván López',
      id: 1
    },
    logout: logoutMock
  };

  beforeEach(() => jest.clearAllMocks());

  test('should show username logged', () => {

    const router = createMemoryRouter(AppRouter, {
      initialEntries: ['/marvel', '/login'],
      initialIndex: 0
    });

    render(
      <AuthContext.Provider
        value={contextValue}
      >
        <RouterProvider router={router}>
          <Navbar />
        </RouterProvider>
      </AuthContext.Provider>
    );

    expect(screen.getByText(contextValue.user.name)).toBeTruthy();
  });

  test('should call the logout and navigate when the Button is clicked', () => {

    const navigateMock = jest.fn();
        
    useNavigate.mockReturnValueOnce(navigateMock);

    const router = createMemoryRouter(AppRouter, {
      initialEntries: ['/marvel']
    });

    render(
      <AuthContext.Provider
        value={contextValue}
      >
        <RouterProvider router={router}>
          <Navbar />
        </RouterProvider>
      </AuthContext.Provider>
    );

    const btnLogout = screen.getByRole('button', { name: 'Cerrar Sesión' })
    fireEvent.click(btnLogout);

    expect(logoutMock).toHaveBeenCalled();
    expect(navigateMock).toHaveBeenCalledWith('/login', { 'replace': true });
  });
});