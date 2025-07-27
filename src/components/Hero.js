import { Link } from "react-router-dom";
import { FileText, MessageSquare, Calendar, CreditCard } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-green-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-green-800 mb-6">
              Layanan Digital Terpadu untuk{" "}
              <span className="text-green-600">Padukuhan</span>
            </h1>
            <p className="text-lg text-green-700 mb-8 leading-relaxed">
              SIPEDES hadir untuk memudahkan pelayanan administrasi, pengelolaan
              iuran, pelaporan warga, dan informasi kegiatan di tingkat
              padukuhan. Semua dalam satu platform yang mudah digunakan.
            </p>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <Link
                to="/layanan/surat"
                className="bg-green-600 hover:bg-green-700 text-white h-auto py-4 px-4 rounded-lg flex flex-col items-center space-y-2 transition-colors"
              >
                <FileText className="w-6 h-6" />
                <span>Ajukan Surat</span>
              </Link>
              <Link
                to="/lapor"
                className="border border-green-600 text-green-600 hover:bg-green-50 h-auto py-4 px-4 rounded-lg flex flex-col items-center space-y-2 transition-colors"
              >
                <MessageSquare className="w-6 h-6" />
                <span>Lapor Warga</span>
              </Link>
              <Link
                to="/layanan/iuran"
                className="border border-green-600 text-green-600 hover:bg-green-50 h-auto py-4 px-4 rounded-lg flex flex-col items-center space-y-2 transition-colors"
              >
                <CreditCard className="w-6 h-6" />
                <span>Bayar Iuran</span>
              </Link>
              <Link
                to="/kegiatan"
                className="border border-green-600 text-green-600 hover:bg-green-50 h-auto py-4 px-4 rounded-lg flex flex-col items-center space-y-2 transition-colors"
              >
                <Calendar className="w-6 h-6" />
                <span>Lihat Kegiatan</span>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/login"
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors text-center"
              >
                Mulai Sekarang
              </Link>
              <Link
                to="/tentang"
                className="px-6 py-3 border border-green-600 text-green-600 hover:bg-green-50 rounded-lg font-medium transition-colors text-center"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Ilustrasi Pelayanan Desa Digital"
                className="w-full h-auto rounded-lg"
              />
            </div>
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-green-600 text-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm">Layanan Online</div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg border border-green-100">
              <div className="text-2xl font-bold text-green-600">100%</div>
              <div className="text-sm text-green-800">Digital</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
