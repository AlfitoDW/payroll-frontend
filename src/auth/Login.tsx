import { useState } from "react"
import api from "../api/axios"
import { useAuthStore } from "./authStore"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { Eye, EyeOff } from "lucide-react"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const loginStore = useAuthStore()
  const navigate = useNavigate()

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Email dan password wajib diisi")
      return
    }

    try {
      setLoading(true)

      const res = await api.post("/login", {
        email,
        password,
      })

      loginStore.login(res.data.user, res.data.token)

      toast.success("Login berhasil")

      setTimeout(() => {
        if (res.data.user.role === "admin") {
          navigate("/admin")
        } else {
          navigate("/employee")
        }
      }, 700)
    } catch (err: any) {
      toast.error("Email atau password salah")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-stone-100 flex items-center justify-center">
      <div className="w-full max-w-sm bg-white border border-neutral-800 rounded-xl p-6 shadow-lg">

        {/* Title */}
        <h1 className="text-black text-xl font-semibold mb-1">
          Payroll System
        </h1>
        <p className="text-black text-sm mb-6">
          Sign in to continue
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-black text-xs mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="admin@payroll.com"
            className="
              w-full
              bg-white 
              border border-neutral-800
              text-gray-600
              px-3 py-2
              rounded-md
              text-sm
              outline-none
              focus:border-black 
              transition
            "
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

{/* Password */}
<div className="mb-6">
  <label className="block text-neutral-400 text-xs mb-1">
    Password
  </label>

  <div className="relative">
    <input
      type={showPassword ? "text" : "password"}
      placeholder="••••••••"
      className="
        w-full
        bg-white 
        border border-neutral-800
        text-gray-600
        px-3 py-2
        pr-10
        rounded-md
        text-sm
        outline-none
        focus:border-black 
        transition
      "
      onChange={(e) => setPassword(e.target.value)}
    />

    <div
      onClick={() => setShowPassword(!showPassword)}
      className="
        absolute
        right-3
        top-1/2
        -translate-y-1/2
        cursor-pointer
        text-neutral-500
        hover:text-black
        transition
        select-none
      "
    >
      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
    </div>
  </div>
</div>


        {/* Button */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="
            w-full
            bg-white
            text-white
            py-2
            rounded-md
            text-sm
            font-medium
            hover:bg-neutral-200
            transition
            disabled:opacity-50
          "
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>

        {/* Footer */}
        <p className="text-neutral-500 text-xs text-center mt-6">
          © 2026 Payroll System
        </p>
      </div>
    </div>
  )
}
