"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import {
  Users,
  FileText,
  MessageSquare,
  CreditCard,
  Clock,
  TrendingUp,
  Calendar,
} from "lucide-react";

const DukuhDashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalWarga: 0,
    totalRT: 0,
    suratPending: 0,
    suratApproved: 0,
    laporanBaru: 0,
    laporanProses: 0,
    totalIuran: 0,
    iuranTerkumpul: 0,
    kegiatanAktif: 0,
  });

  const [recentSurat, setRecentSurat] = useState([]);
  const [recentLaporan, setRecentLaporan] = useState([]);
  const [rtStats, setRtStats] = useState([]);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setStats({
        totalWarga: 1247,
        totalRT: 5,
        suratPending: 12,
        suratApproved: 45,
        laporanBaru: 8,
        laporanProses: 3,
        totalIuran: 18705000,
        iuranTerkumpul: 15240000,
        kegiatanAktif: 4,
      });

      setRecentSurat([
        {
          id: 1,
          pemohon: "Budi Santoso",
          jenis: "Surat Keterangan Domisili",
          rt: "RT 001",
          tanggal: "2024-01-20",
          status: "pending",
        },
        {
          id: 2,
          pemohon: "Siti Rahayu",
          jenis: "Surat Pengantar Nikah",
          rt: "RT 002",
          tanggal: "2024-01-19",
          status: "pending",
        },
        {
          id: 3,
          pemohon: "Ahmad Wijaya",
          jenis: "Surat Keterangan Usaha",
          rt: "RT 001",
          tanggal: "2024-01-18",
          status: "approved",
        },
      ]);

      setRecentLaporan([
        {
          id: 1,
          pelapor: "Maria Sari",
          judul: "Jalan Rusak di RT 003",
          kategori: "Infrastruktur",
          tanggal: "2024-01-20",
          status: "baru",
          prioritas: "tinggi",
        },
        {
          id: 2,
          pelapor: "Joko Susilo",
          judul: "Sampah Menumpuk",
          kategori: "Kebersihan",
          tanggal: "2024-01-19",
          status: "proses",
          prioritas: "sedang",
        },
      ]);

      setRtStats([
        { rt: "RT 001", warga: 245, iuran: 85, laporan: 2 },
        { rt: "RT 002", warga: 267, iuran: 92, laporan: 1 },
        { rt: "RT 003", warga: 234, iuran: 78, laporan: 3 },
        { rt: "RT 004", warga: 256, iuran: 88, laporan: 1 },
        { rt: "RT 005", warga: 245, iuran: 81, laporan: 1 },
      ]);
    }, 1000);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "text-yellow-600 bg-yellow-100";
      case "approved":
        return "text-green-600 bg-green-100";
      case "rejected":
        return "text-red-600 bg-red-100";
      case "baru":
        return "text-blue-600 bg-blue-100";
      case "proses":
        return "text-orange-600 bg-orange-100";
      case "selesai":
        return "text-green-600 bg-green-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "tinggi":
        return "text-red-600";
      case "sedang":
        return "text-yellow-600";
      case "rendah":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-green-800 mb-2">
            Dashboard Dukuh
          </h1>
          <p className="text-green-600">
            Selamat datang, {user?.name} - Kelola seluruh aktivitas padukuhan
          </p>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Warga</p>
                <p className="text-3xl font-bold text-green-800">
                  {stats.totalWarga}
                </p>
              </div>
              <Users className="w-10 h-10 text-green-600" />
            </div>
            <div className="mt-2 text-sm text-gray-500">
              Tersebar di {stats.totalRT} RT
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Surat Pending</p>
                <p className="text-3xl font-bold text-yellow-600">
                  {stats.suratPending}
                </p>
              </div>
              <Clock className="w-10 h-10 text-yellow-600" />
            </div>
            <div className="mt-2 text-sm text-gray-500">
              {stats.suratApproved} telah disetujui
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Laporan Baru</p>
                <p className="text-3xl font-bold text-blue-600">
                  {stats.laporanBaru}
                </p>
              </div>
              <MessageSquare className="w-10 h-10 text-blue-600" />
            </div>
            <div className="mt-2 text-sm text-gray-500">
              {stats.laporanProses} dalam proses
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Iuran Terkumpul</p>
                <p className="text-2xl font-bold text-green-800">
                  {((stats.iuranTerkumpul / stats.totalIuran) * 100).toFixed(0)}
                  %
                </p>
              </div>
              <TrendingUp className="w-10 h-10 text-green-600" />
            </div>
            <div className="mt-2 text-sm text-gray-500">
              Rp {stats.iuranTerkumpul.toLocaleString()} dari Rp{" "}
              {stats.totalIuran.toLocaleString()}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Permohonan Surat Pending */}
            <div className="card">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-green-800">
                    Permohonan Surat Pending
                  </h2>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    {stats.suratPending} Pending
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentSurat
                    .filter((s) => s.status === "pending")
                    .map((surat) => (
                      <div
                        key={surat.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center space-x-4">
                          <FileText className="w-8 h-8 text-green-600" />
                          <div>
                            <p className="font-medium text-green-800">
                              {surat.jenis}
                            </p>
                            <p className="text-sm text-gray-600">
                              Pemohon: {surat.pemohon} ({surat.rt})
                            </p>
                            <p className="text-xs text-gray-500">
                              {surat.tanggal}
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700">
                            Setujui
                          </button>
                          <button className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700">
                            Tolak
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Laporan Warga */}
            <div className="card">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-green-800">
                    Laporan Warga Terbaru
                  </h2>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {stats.laporanBaru} Baru
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentLaporan.map((laporan) => (
                    <div
                      key={laporan.id}
                      className="flex items-start justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-start space-x-4">
                        <MessageSquare className="w-8 h-8 text-blue-600 mt-1" />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <p className="font-medium text-green-800">
                              {laporan.judul}
                            </p>
                            <span
                              className={`w-2 h-2 rounded-full ${getPriorityColor(
                                laporan.prioritas
                              )}`}
                            ></span>
                          </div>
                          <p className="text-sm text-gray-600">
                            Pelapor: {laporan.pelapor}
                          </p>
                          <p className="text-sm text-gray-500">
                            Kategori: {laporan.kategori}
                          </p>
                          <p className="text-xs text-gray-500">
                            {laporan.tanggal}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            laporan.status
                          )}`}
                        >
                          {laporan.status === "baru"
                            ? "Baru"
                            : laporan.status === "proses"
                            ? "Proses"
                            : "Selesai"}
                        </span>
                        <button className="text-green-600 hover:text-green-800 text-sm">
                          Tindak Lanjut
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="card p-6">
              <h3 className="font-semibold text-green-800 mb-4">Aksi Cepat</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-start p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                  <FileText className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-green-800">Kelola Template Surat</span>
                </button>
                <button className="w-full flex items-center justify-start p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                  <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-green-800">Buat Pengumuman</span>
                </button>
                <button className="w-full flex items-center justify-start p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                  <Users className="w-5 h-5 text-purple-600 mr-3" />
                  <span className="text-green-800">Kelola Data Warga</span>
                </button>
                <button className="w-full flex items-center justify-start p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
                  <CreditCard className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-green-800">Laporan Keuangan</span>
                </button>
              </div>
            </div>

            {/* Statistik RT */}
            <div className="card p-6">
              <h3 className="font-semibold text-green-800 mb-4">
                Statistik per RT
              </h3>
              <div className="space-y-4">
                {rtStats.map((rt, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-green-800">{rt.rt}</p>
                      <p className="text-sm text-gray-600">{rt.warga} warga</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-green-600">
                        {rt.iuran}% iuran
                      </p>
                      <p className="text-xs text-gray-500">
                        {rt.laporan} laporan
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Kegiatan Mendatang */}
            <div className="card p-6">
              <h3 className="font-semibold text-green-800 mb-4">
                Kegiatan Mendatang
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-green-800">
                      Gotong Royong
                    </p>
                    <p className="text-xs text-gray-500">Minggu, 25 Feb 2024</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-green-800">
                      Rapat Koordinasi RT
                    </p>
                    <p className="text-xs text-gray-500">Senin, 26 Feb 2024</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-green-800">
                      Posyandu Balita
                    </p>
                    <p className="text-xs text-gray-500">Rabu, 28 Feb 2024</p>
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

export default DukuhDashboard;
