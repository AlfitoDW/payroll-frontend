import { createBrowserRouter, Navigate } from "react-router-dom"
import Login from "@/auth/Login"
import AppLayout from "@/components/layout/AppLayout"
import ProtectedRoute from "./ProtectedRoute"
import AuthLayout from "@/components/layout/AuthLayout"

const router = createBrowserRouter([
  {
    element: <AuthLayout />, // 🔥 SEMUA ROUTE DI BAWAH INI PUNYA AuthContext
    children: [
      {
        path: "/",
        element: <Navigate to="/login" replace />,
      },
      {
        path: "/login",
        element: <Login />, // ✅ SEKARANG AMAN
      },
      {
        element: <ProtectedRoute role="admin" />,
        children: [
          {
            element: <AppLayout />,
            children: [
              { path: "/admin", element: <div>Admin Dashboard</div> },
              { path: "/admin/employees", element: <div>Employees</div> },
              { path: "/admin/employees/attendance", element: <div>Attendance</div> },
              { path: "/admin/employees/salaries", element: <div>Salaries</div> },
              { path: "/admin/payroll", element: <div>Payroll</div> },
              { path: "/admin/payroll/process", element: <div>Process</div> },
              { path: "/admin/payroll/history", element: <div>History</div> },
              { path: "/admin/reports", element: <div>Reports</div> },
              { path: "/admin/settings", element: <div>Settings</div> },
            ],
          },
        ],
      },
    ],
  },
])

export default router
