import { createBrowserRouter, Navigate } from "react-router-dom"
import Login from "@/auth/Login"
import AppLayout from "@/components/layout/AppLayout"
import ProtectedRoute from "./ProtectedRoute"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  /**
   * =====================
   * ADMIN ROUTES
   * =====================
   */
  {
    element: <ProtectedRoute role="admin" />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            path: "/admin",
            element: <div>Admin Dashboard</div>,
          },
        ],
      },
    ],
  },

  /**
   * =====================
   * EMPLOYEE ROUTES
   * =====================
   */
  {
    element: <ProtectedRoute role="employee" />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            path: "/employee",
            element: <div>Employee Dashboard</div>,
          },
        ],
      },
    ],
  },
])

export default router
