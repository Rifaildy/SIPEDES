"use client";
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
import DukuhDashboard from "./DukuhDashboard";
import RTDashboard from "./RTDashboard";

const DashboardPage = () => {
  const { user } = useAuth();

  // Redirect based on user role
  switch (user?.role) {
    case "dukuh":
      return <DukuhDashboard />;
    case "rt":
      return <RTDashboard />;
    case "warga":
    default:
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
                    <p className="text-2xl font-bold text-green-800">5</p>
                  </div>
                  <FileText className="w-8 h-8 text-green-600" />
                </div>
                <div className="mt-2 text-sm text-gray-500">2 dalam proses</div>
              </div>

              <div className="card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Iuran Bulan Ini</p>
                    <p className="text-2xl font-bold text-green-800">
                      Rp 100,000
                    </p>
                  </div>
                  <CreditCard className="w-8 h-8 text-green-600" />
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  Tunggakan: Rp 50,000
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Laporan</p>
                    <p className="text-2xl font-bold text-green-800">2</p>
                  </div>
                  <MessageSquare className="w-8 h-8 text-green-600" />
                </div>
                <div className="mt-2 text-sm text-gray-500">1 dalam proses</div>
              </div>

              <div className="card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Status Akun</p>
                    <p className="text-lg font-bold text-green-800">Aktif</p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  Terverifikasi RT
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Quick Actions */}
              <div className="lg:col-span-2">
                <h2 className="text-xl font-bold text-green-800 mb-6">
                  Aksi Cepat
                </h2>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="card p-6 hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-green-800 mb-1">
                          Ajukan Surat
                        </h3>
                        <p className="text-sm text-gray-600">
                          Buat pengajuan surat keterangan
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card p-6 hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                        <CreditCard className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-green-800 mb-1">
                          Bayar Iuran
                        </h3>
                        <p className="text-sm text-gray-600">
                          Bayar iuran RT dan padukuhan
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card p-6 hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-green-800 mb-1">
                          Buat Laporan
                        </h3>
                        <p className="text-sm text-gray-600">
                          Sampaikan laporan atau aspirasi
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card p-6 hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-green-800 mb-1">
                          Lihat Kegiatan
                        </h3>
                        <p className="text-sm text-gray-600">
                          Cek agenda kegiatan terbaru
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Activities */}
                <h2 className="text-xl font-bold text-green-800 mb-6">
                  Aktivitas Terbaru
                </h2>
                <div className="card">
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <div>
                            <p className="font-medium text-green-800">
                              Surat Keterangan Domisili
                            </p>
                            <p className="text-sm text-gray-500">2024-01-15</p>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-green-600">
                          Disetujui
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <div>
                            <p className="font-medium text-green-800">
                              Iuran RT Januari 2024
                            </p>
                            <p className="text-sm text-gray-500">2024-01-10</p>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-green-600">
                          Lunas
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <div>
                            <p className="font-medium text-green-800">
                              Laporan Jalan Rusak
                            </p>
                            <p className="text-sm text-gray-500">2024-01-08</p>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-yellow-600">
                          Dalam Proses
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile & Notifications */}
              <div>
                {/* Profile Card */}
                <div className="card p-6 mb-6">
                  <h3 className="font-semibold text-green-800 mb-4">
                    Profil Saya
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-600">Nama</p>
                      <p className="font-medium text-green-800">{user?.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Telepon</p>
                      <p className="font-medium text-green-800">
                        {user?.phone}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">RT</p>
                      <p className="font-medium text-green-800">
                        {user?.rt_id}
                      </p>
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
                  <h3 className="font-semibold text-green-800 mb-4">
                    Notifikasi
                  </h3>
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
                        <p className="text-xs text-gray-500">
                          1 hari yang lalu
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm text-green-800">
                          Gotong royong besok pagi
                        </p>
                        <p className="text-xs text-gray-500">
                          2 hari yang lalu
                        </p>
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
  }
};

export default DashboardPage;
