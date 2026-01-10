export default function Employees() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-neutral-900">
        Employees
      </h1>
      <p className="text-neutral-500 mt-1">
        Daftar karyawan
      </p>

      <div className="mt-6 border rounded-xl bg-white">
        <table className="w-full text-sm">
          <thead className="border-b">
            <tr className="text-left">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3">Admin Payroll</td>
              <td className="p-3">admin@payroll.com</td>
              <td className="p-3">Admin</td>
            </tr>
            <tr>
              <td className="p-3">Employee 1</td>
              <td className="p-3">employee@payroll.com</td>
              <td className="p-3">Employee</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
