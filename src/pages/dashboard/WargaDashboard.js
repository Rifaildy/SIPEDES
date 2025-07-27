"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import {
  FileText,
  CreditCard,
  MessageSquare,
  Calendar,
  CheckCircle,
} from "lucide-react";

const WargaDashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalSurat: 0,
    suratProses: 0,
    suratSelesai: 0,
    totalIuran: 0,
    iuranLunas: 0,
    iuranTunggak: 0,
    totalLaporan: 0,
    laporanProses: 0,
  });

  useEffect(() => {
    // Simulate loading stats
    setTimeout(() => {
      setStats({
        totalSurat: 5,
        suratProses: 2,
        suratSelesai: 3,
        totalIuran: 150000,
        iuranLunas: 100000,
        iuranTunggak: 50000,
        totalLaporan: 2,
        laporanProses: 1,
      });
    }, 1000);
  }, []);

  const quickActions = [
    {
      title: "Ajukan Surat",
      description: "Buat pengajuan surat keterangan",
      icon: FileText,
      link: "/layanan/surat",
      color: "bg-blue-500",
    },
    {
      title: "Bayar Iuran",
      description: "Bayar iuran RT dan padukuhan",
      icon: CreditCard,
      link: "/layanan/iuran",
      color: "bg-green-500",
    },
    {
      title: "Buat Laporan",
      description: "Sampaikan laporan atau aspirasi",
      icon: MessageSquare,
      link: "/lapor",
      color: "bg-orange-500",
    },
    {
      title: "Lihat Kegiatan",
      description: "Cek agenda kegiatan terbaru",
      icon: Calendar,
      link: "/layanan/kegiatan",
      color: "bg-purple-500",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: "surat",
      title: "Surat Keterangan Domisili",
      status: "Disetujui",
      date: "2024-01-15",
      statusColor: "text-green-600",
    },
    {
      id: 2,
      type: "iuran",
      title: "Iuran RT Januari 2024",
      status: "Lunas",
      date: "2024-01-10",
      statusColor: "text-green-600",
    },
    {
      id: 3,
      type: "laporan",
      title: "Laporan Jalan Rusak",
      status: "Dalam Proses",
      date: "2024-01-08",
      statusColor: "text-yellow-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-green-800 mb-2">
            Selamat datang, {user?.name}!
          </h1>
          <p className="text-green-600">
            Kelola semua kebutuhan administrasi Anda di satu tempat
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Surat</p>
                <p className="text-2xl font-bold text-green-800">
                  {stats.totalSurat}
                </p>
              </div>
              <FileText className="w-8 h-8 text-green-600" />
            </div>
            <div className="mt-2 text-sm text-gray-500">
              {stats.suratProses} dalam proses
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Iuran Bulan Ini</p>
                <p className="text-2xl font-bold text-green-800">
                  Rp {stats.iuranLunas.toLocaleString()}
                </p>
              </div>
              <CreditCard className="w-8 h-8 text-green-600" />
            </div>
            <div className="mt-2 text-sm text-gray-500">
              {stats.iuranTunggak > 0
                ? `Tunggakan: Rp ${stats.iuranTunggak.toLocaleString()}`
                : "Lunas"}
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Laporan</p>
                <p className="text-2xl font-bold text-green-800">
                  {stats.totalLaporan}
                </p>
              </div>
              <MessageSquare className="w-8 h-8 text-green-600" />
            </div>
            <div className="mt-2 text-sm text-gray-500">
              {stats.laporanProses} dalam proses
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Status Akun</p>
                <p className="text-lg font-bold text-green-800">Aktif</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <div className="mt-2 text-sm text-gray-500">Terverifikasi RT</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-green-800 mb-6">
              Aksi Cepat
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <div
                    key={index}
                    className="card p-6 hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-green-800 mb-1">
                          {action.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {action.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Recent Activities */}
            <h2 className="text-xl font-bold text-green-800 mb-6">
              Aktivitas Terbaru
            </h2>
            <div className="card">
              <div className="p-6">
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div>
                          <p className="font-medium text-green-800">
                            {activity.title}
                          </p>
                          <p className="text-sm text-gray-500">
                            {activity.date}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`text-sm font-medium ${activity.statusColor}`}
                      >
                        {activity.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Profile & Notifications */}
          <div>
            {/* Profile Card */}
            <div className="card p-6 mb-6">
              <h3 className="font-semibold text-green-800 mb-4">Profil Saya</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Nama</p>
                  <p className="font-medium text-green-800">{user?.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Telepon</p>
                  <p className="font-medium text-green-800">{user?.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">RT</p>
                  <p className="font-medium text-green-800">{user?.rt_id}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Status</p>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Terverifikasi
                  </span>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="card p-6">
              <h3 className="font-semibold text-green-800 mb-4">Notifikasi</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-green-800">
                      Surat domisili Anda telah disetujui
                    </p>
                    <p className="text-xs text-gray-500">2 jam yang lalu</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-green-800">
                      Pembayaran iuran berhasil
                    </p>
                    <p className="text-xs text-gray-500">1 hari yang lalu</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-green-800">
                      Gotong royong besok pagi
                    </p>
                    <p className="text-xs text-gray-500">2 hari yang lalu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WargaDashboard;
