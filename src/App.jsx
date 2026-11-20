import React from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// import layout
import publicLayout from './layouts/PublicLayout'
import AuthLayout from './layouts/AuthLayout'
import AdminLayout from './layouts/AdminLayout'

// import pages

import HomePage from './pages/landing/HomePage'
import PostPage from './pages/landing/PostPage'
import DetailPOstPage from './pages/landing/DetailPOstPage'
import LoginPage from './pages/auth/LoginPage'
import DashboardPage from './pages/admin/DashboardPage'
import CreatePost from './pages/admin/CreatePost'
import PublicLayout from './layouts/PublicLayout'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/posts",
        element: <PostPage />,
      },
      {
        path: "/detail",
        element: <DetailPOstPage />
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />
      }
    ]
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />
      },
      {
        path: "createpost",
        element: <CreatePost />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={routes} />
  )
}

export default App