import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import './styles.css';

const routerApp = createBrowserRouter(AppRouter);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routerApp} />
  </React.StrictMode>,
);