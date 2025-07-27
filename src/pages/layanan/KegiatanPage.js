"use client";

import { useState, useEffect } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { useAuth } from "../../contexts/AuthContext";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  CheckCircle,
  Search,
} from "lucide-react";

const KegiatanPage = () => {
  const { user } = useAuth();
  const [kegiatan, setKegiatan] = useState([]);
  const [filteredKegiatan, setFilteredKegiatan] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("semua");
  const [filterJenis, setFilterJenis] = useState("semua");

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      const kegiatanData = [
        {
          id: 1,
          judul: "Gotong Royong Membersihkan Lingkungan",
          deskripsi:
            "Kegiatan bersih-bersih lingkungan RT bersama seluruh warga",
          tanggalMulai: "2024-02-25T07:00:00",
          tanggalSelesai: "2024-02-25T10:00:00",
          lokasi: "Seluruh wilayah RT 001",
          penyelenggara: "RT 001",
          jenis: "gotong_royong",
          isWajib: true,
          maxPeserta: 50,
          pesertaTerdaftar: 32,
          status: "akan_datang",
          kontak: "Pak RT - 081234567890",
        },
        {
          id: 2,
          judul: "Posyandu Balita dan Lansia",
          deskripsi: "Pemeriksaan kesehatan rutin untuk balita dan lansia",
          tanggalMulai: "2024-02-28T08:00:00",
          tanggalSelesai: "2024-02-28T12:00:00",
          lokasi: "Balai RT 001",
          penyelenggara: "Kader Posyandu",
          jenis: "kesehatan",
          isWajib: false,
          maxPeserta: 30,
          pesertaTerdaftar: 18,
          status: "akan_datang",
          kontak: "Bu Sari - 081234567891",
        },
        {
          id: 3,
          judul: "Rapat RT Bulanan",
          deskripsi: "Rapat koordinasi bulanan membahas program kerja RT",
          tanggalMulai: "2024-03-01T19:00:00",
          tanggalSelesai: "2024-03-01T21:00:00",
          lokasi: "Balai RT 001",
          penyelenggara: "RT 001",
          jenis: "rapat",
          isWajib: true,
          maxPeserta: 100,
          pesertaTerdaftar: 45,
          status: "akan_datang",
          kontak: "Pak RT - 081234567890",
        },
        {
          id: 4,
          judul: "Pelatihan UMKM Digital",
          deskripsi: "Pelatihan pemasaran online untuk pelaku UMKM",
          tanggalMulai: "2024-01-20T09:00:00",
          tanggalSelesai: "2024-01-20T15:00:00",
          lokasi: "Balai Padukuhan",
          penyelenggara: "Padukuhan",
          jenis: "pelatihan",
          isWajib: false,
          maxPeserta: 25,
          pesertaTerdaftar: 25,
          status: "selesai",
          kontak: "Pak Dukuh - 081234567892",
        },
      ];
      setKegiatan(kegiatanData);
      setFilteredKegiatan(kegiatanData);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = kegiatan;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.deskripsi.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by status
    if (filterStatus !== "semua") {
      filtered = filtered.filter((item) => item.status === filterStatus);
    }

    // Filter by jenis
    if (filterJenis !== "semua") {
      filtered = filtered.filter((item) => item.jenis === filterJenis);
    }

    setFilteredKegiatan(filtered);
  }, [kegiatan, searchTerm, filterStatus, filterJenis]);

  const getStatusColor = (status) => {
    switch (status) {
      case "akan_datang":
        return "text-blue-600 bg-blue-100";
      case "berlangsung":
        return "text-green-600 bg-green-100";
      case "selesai":
        return "text-gray-600 bg-gray-100";
      case "dibatalkan":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getJenisColor = (jenis) => {
    switch (jenis) {
      case "gotong_royong":
        return "text-green-600 bg-green-100";
      case "kesehatan":
        return "text-blue-600 bg-blue-100";
      case "rapat":
        return "text-purple-600 bg-purple-100";
      case "pelatihan":
        return "text-orange-600 bg-orange-100";
      case "sosial":
        return "text-pink-600 bg-pink-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const jenisOptions = [
    { value: "semua", label: "Semua Jenis" },
    { value: "gotong_royong", label: "Gotong Royong" },
    { value: "kesehatan", label: "Kesehatan" },
    { value: "rapat", label: "Rapat" },
    { value: "pelatihan", label: "Pelatihan" },
    { value: "sosial", label: "Sosial" },
  ];

  const statusOptions = [
    { value: "semua", label: "Semua Status" },
    { value: "akan_datang", label: "Akan Datang" },
    { value: "berlangsung", label: "Berlangsung" },
    { value: "selesai", label: "Selesai" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-green-800 mb-4">
              Agenda Kegiatan
            </h1>
            <p className="text-green-600">
              Ikuti berbagai kegiatan dan acara di lingkungan RT dan Padukuhan
            </p>
          </div>

          {/* Search and Filter */}
          <div className="card p-6 mb-8">
            <div className="grid md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Cari kegiatan..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="form-input pl-10"
                  />
                </div>
              </div>

              {/* Filter Status */}
              <div>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="form-input"
                >
                  {statusOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Filter Jenis */}
              <div>
                <select
                  value={filterJenis}
                  onChange={(e) => setFilterJenis(e.target.value)}
                  className="form-input"
                >
                  {jenisOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Kegiatan List */}
          <div className="grid lg:grid-cols-3 gap-6">
            {filteredKegiatan.map((item) => (
              <div
                key={item.id}
                className="card hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getJenisColor(
                            item.jenis
                          )}`}
                        >
                          {item.jenis.replace("_", " ").toUpperCase()}
                        </span>
                        {item.isWajib && (
                          <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                            WAJIB
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-green-800 mb-2">
                        {item.judul}
                      </h3>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        item.status
                      )}`}
                    >
                      {item.status.replace("_", " ").toUpperCase()}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.deskripsi}
                  </p>

                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-green-600" />
                      <span>{formatDate(item.tanggalMulai)}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-green-600" />
                      <span>
                        {formatTime(item.tanggalMulai)} -{" "}
                        {formatTime(item.tanggalSelesai)}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-green-600" />
                      <span>{item.lokasi}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2 text-green-600" />
                      <span>
                        {item.pesertaTerdaftar}/{item.maxPeserta} peserta
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                      <span>Pendaftar</span>
                      <span>
                        {Math.round(
                          (item.pesertaTerdaftar / item.maxPeserta) * 100
                        )}
                        %
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full transition-all duration-300"
                        style={{
                          width: `${
                            (item.pesertaTerdaftar / item.maxPeserta) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500">Penyelenggara:</p>
                      <p className="text-sm font-medium text-green-800">
                        {item.penyelenggara}
                      </p>
                    </div>
                    {item.status === "akan_datang" &&
                      item.pesertaTerdaftar < item.maxPeserta && (
                        <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors">
                          Daftar
                        </button>
                      )}
                    {item.status === "akan_datang" &&
                      item.pesertaTerdaftar >= item.maxPeserta && (
                        <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm">
                          Penuh
                        </span>
                      )}
                    {item.status === "selesai" && (
                      <span className="px-4 py-2 bg-green-100 text-green-800 rounded-lg text-sm flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Selesai
                      </span>
                    )}
                  </div>

                  {/* Contact Info */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500">
                      Kontak: {item.kontak}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredKegiatan.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Tidak ada kegiatan
              </h3>
              <p className="text-gray-500">
                Tidak ada kegiatan yang sesuai dengan filter yang dipilih.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default KegiatanPage;
