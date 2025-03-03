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
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Users2 from './components/Users2.jsx';
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
      {
        path: '/users2',
        element: <Users2 />,
      },
    ],
  },

]);
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProviders>
        <RouterProvider router={router} />
      </AuthProviders>
    </QueryClientProvider>

  </StrictMode>
);
