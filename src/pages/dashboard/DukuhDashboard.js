import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import {
  Users,
  FileText,
  DollarSign,
  Bell,
  CheckCircle,
  XCircle,
  CalendarDays,
} from "lucide-react";
import { Link } from "react-router-dom";

const DukuhDashboard = () => {
  // Mock Data for Dukuh Dashboard
  const stats = [
    {
      title: "Total Warga",
      value: "1.250",
      icon: Users,
      color: "text-green-600",
    },
    {
      title: "Surat Pending",
      value: "12",
      icon: FileText,
      color: "text-yellow-600",
    },
    { title: "Laporan Baru", value: "5", icon: Bell, color: "text-red-600" },
    {
      title: "Iuran Terkumpul",
      value: "Rp 15.000.000",
      icon: DollarSign,
      color: "text-blue-600",
    },
  ];

  const pendingLetters = [
    {
      id: 1,
      type: "Surat Keterangan Usaha",
      applicant: "Budi Santoso",
      rt: "RT 01",
      status: "Pending",
    },
    {
      id: 2,
      type: "Surat Domisili",
      applicant: "Siti Aminah",
      rt: "RT 02",
      status: "Pending",
    },
    {
      id: 3,
      type: "Surat Keterangan Tidak Mampu",
      applicant: "Joko Susilo",
      rt: "RT 01",
      status: "Pending",
    },
  ];

  const recentReports = [
    {
      id: 1,
      title: "Jalan Rusak di RT 03",
      reporter: "Agus Salim",
      status: "Baru",
      priority: "Tinggi",
    },
    {
      id: 2,
      title: "Sampah Menumpuk di TPS RT 02",
      reporter: "Dewi Lestari",
      status: "Baru",
      priority: "Sedang",
    },
  ];

  const rtPerformance = [
    {
      rt: "RT 01",
      warga: 300,
      suratApproved: 50,
      iuranCollected: "Rp 4.5 Juta",
    },
    {
      rt: "RT 02",
      warga: 320,
      suratApproved: 45,
      iuranCollected: "Rp 4.8 Juta",
    },
    {
      rt: "RT 03",
      warga: 310,
      suratApproved: 48,
      iuranCollected: "Rp 4.2 Juta",
    },
    {
      rt: "RT 04",
      warga: 320,
      suratApproved: 55,
      iuranCollected: "Rp 5.0 Juta",
    },
  ];

  const upcomingActivities = [
    {
      id: 1,
      name: "Rapat Koordinasi Dukuh & RT",
      date: "20 Juli 2024",
      time: "09:00",
      location: "Balai Desa",
    },
    {
      id: 2,
      name: "Sosialisasi Program Ketahanan Pangan",
      date: "25 Juli 2024",
      time: "14:00",
      location: "Aula Desa",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Dashboard Kepala Dukuh
          </h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="card p-6 flex items-center space-x-4">
                <div
                  className={`p-3 rounded-full bg-opacity-20 ${stat.color.replace(
                    "text-",
                    "bg-"
                  )}`}
                >
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">{stat.title}</p>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {stat.value}
                  </h2>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Pending Letters */}
            <div className="lg:col-span-2 card p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Permohonan Surat Pending
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Jenis Surat
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Pemohon
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        RT
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {pendingLetters.map((letter) => (
                      <tr key={letter.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {letter.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {letter.applicant}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {letter.rt}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            {letter.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-green-600 hover:text-green-900 mr-3">
                            <CheckCircle size={20} />
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <XCircle size={20} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {pendingLetters.length === 0 && (
                <p className="text-center text-gray-500 mt-4">
                  Tidak ada permohonan surat pending.
                </p>
              )}
            </div>

            {/* Recent Reports */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Laporan Warga Terbaru
              </h2>
              <ul className="space-y-4">
                {recentReports.map((report) => (
                  <li key={report.id} className="flex items-start space-x-3">
                    <Bell className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-800 font-medium">
                        {report.title}
                      </p>
                      <p className="text-gray-600 text-sm">
                        Dari: {report.reporter} - Status:{" "}
                        <span
                          className={`font-semibold ${
                            report.status === "Baru"
                              ? "text-red-600"
                              : "text-gray-600"
                          }`}
                        >
                          {report.status}
                        </span>
                      </p>
                      <p className="text-gray-500 text-xs">
                        Prioritas: {report.priority}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              {recentReports.length === 0 && (
                <p className="text-center text-gray-500 mt-4">
                  Tidak ada laporan baru.
                </p>
              )}
              <Link
                to="/lapor"
                className="text-green-600 hover:underline font-medium mt-4 block text-right"
              >
                Lihat Semua Laporan &rarr;
              </Link>
            </div>
          </div>

          {/* RT Performance */}
          <div className="card p-6 mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Performa RT
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      RT
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Jumlah Warga
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Surat Disetujui
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Iuran Terkumpul
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {rtPerformance.map((rt, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {rt.rt}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {rt.warga}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {rt.suratApproved}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {rt.iuranCollected}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions & Upcoming Activities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            {/* Quick Actions */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Aksi Cepat
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <Link
                  to="/layanan/surat"
                  className="btn-secondary flex items-center justify-center gap-2 py-3"
                >
                  <FileText size={20} /> Template Surat
                </Link>
                <Link
                  to="/pengumuman"
                  className="btn-secondary flex items-center justify-center gap-2 py-3"
                >
                  <Bell size={20} /> Buat Pengumuman
                </Link>
                <Link
                  to="/dashboard/data-warga"
                  className="btn-secondary flex items-center justify-center gap-2 py-3"
                >
                  <Users size={20} /> Data Warga
                </Link>
                <Link
                  to="/dashboard/laporan-keuangan"
                  className="btn-secondary flex items-center justify-center gap-2 py-3"
                >
                  <DollarSign size={20} /> Laporan Keuangan
                </Link>
              </div>
            </div>

            {/* Upcoming Activities */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Kegiatan Mendatang
              </h2>
              <ul className="space-y-3">
                {upcomingActivities.map((activity) => (
                  <li key={activity.id} className="flex items-start space-x-3">
                    <CalendarDays className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-800 font-medium">
                        {activity.name}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {activity.date} - {activity.time} di {activity.location}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              {upcomingActivities.length === 0 && (
                <p className="text-center text-gray-500 mt-4">
                  Tidak ada kegiatan mendatang.
                </p>
              )}
              <Link
                to="/layanan/kegiatan"
                className="text-green-600 hover:underline font-medium mt-4 block text-right"
              >
                Lihat Semua Kegiatan &rarr;
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DukuhDashboard;
