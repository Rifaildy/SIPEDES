"use client";

import { Link } from "react-router-dom";
import { useState } from "react";
import { Search } from "lucide-react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const allAnnouncements = [
  {
    id: 1,
    title: "Gotong Royong Bersih Desa Sukses Digelar",
    date: "15 Juli 2024",
    category: "Kegiatan",
    content:
      "Warga Desa Makmur bersatu padu membersihkan lingkungan desa dalam kegiatan gotong royong tahunan. Kegiatan ini bertujuan untuk menjaga kebersihan dan keindahan lingkungan desa serta mempererat tali silaturahmi antar warga. Partisipasi warga sangat antusias, terlihat dari banyaknya warga yang ikut serta dalam kegiatan ini. Terima kasih kepada seluruh warga yang telah berpartisipasi.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Pelatihan UMKM Digital untuk Warga Desa",
    date: "10 Juli 2024",
    category: "Pendidikan",
    content:
      "Pemerintah desa mengadakan pelatihan gratis bagi pelaku UMKM untuk meningkatkan pemasaran online. Pelatihan ini mencakup materi tentang strategi pemasaran digital, penggunaan media sosial, dan pembuatan konten yang menarik. Diharapkan dengan adanya pelatihan ini, UMKM di desa dapat bersaing di pasar yang lebih luas.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Pembangunan Posyandu Baru Dimulai",
    date: "01 Juli 2024",
    category: "Pembangunan",
    content:
      "Proyek pembangunan posyandu modern di Dusun Melati telah dimulai, diharapkan selesai akhir tahun. Posyandu ini akan dilengkapi dengan fasilitas yang lebih lengkap untuk melayani kesehatan ibu dan anak di desa. Mohon dukungan dan doa dari seluruh warga agar pembangunan berjalan lancar.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Sosialisasi Program Bantuan Sosial",
    date: "28 Juni 2024",
    category: "Sosial",
    content:
      "Pemerintah desa akan mengadakan sosialisasi program bantuan sosial terbaru bagi warga yang membutuhkan. Diharapkan warga yang memenuhi kriteria dapat hadir untuk mendapatkan informasi lengkap mengenai program ini.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "Jadwal Imunisasi Massal Anak",
    date: "20 Juni 2024",
    category: "Kesehatan",
    content:
      "Diumumkan jadwal imunisasi massal untuk anak-anak di bawah lima tahun. Mohon orang tua membawa anak-anaknya ke posyandu terdekat sesuai jadwal yang telah ditentukan.",
    image: "/placeholder.svg?height=400&width=600",
  },
];

const PengumumanPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const categories = ["All", ...new Set(allAnnouncements.map((ann) => ann.category))];

  const filteredAnnouncements = allAnnouncements.filter((announcement) => {
    const matchesSearch = announcement.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === "All" || announcement.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Title Section */}
          <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-6">
            Pengumuman Desa
          </h1>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Informasi terbaru dan penting dari pemerintah desa untuk seluruh warga.
          </p>

          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
  {/* Search Input */}
  <div className="relative flex-1">
    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
    <input
      type="text"
      placeholder="Cari pengumuman..."
      className="form-input pl-10 w-full"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>

  {/* Dropdown */}
  <select
    className="form-input w-full sm:w-40"
    value={filterCategory}
    onChange={(e) => setFilterCategory(e.target.value)}
  >
    {categories.map((category) => (
      <option key={category} value={category}>
        {category}
      </option>
    ))}
  </select>
</div>


          {/* Announcement List */}
          {filteredAnnouncements.length === 0 ? (
            <p className="text-center text-gray-600 text-xl mt-10">
              Tidak ada pengumuman yang ditemukan.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAnnouncements.map((announcement) => (
                <div key={announcement.id} className="card overflow-hidden">
                  <img
                    src={announcement.image || "/placeholder.svg"}
                    alt={announcement.title}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-6">
                    <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">
                      {announcement.category}
                    </span>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      {announcement.title}
                    </h2>
                    <p className="text-sm text-gray-500 mb-3">{announcement.date}</p>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {announcement.content}
                    </p>
                    <Link
                      to={`/pengumuman/${announcement.id}`}
                      className="text-green-600 hover:underline font-medium mt-4 inline-block"
                    >
                      Baca Selengkapnya &rarr;
                    </Link>
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

export default PengumumanPage;
