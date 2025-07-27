"use client";

import { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { CalendarDays, MapPin, Users, Search } from "lucide-react";

const allActivities = [
  {
    id: 1,
    title: "Kerja Bakti Lingkungan",
    date: "25 Juli 2024",
    time: "08:00 - 12:00 WIB",
    location: "Seluruh Wilayah Desa",
    description:
      "Membersihkan lingkungan desa secara gotong royong untuk menjaga kebersihan dan keindahan.",
    participants: 50,
    maxParticipants: 100,
    status: "Akan Datang",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Pelatihan Pembuatan Pupuk Kompos",
    date: "01 Agustus 2024",
    time: "09:00 - 15:00 WIB",
    location: "Balai Desa",
    description:
      "Pelatihan praktis bagi warga untuk membuat pupuk kompos dari sampah organik rumah tangga.",
    participants: 20,
    maxParticipants: 30,
    status: "Akan Datang",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Lomba Kemerdekaan 17 Agustus",
    date: "17 Agustus 2024",
    time: "Sepanjang Hari",
    location: "Lapangan Desa",
    description:
      "Berbagai lomba seru untuk memeriahkan Hari Kemerdekaan Republik Indonesia.",
    participants: 120,
    maxParticipants: 200,
    status: "Akan Datang",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Penyuluhan Kesehatan Ibu dan Anak",
    date: "10 Juli 2024",
    time: "10:00 - 12:00 WIB",
    location: "Posyandu Melati",
    description:
      "Penyuluhan rutin tentang gizi dan kesehatan untuk ibu hamil dan balita.",
    participants: 40,
    maxParticipants: 40,
    status: "Selesai",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "Musyawarah Desa Tahunan",
    date: "05 Juli 2024",
    time: "19:00 - Selesai",
    location: "Balai Desa",
    description:
      "Musyawarah untuk membahas rencana pembangunan dan anggaran desa tahun depan.",
    participants: 80,
    maxParticipants: 80,
    status: "Selesai",
    image: "/placeholder.svg?height=200&width=300",
  },
];

const KegiatanPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("Semua");

  const statuses = ["Semua", "Akan Datang", "Berlangsung", "Selesai"];

  const filteredActivities = allActivities.filter((activity) => {
    const matchesSearch = activity.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "Semua" || activity.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-6">
            Informasi Kegiatan Desa
          </h1>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Dapatkan informasi terbaru mengenai kegiatan, acara, dan agenda
            penting di padukuhan Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Cari kegiatan..."
                className="form-input pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
            <select
              className="form-input sm:w-auto"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          {filteredActivities.length === 0 ? (
            <p className="text-center text-gray-600 text-xl mt-10">
              Tidak ada kegiatan yang ditemukan.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredActivities.map((activity) => (
                <div key={activity.id} className="card overflow-hidden">
                  <img
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.title}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      {activity.title}
                    </h2>
                    <p className="text-sm text-gray-500 mb-3 flex items-center gap-1">
                      <CalendarDays size={16} /> {activity.date} -{" "}
                      {activity.time}
                    </p>
                    <p className="text-sm text-gray-500 mb-3 flex items-center gap-1">
                      <MapPin size={16} /> {activity.location}
                    </p>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {activity.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Users size={16} /> {activity.participants}/
                        {activity.maxParticipants} Peserta
                      </div>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                          activity.status === "Akan Datang"
                            ? "bg-blue-100 text-blue-800"
                            : activity.status === "Berlangsung"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {activity.status}
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                      <div
                        className="bg-green-600 h-2.5 rounded-full"
                        style={{
                          width: `${
                            (activity.participants / activity.maxParticipants) *
                            100
                          }%`,
                        }}
                      ></div>
                    </div>

                    {activity.status === "Akan Datang" && (
                      <button className="btn-primary w-full">
                        Daftar Sekarang
                      </button>
                    )}
                    {activity.status === "Selesai" && (
                      <button
                        className="btn-secondary w-full cursor-not-allowed opacity-70"
                        disabled
                      >
                        Kegiatan Selesai
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default KegiatanPage;
