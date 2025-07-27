"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import {
  Users,
  FileText,
  CreditCard,
  CheckCircle,
  Clock,
  Plus,
  Eye,
  Edit,
  Trash2,
} from "lucide-react";

const RTDashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalWarga: 0,
    suratPending: 0,
    suratVerified: 0,
    laporanBaru: 0,
    kasRT: 0,
    iuranTerkumpul: 0,
    iuranTarget: 0,
  });

  const [wargaList, setWargaList] = useState([]);
  const [suratList, setSuratList] = useState([]);
  const [kasTransaksi, setKasTransaksi] = useState([]);
  const [activeTab, setActiveTab] = useState("warga");

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setStats({
        totalWarga: 245,
        suratPending: 5,
        suratVerified: 23,
        laporanBaru: 2,
        kasRT: 2450000,
        iuranTerkumpul: 2100000,
        iuranTarget: 2450000,
      });

      setWargaList([
        {
          id: 1,
          nama: "Budi Santoso",
          nik: "3404012345678901",
          alamat: "Jl. Kaliurang KM 7 No. 10",
          phone: "081234567890",
          status: "aktif",
          iuranStatus: "lunas",
        },
        {
          id: 2,
          nama: "Siti Rahayu",
          nik: "3404012345678902",
          alamat: "Jl. Kaliurang KM 7 No. 12",
          phone: "081234567891",
          status: "aktif",
          iuranStatus: "tunggak",
        },
        {
          id: 3,
          nama: "Ahmad Wijaya",
          nik: "3404012345678903",
          alamat: "Jl. Kaliurang KM 7 No. 25",
          phone: "081234567892",
          status: "aktif",
          iuranStatus: "lunas",
        },
      ]);

      setSuratList([
        {
          id: 1,
          pemohon: "Budi Santoso",
          jenis: "Surat Keterangan Domisili",
          tanggal: "2024-01-20",
          status: "pending",
          keperluan: "Untuk keperluan bank",
        },
        {
          id: 2,
          pemohon: "Siti Rahayu",
          jenis: "Surat Pengantar Nikah",
          tanggal: "2024-01-19",
          status: "verified",
          keperluan: "Untuk menikah",
        },
      ]);

      setKasTransaksi([
        {
          id: 1,
          tanggal: "2024-01-20",
          jenis: "pemasukan",
          kategori: "Iuran Ronda",
          deskripsi: "Iuran ronda bulan Januari",
          nominal: 100000,
        },
        {
          id: 2,
          tanggal: "2024-01-19",
          jenis: "pengeluaran",
          kategori: "Konsumsi",
          deskripsi: "Konsumsi rapat RT",
          nominal: 75000,
        },
      ]);
    }, 1000);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "text-yellow-600 bg-yellow-100";
      case "verified":
        return "text-blue-600 bg-blue-100";
      case "approved":
        return "text-green-600 bg-green-100";
      case "rejected":
        return "text-red-600 bg-red-100";
      case "aktif":
        return "text-green-600 bg-green-100";
      case "lunas":
        return "text-green-600 bg-green-100";
      case "tunggak":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const tabs = [
    { id: "warga", label: "Data Warga", icon: Users },
    { id: "surat", label: "Permohonan Surat", icon: FileText },
    { id: "kas", label: "Kas RT", icon: CreditCard },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-green-800 mb-2">
            Dashboard RT
          </h1>
          <p className="text-green-600">
            Selamat datang, {user?.name} - Kelola warga dan administrasi RT
          </p>
        </div>

        {/* Stats Cards */}
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
            <div className="mt-2 text-sm text-gray-500">Warga aktif RT</div>
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
              {stats.suratVerified} telah diverifikasi
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Kas RT</p>
                <p className="text-2xl font-bold text-green-800">
                  Rp {stats.kasRT.toLocaleString()}
                </p>
              </div>
              <CreditCard className="w-10 h-10 text-green-600" />
            </div>
            <div className="mt-2 text-sm text-gray-500">Saldo saat ini</div>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Iuran Terkumpul</p>
                <p className="text-2xl font-bold text-green-800">
                  {((stats.iuranTerkumpul / stats.iuranTarget) * 100).toFixed(
                    0
                  )}
                  %
                </p>
              </div>
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <div className="mt-2 text-sm text-gray-500">
              Rp {stats.iuranTerkumpul.toLocaleString()} dari target
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="card mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? "border-green-500 text-green-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* Data Warga Tab */}
            {activeTab === "warga" && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-green-800">
                    Data Warga RT
                  </h2>
                  <button className="btn-primary flex items-center space-x-2">
                    <Plus className="w-4 h-4" />
                    <span>Tambah Warga</span>
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Nama
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          NIK
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Alamat
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status Iuran
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Aksi
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {wargaList.map((warga) => (
                        <tr key={warga.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {warga.nama}
                              </div>
                              <div className="text-sm text-gray-500">
                                {warga.phone}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {warga.nik}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            {warga.alamat}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                                warga.iuranStatus
                              )}`}
                            >
                              {warga.iuranStatus === "lunas"
                                ? "Lunas"
                                : "Tunggak"}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              <button className="text-green-600 hover:text-green-900">
                                <Eye className="w-4 h-4" />
                              </button>
                              <button className="text-blue-600 hover:text-blue-900">
                                <Edit className="w-4 h-4" />
                              </button>
                              <button className="text-red-600 hover:text-red-900">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Permohonan Surat Tab */}
            {activeTab === "surat" && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-green-800">
                    Permohonan Surat
                  </h2>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    {stats.suratPending} Pending
                  </span>
                </div>

                <div className="space-y-4">
                  {suratList.map((surat) => (
                    <div
                      key={surat.id}
                      className="border border-gray-200 rounded-lg p-6"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <FileText className="w-8 h-8 text-green-600 mt-1" />
                          <div className="flex-1">
                            <h3 className="font-medium text-green-800 mb-1">
                              {surat.jenis}
                            </h3>
                            <p className="text-sm text-gray-600 mb-1">
                              Pemohon: {surat.pemohon}
                            </p>
                            <p className="text-sm text-gray-600 mb-1">
                              Keperluan: {surat.keperluan}
                            </p>
                            <p className="text-xs text-gray-500">
                              Tanggal: {surat.tanggal}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                              surat.status
                            )}`}
                          >
                            {surat.status === "pending"
                              ? "Pending"
                              : surat.status === "verified"
                              ? "Terverifikasi"
                              : "Disetujui"}
                          </span>
                          {surat.status === "pending" && (
                            <div className="flex space-x-2">
                              <button className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700">
                                Verifikasi
                              </button>
                              <button className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700">
                                Tolak
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Kas RT Tab */}
            {activeTab === "kas" && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-green-800">Kas RT</h2>
                  <div className="flex space-x-2">
                    <button className="btn-secondary">Laporan Bulanan</button>
                    <button className="btn-primary flex items-center space-x-2">
                      <Plus className="w-4 h-4" />
                      <span>Tambah Transaksi</span>
                    </button>
                  </div>
                </div>

                {/* Saldo Summary */}
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="card p-4">
                    <p className="text-sm text-gray-600">Saldo Saat Ini</p>
                    <p className="text-2xl font-bold text-green-800">
                      Rp {stats.kasRT.toLocaleString()}
                    </p>
                  </div>
                  <div className="card p-4">
                    <p className="text-sm text-gray-600">Pemasukan Bulan Ini</p>
                    <p className="text-2xl font-bold text-blue-800">
                      Rp 2,100,000
                    </p>
                  </div>
                  <div className="card p-4">
                    <p className="text-sm text-gray-600">
                      Pengeluaran Bulan Ini
                    </p>
                    <p className="text-2xl font-bold text-red-800">
                      Rp 350,000
                    </p>
                  </div>
                </div>

                {/* Transaksi Terbaru */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-green-800">
                    Transaksi Terbaru
                  </h3>
                  {kasTransaksi.map((transaksi) => (
                    <div
                      key={transaksi.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            transaksi.jenis === "pemasukan"
                              ? "bg-green-500"
                              : "bg-red-500"
                          }`}
                        ></div>
                        <div>
                          <p className="font-medium text-green-800">
                            {transaksi.deskripsi}
                          </p>
                          <p className="text-sm text-gray-600">
                            Kategori: {transaksi.kategori}
                          </p>
                          <p className="text-xs text-gray-500">
                            {transaksi.tanggal}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p
                          className={`font-bold ${
                            transaksi.jenis === "pemasukan"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {transaksi.jenis === "pemasukan" ? "+" : "-"}Rp{" "}
                          {transaksi.nominal.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RTDashboard;
