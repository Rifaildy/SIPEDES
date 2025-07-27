import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import {
  FileText,
  DollarSign,
  Bell,
  CalendarDays,
  User,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const WargaDashboard = () => {
  // Mock Data for Warga Dashboard
  const quickActions = [
    {
      title: "Ajukan Surat",
      description: "Mulai pengajuan surat keterangan",
      icon: FileText,
      link: "/layanan/surat",
    },
    {
      title: "Bayar Iuran",
      description: "Cek dan bayar tagihan iuran",
      icon: DollarSign,
      link: "/layanan/iuran",
    },
    {
      title: "Lapor Masalah",
      description: "Sampaikan keluhan atau laporan",
      icon: Bell,
      link: "/lapor",
    },
    {
      title: "Info Kegiatan",
      description: "Lihat jadwal kegiatan desa",
      icon: CalendarDays,
      link: "/layanan/kegiatan",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: "Surat",
      description: "Pengajuan Surat Keterangan Usaha Anda telah disetujui.",
      date: "18 Juli 2024",
      status: "success",
    },
    {
      id: 2,
      type: "Iuran",
      description: "Pembayaran Iuran Bulan Juli Anda berhasil.",
      date: "15 Juli 2024",
      status: "success",
    },
    {
      id: 3,
      type: "Laporan",
      description: "Laporan Jalan Rusak Anda sedang dalam proses.",
      date: "10 Juli 2024",
      status: "info",
    },
    {
      id: 4,
      type: "Kegiatan",
      description: "Pendaftaran kegiatan 'Kerja Bakti Lingkungan' dibuka.",
      date: "05 Juli 2024",
      status: "info",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Dashboard Warga
          </h1>

          {/* Welcome Card */}
          <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-6 rounded-lg shadow-md mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Selamat Datang, Warga SIPEDES!
              </h2>
              <p className="text-green-100">
                Akses berbagai layanan desa dengan mudah di sini.
              </p>
            </div>
            <User size={48} className="text-green-200 opacity-75" />
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Aksi Cepat
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action, index) => (
                <Link
                  key={index}
                  to={action.link}
                  className="card p-6 flex flex-col items-center text-center hover:bg-green-50 transition-colors duration-200"
                >
                  <action.icon className="h-12 w-12 text-green-600 mb-3" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {action.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{action.description}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Recent Activities */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Aktivitas Terbaru Anda
            </h2>
            <ul className="space-y-4">
              {recentActivities.map((activity) => (
                <li key={activity.id} className="flex items-start space-x-3">
                  {activity.status === "success" && (
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                  )}
                  {activity.status === "info" && (
                    <Bell className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                  )}
                  <div>
                    <p className="text-gray-800 font-medium">
                      <span className="font-semibold">{activity.type}:</span>{" "}
                      {activity.description}
                    </p>
                    <p className="text-gray-500 text-sm">{activity.date}</p>
                  </div>
                </li>
              ))}
            </ul>
            {recentActivities.length === 0 && (
              <p className="text-center text-gray-500 mt-4">
                Tidak ada aktivitas terbaru.
              </p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WargaDashboard;
