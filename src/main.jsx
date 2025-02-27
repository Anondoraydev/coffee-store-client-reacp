import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import LoginForm from './LoginForm.jsx';
import SingIn from './components/SingIn.jsx';
import SingUp from './components/SingUp.jsx';
import AuthProviders from './provaiders/AuthProviders.jsx';
const router = createBrowserRouter([


  {
    ath: '/dashboard',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <LoginForm />,
      },
      {
        path: '/dashboard',
        element: <App />,
        loader: () => fetch('http://localhost:5000/coffee'),
      },
      {
        path: '/addCoffee',
        element: <AddCoffee />,
      },
      {
        path: '/updateCoffee/:id',
        element: <UpdateCoffee />,
        loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: '/singin',
        element: <SingIn />,
      },
      {
        path: '/singup',
        element: <SingUp />,
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
