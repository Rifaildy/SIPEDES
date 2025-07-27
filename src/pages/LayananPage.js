import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const LayananPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-green-800 mb-4">
              Layanan SIPEDES
            </h1>
            <p className="text-lg text-green-600 max-w-2xl mx-auto">
              Berbagai layanan digital untuk memudahkan administrasi dan
              pelayanan di padukuhan
            </p>
          </div>

          <div className="bg-green-50 rounded-lg p-8 text-center">
            <h2 className="text-xl font-semibold text-green-800 mb-4">
              Halaman Layanan Sedang Dikembangkan
            </h2>
            <p className="text-green-600">
              Fitur layanan akan segera tersedia. Terima kasih atas
              kesabarannya.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LayananPage;
