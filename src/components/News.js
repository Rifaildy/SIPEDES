import { Link } from "react-router-dom";

const newsItems = [
  {
    id: 1,
    title: "Gotong Royong Bersih Desa Sukses Digelar",
    date: "15 Juli 2024",
    image: "/placeholder.svg?height=200&width=300",
    excerpt:
      "Warga Desa Makmur bersatu padu membersihkan lingkungan desa dalam kegiatan gotong royong tahunan...",
  },
  {
    id: 2,
    title: "Pelatihan UMKM Digital untuk Warga Desa",
    date: "10 Juli 2024",
    image: "/placeholder.svg?height=200&width=300",
    excerpt:
      "Pemerintah desa mengadakan pelatihan gratis bagi pelaku UMKM untuk meningkatkan pemasaran online...",
  },
  {
    id: 3,
    title: "Pembangunan Posyandu Baru Dimulai",
    date: "01 Juli 2024",
    image: "/placeholder.svg?height=200&width=300",
    excerpt:
      "Proyek pembangunan posyandu modern di Dusun Melati telah dimulai, diharapkan selesai akhir tahun...",
  },
];

const News = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Berita & Pengumuman Terbaru
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Ikuti perkembangan terkini dan informasi penting dari padukuhan Anda.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="card overflow-hidden">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{item.date}</p>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {item.excerpt}
                </p>
                <Link
                  to={`/pengumuman/${item.id}`}
                  className="text-green-600 hover:underline font-medium mt-4 inline-block"
                >
                  Baca Selengkapnya &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Link to="/pengumuman" className="btn-primary">
            Lihat Semua Pengumuman
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;
