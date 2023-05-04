import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// 1 - Configurando router
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import Home from './routes/Home.jsx';
import Contact from './routes/Contact.jsx';
import App from './App';
import ErrorPage from './routes/ErrorPage';
import ContactDetails from './routes/ContactDetails';
import Login from './routes/Login';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />
//   },
//   {
//     path: "contact",
//     element: <Contact />
//   }
// ])

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "contact",
        element: <Contact />
      },
      // 5 - nested routes
      {
        path: "/contact/:id",
        element: <ContactDetails />,
      },
      // 7 - navigate para páginas não existentes
      {
        path: "oldcontact",
        element: <Navigate to="/contact" />
      },
      {
        path: "login",
        element: <Login />
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
