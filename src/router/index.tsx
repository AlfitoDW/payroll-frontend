import { createBrowserRouter, Navigate } from "react-router-dom"
import Login from "@/auth/Login"
import AppLayout from "@/components/layout/AppLayout"
import ProtectedRoute from "./ProtectedRoute"
import AuthLayout from "@/components/layout/AuthLayout"
import Employees from "@/pages/admin/Employees"
import Payroll from "@/pages/admin/Payroll"

const router = createBrowserRouter([
  {
    element: <AuthLayout />, 
    children: [
      {
        path: "/",
        element: <Navigate to="/login" replace />,
      },
      {
        path: "/login",
        element: <Login />, 
      },
      {
        element: <ProtectedRoute role="admin" />,
        children: [
          {
            element: <AppLayout />,
            children: [
              { path: "/admin", element: <div>Admin Dashboard</div> },
              { path: "/admin/employees", element: <Employees/> },
              { path: "/admin/employees/attendance", element: <div>Attendance</div> },
              { path: "/admin/employees/salaries", element: <div>Salaries</div> },
              { path: "/admin/payroll", element: <Payroll/> },
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
