import { Navigate, Outlet } from "react-router-dom"
import { useAuthStore } from "@/auth/authStore"

type Props = {
  role?: "admin" | "employee"
}

export default function ProtectedRoute({ role }: Props) {
  const { user, token } = useAuthStore()

  // belum login
  if (!token || !user) {
    return <Navigate to="/login" replace />
  }

  // role tidak sesuai
  if (role && user.role !== role) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}
