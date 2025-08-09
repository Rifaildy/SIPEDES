import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Users, Lightbulb, Handshake } from "lucide-react"; // Handshake is available in lucide-react

const TentangPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-6">
            Tentang SIPEDES
          </h1>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            SIPEDES (Sistem Pelayanan Desa) adalah inisiatif digital untuk
            meningkatkan kualitas pelayanan publik di tingkat desa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Visi Kami
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Menjadi jembatan digital terdepan yang menghubungkan warga
                dengan pemerintah desa, menciptakan ekosistem desa yang
                transparan, efisien, dan partisipatif. Kami berkomitmen untuk
                memberdayakan masyarakat melalui teknologi.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/lamp.png?height=100&width=300"
                alt="Visi Kami"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 md:flex-row-reverse">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Misi Kami
              </h2>
              <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
                <li>
                  Menyediakan platform pelayanan administrasi desa yang mudah
                  diakses dan efisien.
                </li>
                <li>
                  Meningkatkan transparansi informasi dan partisipasi warga
                  dalam pembangunan desa.
                </li>
                <li>
                  Mengembangkan fitur-fitur inovatif yang relevan dengan
                  kebutuhan masyarakat desa.
                </li>
                <li>Membangun kapasitas digital perangkat desa dan warga.</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img
                src="/globe.jpg?height=300&width=500"
                alt="Misi Kami"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Nilai-nilai Kami
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-6 flex flex-col items-center">
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Berorientasi Warga
                </h3>
                <p className="text-gray-600 text-center">
                  Fokus pada kebutuhan dan kemudahan warga dalam setiap
                  pengembangan.
                </p>
              </div>
              <div className="card p-6 flex flex-col items-center">
                <Lightbulb className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Inovasi
                </h3>
                <p className="text-gray-600 text-center">
                  Terus berinovasi untuk memberikan solusi terbaik dan relevan.
                </p>
              </div>
              <div className="card p-6 flex flex-col items-center">
                <Handshake className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Kolaborasi
                </h3>
                <p className="text-gray-600 text-center">
                  Membangun kerja sama yang kuat antara warga dan pemerintah
                  desa.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
  <h2 className="text-3xl font-bold text-gray-800 mb-4">Tim Kami</h2>
  <p className="text-lg text-gray-600 mb-8">
    SIPEDES dikembangkan oleh tim yang berdedikasi untuk kemajuan desa.
  </p>

  
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
    <div>
      <img
        src="/rifa.jpg"
        alt="Rifaildy Nurhuda Assalam"
        className="rounded-lg shadow-lg w-full h-64 object-cover"
      />
      <p className="mt-2 font-medium text-gray-700">Rifaildy Nurhuda Assalam</p>
    </div>
    <div>
     <img
        src="/rifa.jpg"
        alt="Rifaildy Nurhuda Assalam"
        className="rounded-lg shadow-lg w-full h-64 object-cover"
      />
      <p className="mt-2 font-medium text-gray-700">Rifaildy Nurhuda Assalam</p>
    </div>
    <div>
      <img
        src="/rifa.jpg"
        alt="Rifaildy Nurhuda Assalam"
        className="rounded-lg shadow-lg w-full h-64 object-cover"
      />
      <p className="mt-2 font-medium text-gray-700">Rifaildy Nurhuda Assalam</p>
    </div>
  </div>
</div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TentangPage;
