export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-neutral-900">
        Admin Dashboard
      </h1>
      <p className="text-neutral-500 mt-1">
        Overview sistem payroll
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="border rounded-xl p-4 bg-white">
          <p className="text-sm text-neutral-500">Total Employees</p>
          <h2 className="text-2xl font-bold mt-2">24</h2>
        </div>

        <div className="border rounded-xl p-4 bg-white">
          <p className="text-sm text-neutral-500">Payroll Bulan Ini</p>
          <h2 className="text-2xl font-bold mt-2">Rp 120.000.000</h2>
        </div>

        <div className="border rounded-xl p-4 bg-white">
          <p className="text-sm text-neutral-500">Pending Approval</p>
          <h2 className="text-2xl font-bold mt-2">3</h2>
        </div>
      </div>
    </div>
  )
}
