export type Payroll = {
  id: number
  employee_id: number
  employee_name: string
  month: string
  basic_salary: number
  allowance: number
  deduction: number
  total_salary: number
  status: "paid" | "unpaid"
}

export type CreatePayrollPayload = {
  employee_id: number
  month: string
  allowance: number
  deduction: number
}
