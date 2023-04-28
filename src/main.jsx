import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Components/Shop/Shop';
import Home from './Components/Home/Home';
import Orders from './Components/Orders/Orders';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import cartProductsLoaders from './Loaders/cartProductsLoaders';
import CheckOut from './Components/CheckOut/CheckOut';
import Error from './Components/Error/Error';
import SignUp from './Components/SignUp/SignUp';
import AuthProvider from './Components/Provider/AuthProvider';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: '/orders',
        element: <Orders></Orders>,
        loader: cartProductsLoaders
      },
      {
        path: '/inventory',
        element: <Inventory></Inventory>
      },
      {
        path: '/checkout',
        element: <CheckOut></CheckOut>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
