import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import ContactPage from './pages/ContactPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'contact', element: <ContactPage /> },
    ]
  }
])

export default function App() {
  return <RouterProvider router={router} />
}
