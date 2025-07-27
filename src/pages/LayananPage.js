import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";
import { FileText, DollarSign, Users, CalendarDays } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Pengajuan Surat",
    description:
      "Ajukan berbagai jenis surat keterangan dengan mudah dan cepat secara online.",
    link: "/layanan/surat",
  },
  {
    icon: DollarSign,
    title: "Pembayaran Iuran",
    description:
      "Bayar iuran bulanan atau iuran khusus padukuhan langsung dari aplikasi.",
    link: "/layanan/iuran",
  },
  {
    icon: Users,
    title: "Laporan Warga",
    description:
      "Sampaikan laporan atau keluhan terkait fasilitas dan kejadian di lingkungan Anda.",
    link: "/lapor",
  },
  {
    icon: CalendarDays,
    title: "Informasi Kegiatan",
    description:
      "Dapatkan informasi terbaru mengenai kegiatan dan acara di padukuhan.",
    link: "/layanan/kegiatan",
  },
];

const LayananPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
            Semua Layanan SIPEDES
          </h1>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            SIPEDES menyediakan berbagai layanan digital untuk mempermudah
            interaksi Anda dengan pemerintah desa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card p-6 flex flex-col items-center text-center"
              >
                <service.icon className="h-16 w-16 text-green-600 mb-4" />
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="text-green-600 hover:underline font-medium mt-auto"
                >
                  Selengkapnya &rarr;
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-green-50 rounded-lg p-8 shadow-inner">
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              Punya Saran Layanan Baru?
            </h2>
            <p className="text-green-700 mb-6 max-w-2xl mx-auto">
              Kami selalu terbuka untuk masukan dari warga. Jika Anda memiliki
              ide untuk layanan digital baru yang dapat membantu masyarakat
              desa, jangan ragu untuk menyampaikannya!
            </p>
            <Link to="/kontak" className="btn-primary">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LayananPage;
