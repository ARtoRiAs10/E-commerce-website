import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ShoppingCart from './Component/Cart/shoppingCart';
import Homepage from './Component/homepage';
import LoginPage from './Component/loginPage';
import RegistrationForm from './Component/registration_Form';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
{
    path :'/login',
    element: <LoginPage />
    
    // children: [
    //   {
    //     path: 'login',
    //     element: <LoginPage />,
    //   },
  //   ],
  },
  {
    path:'/register',
    element: <RegistrationForm />
  },
  {
    path:'/category1',
    element: <ShoppingCart/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
