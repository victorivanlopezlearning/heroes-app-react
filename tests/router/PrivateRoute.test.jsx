import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth';
import { PrivateRoute } from '../../src/router/PrivateRoute';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Tests in <PrivateRoute />', () => {
  test('should show children if is logged', () => {

    const contextValue = {
      logged: true,
      user: {
        id: 1,
        name: 'Víctor Iván López'
      }
    };

    render(
      <AuthContext.Provider
        value={contextValue}
      >
        <MemoryRouter initialEntries={["/marvel"]}>
          <Routes>
            <Route path="marvel" element={
              <PrivateRoute>
                <h1>Ruta privada</h1>
              </PrivateRoute>
            } />
            <Route path="login" element={<h1>Página Login</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Ruta privada')).toBeTruthy();
  });

  test('should navigate to login page if not logged', () => {

    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider
        value={contextValue}
      >
        <MemoryRouter initialEntries={["/marvel"]}>
          <Routes>
            <Route path="marvel" element={
              <PrivateRoute>
                <h1>Ruta privada</h1>
              </PrivateRoute>
            } />
            <Route path="login" element={<h1>Página Login</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Página Login')).toBeTruthy();
  });

  test('should call the localStorage.setItem', () => {

    Storage.prototype.setItem = jest.fn(); // Storage.prototype.setItem | es la forma de obtener los datos de la API de localStorage dentro de Node y poder evaluarla. Esto es porque el localStorage no existe en node, esto es solo para los navegadores web, por ello definimos el mock para el setItem del localStorage para simular su funcionamiento y poder hacer el test

    const contextValue = {
      logged: true,
      user: {
        id: 1,
        name: 'Víctor Iván López'
      }
    };

    render(
      <AuthContext.Provider
        value={contextValue}
      >
        <MemoryRouter initialEntries={["/marvel"]}>
          <PrivateRoute>
            <h1>Ruta privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');

  });
});