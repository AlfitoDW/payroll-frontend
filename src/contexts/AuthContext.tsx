import { createContext, useContext, useEffect, useState } from "react"
import api from "@/api/axios"

type User = {
  id: number
  name: string
  email: string
  role: "admin" | "employee"
}

type AuthContextType = {
  user: User | null
  token: string | null
  login: (data: { user: User; token: string }) => void
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  )
  const [isLoading, setIsLoading] = useState(true)

  // 🔥 BOOTSTRAP
  useEffect(() => {
    const bootstrap = async () => {
      if (!token) {
        setIsLoading(false)
        return
      }

      try {
        const res = await api.get("/me")
        setUser(res.data)
      } catch {
        localStorage.removeItem("token")
        setToken(null)
        setUser(null)
      } finally {
        setIsLoading(false)
      }
    }

    bootstrap()
  }, [token])

  const login = ({ user, token }: { user: User; token: string }) => {
    setUser(user)
    setToken(token)
    localStorage.setItem("token", token)
  }

  const logout = () => {
    localStorage.removeItem("token")
    setUser(null)
    setToken(null)
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuthContext must be used inside AuthProvider")
  return ctx
}
