import { useEffect, useState } from "react"
import type { Payroll } from "@/types/payroll"
import { PayrollService } from "@/services/payroll.service"
import { Button } from "@/components/ui/button"
import PayrollDialog from "@/components/payrolls/PayrollDialog"
import PayrollPayDialog from "@/components/payrolls/PayrollpayDialog"

export default function PayrollPage() {
  const [data, setData] = useState<Payroll[]>([])
  const [open, setOpen] = useState(false)
  const [payOpen, setPayOpen] = useState(false)
  const [selected, setSelected] = useState<Payroll | null>(null)

  const fetchData = async () => {
    const res = await PayrollService.getAll()
    setData(res ?? [])
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold">Payroll</h1>
        <Button onClick={() => setOpen(true)}>+ Generate Payroll</Button>
      </div>

      <div className="border rounded bg-white">
        <table className="w-full text-sm">
          <thead className="bg-neutral-50 border-b">
            <tr>
              <th className="p-3 text-left">Employee</th>
              <th className="p-3 text-center">Month</th>
              <th className="p-3 text-right">Salary</th>
              <th className="p-3 text-center">Status</th>
              <th className="p-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 && (
              <tr>
                <td colSpan={5} className="p-4 text-center text-muted-foreground">
                  Belum ada payroll
                </td>
              </tr>
            )}

            {data.map((p) => (
              <tr key={p.id} className="border-b">
                <td className="p-3">{p.employee_name}</td>
                <td className="p-3 text-center">{p.month}</td>
                <td className="p-3 text-right">
                  Rp {p.total_salary.toLocaleString("id-ID")}
                </td>
                <td className="p-3 text-center">
                  {p.status === "paid" ? "✅ Paid" : "❌ Unpaid"}
                </td>
                <td className="p-3 text-right">
                  {p.status === "unpaid" && (
                    <Button
                      size="sm"
                      onClick={() => {
                        setSelected(p)
                        setPayOpen(true)
                      }}
                    >
                      Pay
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <PayrollDialog open={open} setOpen={setOpen} onSuccess={fetchData} />
      <PayrollPayDialog
        open={payOpen}
        setOpen={setPayOpen}
        payroll={selected}
        onSuccess={fetchData}
      />
    </div>
  )
}
