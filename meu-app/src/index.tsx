import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Noticias from './noticias';
import Publicacoes from './publicacoes'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "noticias",
    element: <Noticias/>
  },
  {
    path: "publicacoes",
    element: <Publicacoes/>
  }

])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>
);

