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

const Services = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Layanan Unggulan Kami
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          SIPEDES hadir untuk mempermudah berbagai kebutuhan administrasi dan
          informasi warga desa.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card p-6 flex flex-col items-center text-center"
            >
              <service.icon className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                to={service.link}
                className="text-green-600 hover:underline font-medium"
              >
                Selengkapnya &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
