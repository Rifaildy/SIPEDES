"use client";

import { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import {
  Users,
  FileText,
  DollarSign,
  CheckCircle,
  XCircle,
  Eye,
  Edit,
  Trash2,
  PlusCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const RTDashboard = () => {
  const [activeTab, setActiveTab] = useState("warga"); // 'warga', 'surat', 'kas'

  // Mock Data for RT Dashboard
  const stats = [
    {
      title: "Total Warga",
      value: "320",
      icon: Users,
      color: "text-green-600",
    },
    {
      title: "Surat Pending",
      value: "3",
      icon: FileText,
      color: "text-yellow-600",
    },
    {
      title: "Kas RT",
      value: "Rp 1.250.000",
      icon: DollarSign,
      color: "text-blue-600",
    },
  ];

  const wargaData = [
    {
      id: 1,
      name: "Budi Santoso",
      address: "Jl. Mawar No. 10",
      status: "Aktif",
      iuran: "Lunas",
    },
    {
      id: 2,
      name: "Siti Aminah",
      address: "Jl. Mawar No. 12",
      status: "Aktif",
      iuran: "Belum Lunas",
    },
    {
      id: 3,
      name: "Joko Susilo",
      address: "Jl. Melati No. 5",
      status: "Aktif",
      iuran: "Lunas",
    },
    {
      id: 4,
      name: "Dewi Lestari",
      address: "Jl. Anggrek No. 8",
      status: "Aktif",
      iuran: "Lunas",
    },
    {
      id: 5,
      name: "Agus Salim",
      address: "Jl. Mawar No. 15",
      status: "Aktif",
      iuran: "Belum Lunas",
    },
  ];

  const suratPermohonan = [
    {
      id: 1,
      type: "Surat Keterangan Usaha",
      applicant: "Rina Fitri",
      date: "18 Juli 2024",
      status: "Pending",
    },
    {
      id: 2,
      type: "Surat Domisili",
      applicant: "Fajar Nugroho",
      date: "17 Juli 2024",
      status: "Pending",
    },
    {
      id: 3,
      type: "Surat Keterangan Kematian",
      applicant: "Hartono",
      date: "15 Juli 2024",
      status: "Disetujui",
    },
  ];

  const kasRTData = [
    {
      id: 1,
      date: "01 Juli 2024",
      description: "Saldo Awal Bulan",
      type: "Pemasukan",
      amount: 1000000,
    },
    {
      id: 2,
      date: "05 Juli 2024",
      description: "Iuran Warga Juli",
      type: "Pemasukan",
      amount: 250000,
    },
    {
      id: 3,
      date: "10 Juli 2024",
      description: "Pembelian Alat Kebersihan",
      type: "Pengeluaran",
      amount: 75000,
    },
    {
      id: 4,
      date: "15 Juli 2024",
      description: "Iuran Warga Juli",
      type: "Pemasukan",
      amount: 100000,
    },
  ];

  const calculateKasSaldo = () => {
    return kasRTData.reduce((acc, item) => {
      return item.type === "Pemasukan" ? acc + item.amount : acc - item.amount;
    }, 0);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Dashboard Ketua RT
          </h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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

          {/* Tabs Navigation */}
          <div className="bg-white rounded-lg shadow-sm mb-6">
            <div className="flex border-b border-gray-200">
              <button
                className={`py-3 px-6 text-lg font-medium ${
                  activeTab === "warga"
                    ? "text-green-700 border-b-2 border-green-700"
                    : "text-gray-600 hover:text-green-700"
                }`}
                onClick={() => setActiveTab("warga")}
              >
                Data Warga
              </button>
              <button
                className={`py-3 px-6 text-lg font-medium ${
                  activeTab === "surat"
                    ? "text-green-700 border-b-2 border-green-700"
                    : "text-gray-600 hover:text-green-700"
                }`}
                onClick={() => setActiveTab("surat")}
              >
                Permohonan Surat
              </button>
              <button
                className={`py-3 px-6 text-lg font-medium ${
                  activeTab === "kas"
                    ? "text-green-700 border-b-2 border-green-700"
                    : "text-gray-600 hover:text-green-700"
                }`}
                onClick={() => setActiveTab("kas")}
              >
                Kas RT
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="card p-6">
            {activeTab === "warga" && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Data Warga RT Anda
                  </h2>
                  <Link
                    to="/dashboard/rt/add-warga"
                    className="btn-primary flex items-center gap-2"
                  >
                    <PlusCircle size={20} /> Tambah Warga
                  </Link>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Nama
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Alamat
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Iuran
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Aksi
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {wargaData.map((warga) => (
                        <tr key={warga.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {warga.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                            {warga.address}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {warga.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <span
                              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                warga.iuran === "Lunas"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {warga.iuran}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                            <button className="text-blue-600 hover:text-blue-900 mr-3">
                              <Eye size={20} />
                            </button>
                            <button className="text-yellow-600 hover:text-yellow-900 mr-3">
                              <Edit size={20} />
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                              <Trash2 size={20} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {wargaData.length === 0 && (
                  <p className="text-center text-gray-500 mt-4">
                    Tidak ada data warga.
                  </p>
                )}
              </div>
            )}

            {activeTab === "surat" && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Permohonan Surat Warga
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
                          Tanggal
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
                      {suratPermohonan.map((surat) => (
                        <tr key={surat.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {surat.type}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                            {surat.applicant}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                            {surat.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <span
                              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                surat.status === "Pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-green-100 text-green-800"
                              }`}
                            >
                              {surat.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                            {surat.status === "Pending" ? (
                              <>
                                <button className="text-green-600 hover:text-green-900 mr-3">
                                  <CheckCircle size={20} />
                                </button>
                                <button className="text-red-600 hover:text-red-900">
                                  <XCircle size={20} />
                                </button>
                              </>
                            ) : (
                              <button className="text-blue-600 hover:text-blue-900">
                                <Eye size={20} />
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {suratPermohonan.length === 0 && (
                  <p className="text-center text-gray-500 mt-4">
                    Tidak ada permohonan surat.
                  </p>
                )}
              </div>
            )}

            {activeTab === "kas" && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Laporan Kas RT
                  </h2>
                  <Link
                    to="/dashboard/rt/add-transaction"
                    className="btn-primary flex items-center gap-2"
                  >
                    <PlusCircle size={20} /> Tambah Transaksi
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <p className="text-blue-700 text-sm">Saldo Saat Ini</p>
                    <h3 className="text-2xl font-bold text-blue-800">
                      Rp {calculateKasSaldo().toLocaleString("id-ID")}
                    </h3>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <p className="text-green-700 text-sm">Total Pemasukan</p>
                    <h3 className="text-2xl font-bold text-green-800">
                      Rp{" "}
                      {kasRTData
                        .filter((item) => item.type === "Pemasukan")
                        .reduce((sum, item) => sum + item.amount, 0)
                        .toLocaleString("id-ID")}
                    </h3>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg text-center">
                    <p className="text-red-700 text-sm">Total Pengeluaran</p>
                    <h3 className="text-2xl font-bold text-red-800">
                      Rp{" "}
                      {kasRTData
                        .filter((item) => item.type === "Pengeluaran")
                        .reduce((sum, item) => sum + item.amount, 0)
                        .toLocaleString("id-ID")}
                    </h3>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Tanggal
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Deskripsi
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Jenis
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Jumlah (Rp)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {kasRTData.map((item) => (
                        <tr key={item.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {item.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                            {item.description}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <span
                              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                item.type === "Pemasukan"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {item.type}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-600">
                            {item.amount.toLocaleString("id-ID")}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {kasRTData.length === 0 && (
                  <p className="text-center text-gray-500 mt-4">
                    Tidak ada transaksi kas RT.
                  </p>
                )}
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
