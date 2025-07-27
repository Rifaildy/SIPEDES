import {
  FileText,
  Users,
  MessageSquare,
  CreditCard,
  Calendar,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Layanan Surat",
    description:
      "Ajukan surat keterangan domisili, pengantar nikah, usaha, dan SKTM secara online",
    features: ["Proses cepat", "Tracking status", "Notifikasi otomatis"],
  },
  {
    icon: Users,
    title: "Data Warga",
    description:
      "Pengelolaan data penduduk yang terorganisir dan mudah diakses",
    features: ["Data terpusat", "Update real-time", "Kategori lengkap"],
  },
  {
    icon: MessageSquare,
    title: "Laporan Warga",
    description:
      "Sampaikan laporan dan aspirasi langsung kepada perangkat desa",
    features: ["Laporan foto", "Lokasi GPS", "Status tindakan"],
  },
  {
    icon: CreditCard,
    title: "Pembayaran Iuran",
    description:
      "Bayar iuran RT dan padukuhan dengan mudah melalui berbagai metode",
    features: ["QRIS", "Transfer bank", "Riwayat lengkap"],
  },
  {
    icon: Calendar,
    title: "Agenda Kegiatan",
    description: "Informasi lengkap tentang kegiatan dan acara di padukuhan",
    features: ["Jadwal terkini", "Reminder", "Partisipasi online"],
  },
  {
    icon: BarChart3,
    title: "Dashboard RT/Dukuh",
    description: "Panel kontrol untuk RT dan Dukuh mengelola administrasi",
    features: ["Statistik real-time", "Laporan otomatis", "Manajemen kas"],
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-green-800 mb-4">
            Layanan Unggulan SIPEDES
          </h2>
          <p className="text-lg text-green-600 max-w-2xl mx-auto">
            Berbagai fitur lengkap untuk mendukung pelayanan digital di tingkat
            padukuhan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="border border-green-100 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 bg-white"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-green-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-green-700"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
