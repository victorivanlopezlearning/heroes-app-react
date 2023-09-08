import { render, screen } from '@testing-library/react';
import { PublicRoute } from '../../src/router/PublicRoute';
import { AuthContext } from '../../src/auth';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Tests in <PublicRoute />', () => {
  test('should show children if not logged', () => {

    const contextValue = {
      logged: false
    };

    render(
      <AuthContext.Provider
        value={contextValue}
      >
        <PublicRoute>
          <h1>Ruta pública</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Ruta pública')).toBeTruthy();
  });

  test('should navigate if is logged', () => {

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
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route path="login" element={
              <PublicRoute>
                <h1>Ruta Pública</h1>
              </PublicRoute>
            } />
            <Route path="marvel" element={<h1>Página Marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Página Marvel')).toBeTruthy();
  });
});