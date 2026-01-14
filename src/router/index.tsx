import { createBrowserRouter, Navigate } from "react-router-dom"
import Login from "@/auth/Login"
import AppLayout from "@/components/layout/AppLayout"
import ProtectedRoute from "./ProtectedRoute"
import AuthLayout from "@/components/layout/AuthLayout"
import Employees from "@/pages/admin/Employees"
import Payroll from "@/pages/admin/Payroll"
import AdminEmployeeAccountPage from "@/pages/admin/employee-accounts"

// 👉 DUMMY PAGE DULU
const EmployeePayrollPage = () => (
  <div>Employee Payroll Page</div>
)

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "/", element: <Navigate to="/login" replace /> },
      { path: "/login", element: <Login /> },

      /* ================= ADMIN ================= */
      {
        element: <ProtectedRoute role="admin" />,
        children: [
          {
            element: <AppLayout />,
            children: [
              { path: "/admin", element:  <div>Dashboard</div> },
              { path: "/admin/employees", element: <Employees /> },
              { path: "/admin/payroll", element: <Payroll /> },
              { path: "/admin/employee-accounts", element: <AdminEmployeeAccountPage /> },
            ],
          },
        ],
      },

      /* ================= EMPLOYEE ================= */
      {
        element: <ProtectedRoute role="employee" />,
        children: [
          {
            element: <AppLayout />, // bisa ganti EmployeeLayout nanti
            children: [
              { path: "/employee", element: <Navigate to="/employee/payroll" replace /> },
              { path: "/employee/payroll", element: <EmployeePayrollPage /> },
            ],
          },
        ],
      },
    ],
  },
])

export default router
