import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export default function AdminDashboard() {
  // Dummy data untuk cards
  const dashboardStats = [
    { title: "Total Employees", value: "24" },
    { title: "Payroll Bulan Ini", value: "Rp 120.000.000" },
    { title: "Pending Approval", value: "3" },
    { title: "Absensi Hari Ini", value: "22/24 Hadir" }, // Tambahan dummy
    { title: "Karyawan Baru Bulan Ini", value: "2" }, // Tambahan dummy
  ];

  // Dummy data untuk tabel "Recent Activity"
  const recentActivities = [
    { id: 1, type: "Payroll Generated", description: "Payroll Januari untuk John Doe", date: "2026-01-28" },
    { id: 2, type: "Employee Added", description: "Karyawan baru: Jane Smith", date: "2026-01-27" },
    { id: 3, type: "Login", description: "Admin logged in", date: "2026-01-28" },
    { id: 4, type: "Password Reset", description: "Password direset untuk employee ID 5", date: "2026-01-26" },
  ];

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-neutral-900">
          Admin Dashboard
        </h1>
        <p className="text-neutral-500 mt-1">
          Overview sistem payroll
        </p>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {dashboardStats.map((stat, index) => (
          <Card key={index} className="bg-white">
            <CardHeader className="p-4">
              <p className="text-sm text-neutral-500">{stat.title}</p>
              <CardTitle className="text-2xl font-bold mt-2">{stat.value}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* RECENT ACTIVITY */}
      <Card className="bg-white">
        <CardHeader className="border-b px-6 py-4">
          <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="p-3 text-left">Type</TableHead>
                <TableHead className="p-3 text-left">Description</TableHead>
                <TableHead className="p-3 text-left">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentActivities.map((activity) => (
                <TableRow key={activity.id}>
                  <TableCell className="p-3">{activity.type}</TableCell>
                  <TableCell className="p-3">{activity.description}</TableCell>
                  <TableCell className="p-3">{activity.date}</TableCell>
                </TableRow>
              ))}
              {recentActivities.length === 0 && (
                <TableRow>
                  <TableCell colSpan={3} className="p-3 text-center text-muted-foreground">
                    Tidak ada aktivitas terbaru.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Placeholder for other sections (e.g., Charts) */}
      <Card className="bg-white">
        <CardHeader className="border-b px-6 py-4">
          <CardTitle className="text-lg font-semibold">Monthly Payroll Summary</CardTitle>
        </CardHeader>
        <CardContent className="p-6 text-muted-foreground text-center">
          {/* Anda bisa menambahkan komponen grafik di sini */}
          <p>Grafik atau ringkasan bulanan akan ditampilkan di sini.</p>
          <div className="h-48 bg-neutral-100 rounded-md mt-4 flex items-center justify-center">
            <p className="text-neutral-400">Placeholder Chart</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
