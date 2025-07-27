import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">SIPEDES</h3>
                <p className="text-green-200 text-sm">Sistem Pelayanan Desa</p>
              </div>
            </div>
            <p className="text-green-200 text-sm leading-relaxed">
              Platform digital terpadu untuk pelayanan administrasi dan
              pengelolaan padukuhan yang modern, efisien, dan mudah digunakan.
            </p>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2 text-green-200">
              <li>
                <Link
                  to="/layanan/surat"
                  className="hover:text-white transition-colors"
                >
                  Pengajuan Surat
                </Link>
              </li>
              <li>
                <Link
                  to="/layanan/iuran"
                  className="hover:text-white transition-colors"
                >
                  Pembayaran Iuran
                </Link>
              </li>
              <li>
                <Link
                  to="/lapor"
                  className="hover:text-white transition-colors"
                >
                  Laporan Warga
                </Link>
              </li>
              <li>
                <Link
                  to="/kegiatan"
                  className="hover:text-white transition-colors"
                >
                  Agenda Kegiatan
                </Link>
              </li>
            </ul>
          </div>

          {/* Informasi */}
          <div>
            <h4 className="font-semibold mb-4">Informasi</h4>
            <ul className="space-y-2 text-green-200">
              <li>
                <Link
                  to="/tentang"
                  className="hover:text-white transition-colors"
                >
                  Tentang SIPEDES
                </Link>
              </li>
              <li>
                <Link
                  to="/panduan"
                  className="hover:text-white transition-colors"
                >
                  Panduan Penggunaan
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/kontak"
                  className="hover:text-white transition-colors"
                >
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <div className="space-y-3 text-green-200">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm">Kantor Padukuhan Ngaglik</p>
                  <p className="text-sm">Jl. Kaliurang KM 7, Sleman, DIY</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">(0274) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">info@sipedes.id</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-medium mb-3">Ikuti Kami</h5>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-green-200 text-sm">
              © 2024 SIPEDES. Dikembangkan untuk GEMASTIK XVIII - Kemandirian
              Bangsa.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-green-200 hover:text-white text-sm transition-colors"
              >
                Kebijakan Privasi
              </Link>
              <Link
                to="/terms"
                className="text-green-200 hover:text-white text-sm transition-colors"
              >
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
