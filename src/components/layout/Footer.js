import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-2xl font-bold text-green-400 mb-4">SIPEDES</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Sistem Pelayanan Desa Digital adalah platform inovatif untuk
            mempermudah akses layanan administrasi, informasi, dan partisipasi
            warga dalam pembangunan desa.
          </p>
          <div className="flex space-x-4 mt-6">
            <a
              href="#"
              className="text-gray-300 hover:text-green-400 transition-colors duration-200"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-green-400 transition-colors duration-200"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-green-400 transition-colors duration-200"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-green-400 mb-4">
            Tautan Cepat
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="text-gray-300 hover:text-green-400 text-sm transition-colors duration-200"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to="/layanan"
                className="text-gray-300 hover:text-green-400 text-sm transition-colors duration-200"
              >
                Layanan
              </Link>
            </li>
            <li>
              <Link
                to="/pengumuman"
                className="text-gray-300 hover:text-green-400 text-sm transition-colors duration-200"
              >
                Pengumuman
              </Link>
            </li>
            <li>
              <Link
                to="/lapor"
                className="text-gray-300 hover:text-green-400 text-sm transition-colors duration-200"
              >
                Lapor Warga
              </Link>
            </li>
            <li>
              <Link
                to="/tentang"
                className="text-gray-300 hover:text-green-400 text-sm transition-colors duration-200"
              >
                Tentang Kami
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-green-400 mb-4">Layanan</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/layanan/surat"
                className="text-gray-300 hover:text-green-400 text-sm transition-colors duration-200"
              >
                Pengajuan Surat
              </Link>
            </li>
            <li>
              <Link
                to="/layanan/iuran"
                className="text-gray-300 hover:text-green-400 text-sm transition-colors duration-200"
              >
                Pembayaran Iuran
              </Link>
            </li>
            <li>
              <Link
                to="/layanan/kegiatan"
                className="text-gray-300 hover:text-green-400 text-sm transition-colors duration-200"
              >
                Informasi Kegiatan
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-green-400 mb-4">Kontak</h3>
          <p className="text-gray-300 text-sm">Jl. Raya Desa No. 123</p>
          <p className="text-gray-300 text-sm">Desa Makmur, Kode Pos 12345</p>
          <p className="text-gray-300 text-sm mt-2">Email: info@sipedes.id</p>
          <p className="text-gray-300 text-sm">Telepon: (021) 123-4567</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} SIPEDES. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
