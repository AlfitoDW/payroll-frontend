import axios from "axios"
import type { CreatePayrollPayload } from "@/types/payroll"

export const PayrollService = {
  getAll: async () => {
    const res = await axios.get("/payrolls")
    return res.data.data
  },

  create: async (payload: CreatePayrollPayload) => {
    const res = await axios.post("/payrolls", payload)
    return res.data
  },

  pay: async (id: number) => {
    const res = await axios.post(`/payrolls/${id}/pay`)
    return res.data
  },
}
