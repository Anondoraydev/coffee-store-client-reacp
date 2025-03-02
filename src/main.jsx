import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import SingIn from './components/SingIn.jsx';
import SingUp from './components/SingUp.jsx';
import AuthProviders from './provaiders/AuthProviders.jsx';
import Users from './components/Users.jsx';
const router = createBrowserRouter([


  {
    ath: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />,
        loader: () => fetch(' http://localhost:5000/coffee'),
      },
      {
        path: '/addCoffee',
        element: <AddCoffee />,
      },
      {
        path: '/updateCoffee/:id',
        element: <UpdateCoffee />,
        loader: ({ params }) => fetch(` http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: '/singin',
        element: <SingIn />,
      },
      {
        path: '/singup',
        element: <SingUp />,
      },
      {
        path: '/users',
        element: <Users />,
        loader: () => fetch(' http://localhost:5000/user'),
      },
    ],
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </StrictMode>
);
