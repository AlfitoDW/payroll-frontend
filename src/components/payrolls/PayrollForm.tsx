import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { PayrollService } from "@/services/payroll.service"
import { EmployeeService } from "@/services/employee.service"
import type { Employee } from "@/types/employee"

type Props = {
  onSuccess: () => void
}

export default function PayrollForm({ onSuccess }: Props) {
  const [employees, setEmployees] = useState<Employee[]>([])
  const [employeeId, setEmployeeId] = useState<string>("") // STRING utk Select
  const [basicSalary, setBasicSalary] = useState<number>(0)

  const [month, setMonth] = useState("")
  const [allowance, setAllowance] = useState("")   // STRING
  const [deduction, setDeduction] = useState("")   // STRING
  const [loading, setLoading] = useState(false)

  /* ================= FETCH EMPLOYEES ================= */
  useEffect(() => {
    EmployeeService.getAll().then((res) => {
      setEmployees(res ?? [])
    })
  }, [])

  /* ================= SYNC BASIC SALARY ================= */
  useEffect(() => {
    if (!employeeId) {
      setBasicSalary(0)
      return
    }

    const emp = employees.find(e => e.id === Number(employeeId))
    setBasicSalary(emp?.salary ?? 0)
  }, [employeeId, employees])

  /* ================= HELPERS ================= */
  const parseMoney = (val: string) => {
    if (!val) return 0
    return Number(val)
  }

  /* ================= SUBMIT ================= */
  const handleSubmit = async () => {
    if (!employeeId || !month) return

    setLoading(true)

    try {
      await PayrollService.create({
        employee_id: Number(employeeId),
        month,
        allowance: parseMoney(allowance),
        deduction: parseMoney(deduction),
      })

      onSuccess()
    } finally {
      setLoading(false)
    }
  }

  /* ================= TOTAL ================= */
  const totalSalary =
    basicSalary + parseMoney(allowance) - parseMoney(deduction)

  /* ================= UI ================= */
  return (
    <div className="space-y-4">
      {/* Employee */}
      <label>Employee</label>
      <Select
        value={employeeId}
        onValueChange={setEmployeeId}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select Employee" />
        </SelectTrigger>
        <SelectContent>
          {employees.map((e) => (
            <SelectItem key={e.id} value={String(e.id)}>
              {e.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Month */}
      <label>Month</label>
      <Input
        type="month"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
      />

      {/* Basic Salary */}
      <label>Basic Salary</label>
      <Input
        value={basicSalary.toLocaleString("id-ID")}
        readOnly
        className="bg-muted"
      />

      {/* Allowance */}
      <label>Allowance (Tunjangan)</label>
      <Input
        type="text"
        inputMode="numeric"
        placeholder="e.g. 500000"
        value={allowance}
        onChange={(e) =>
          setAllowance(e.target.value.replace(/\D/g, ""))
        }
      />

      {/* Deduction */}
      <label>Deduction (Potongan)</label>
      <Input
        type="text"
        inputMode="numeric"
        placeholder="e.g. 100000"
        value={deduction}
        onChange={(e) =>
          setDeduction(e.target.value.replace(/\D/g, ""))
        }
      />

      {/* Total */}
      <div className="text-sm text-muted-foreground">
        Total Salary:{" "}
        <b>Rp {totalSalary.toLocaleString("id-ID")}</b>
      </div>

      {/* Submit */}
      <Button
        className="w-full"
        onClick={handleSubmit}
        disabled={loading || !employeeId || !month}
      >
        {loading ? "Processing..." : "Generate Payroll"}
      </Button>
    </div>
  )
}
