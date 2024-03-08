import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/Error/Error.jsx'
import HomePage from './pages/home/HomePage.jsx';
import Projects from "./pages/Projects/Projects.jsx"
import Contact from './pages/Contact/Contact.jsx';
import AboutMe from './pages/Sobre/AboutMe.jsx';
import Certificados from './pages/Certificados/Certificados.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/about",
    element: <AboutMe />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/certificates",
    element: <Certificados />,
  },


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
