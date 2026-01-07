import { Separator } from "@/components/ui/separator"

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-neutral-200 hidden md:block">
      <div className="p-6 font-semibold text-lg">
        Payroll System
      </div>

      <Separator />

      <nav className="p-4 space-y-2 text-sm">
        <div className="text-neutral-500">Dashboard</div>
        <div className="text-neutral-500">Employees</div>
        <div className="text-neutral-500">Payroll</div>
      </nav>
    </aside>
  )
}
