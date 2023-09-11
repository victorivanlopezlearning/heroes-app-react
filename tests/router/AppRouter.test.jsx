import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { AppRouter } from "../../src/router/AppRouter";
import { AuthContext } from "../../src/auth";

describe('Tests in <AppRouter />', () => {
  test('should show login page if not logged', () => {

    const contextValue = {
      logged: false
    };

    const router = createMemoryRouter(AppRouter, { 
      initialEntries: ['/login'],
      initialIndex: 0
    });


    render(
      <AuthContext.Provider value={contextValue}>
        <RouterProvider router={router} />
      </AuthContext.Provider>
    );

    expect(screen.getByText('Iniciar Sesión')).toBeTruthy();
  });

  test('should show marvel page if is logged', () => {

    const contextValue = {
      logged: true
    };

     const router = createMemoryRouter(AppRouter, { 
      initialEntries: ['/marvel'],
      initialIndex: 0
    });


    render(
      <AuthContext.Provider value={contextValue}>
        <RouterProvider router={router} />
      </AuthContext.Provider>
    );

    expect(screen.getByText('Cerrar Sesión')).toBeTruthy();
  });
});