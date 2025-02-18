import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout.jsx';
const router = createBrowserRouter([


  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />,
        loader: () => fetch('http://localhost:5000/coffee'),
      },
      {
        path: '/addCoffee',
        element: <AddCoffee />,
      },
      {
        path: '/updateCoffee',
        element: <UpdateCoffee />,
      },
    ],
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
