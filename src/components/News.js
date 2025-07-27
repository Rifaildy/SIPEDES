import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const announcements = [
  {
    id: 1,
    title: "Gotong Royong Minggu Depan",
    excerpt:
      "Akan diadakan gotong royong membersihkan lingkungan pada hari Minggu, 4 Februari 2024 pukul 07.00 WIB.",
    date: "28 Januari 2024",
    type: "info",
    author: "Dukuh Ngaglik",
  },
  {
    id: 2,
    title: "Pembayaran Iuran Bulan Februari",
    excerpt:
      "Diingatkan kepada seluruh warga untuk segera melunasi iuran bulan Februari 2024.",
    date: "1 Februari 2024",
    type: "penting",
    author: "Dukuh Ngaglik",
  },
  {
    id: 3,
    title: "Posyandu Balita dan Lansia",
    excerpt:
      "Kegiatan posyandu rutin akan dilaksanakan setiap hari Rabu minggu ketiga di Balai Padukuhan.",
    date: "15 Januari 2024",
    type: "info",
    author: "RT 001",
  },
];

const upcomingEvents = [
  {
    title: "Rapat RT Bulanan",
    date: "10 Feb 2024",
    time: "19:00 WIB",
    location: "Balai RT 001",
  },
  {
    title: "Kerja Bakti Lingkungan",
    date: "18 Feb 2024",
    time: "07:00 WIB",
    location: "Seluruh Wilayah RT",
  },
  {
    title: "Perayaan HUT RI",
    date: "17 Agu 2024",
    time: "08:00 WIB",
    location: "Lapangan Padukuhan",
  },
];

const News = () => {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Pengumuman */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-green-800">
                Pengumuman Terbaru
              </h2>
              <Link
                to="/pengumuman"
                className="flex items-center px-4 py-2 border border-green-600 text-green-600 hover:bg-green-100 rounded-lg transition-colors"
              >
                Lihat Semua
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="space-y-6">
              {announcements.map((announcement) => (
                <div
                  key={announcement.id}
                  className="bg-white border border-green-100 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            announcement.type === "penting"
                              ? "bg-red-100 text-red-800"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          {announcement.type === "penting" ? "Penting" : "Info"}
                        </span>
                        <span className="text-sm text-green-600">
                          {announcement.author}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-green-800 hover:text-green-600 cursor-pointer mb-2">
                        {announcement.title}
                      </h3>
                      <p className="text-green-700 mb-3">
                        {announcement.excerpt}
                      </p>
                      <div className="flex items-center text-sm text-green-600">
                        <Calendar className="w-4 h-4 mr-1" />
                        {announcement.date}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Agenda Kegiatan */}
          <div>
            <h3 className="text-xl font-bold text-green-800 mb-6">
              Agenda Kegiatan
            </h3>

            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white border border-green-100 rounded-lg p-4"
                >
                  <h4 className="font-semibold text-green-800 mb-2">
                    {event.title}
                  </h4>
                  <div className="space-y-1 text-sm text-green-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="text-green-500">📍 {event.location}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/kegiatan"
              className="block w-full mt-6 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-center"
            >
              Lihat Semua Kegiatan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
