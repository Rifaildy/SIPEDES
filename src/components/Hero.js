import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/placeholder.svg?height=800&width=1200"
          alt="Background Pattern"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="text-center lg:text-left lg:w-1/2 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            SIPEDES: Sistem Pelayanan Desa Digital
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
            Mempermudah akses layanan administrasi desa, informasi, dan
            partisipasi warga dalam satu platform digital.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Link to="/layanan" className="btn-primary animate-slide-up">
              Jelajahi Layanan
            </Link>
            <Link
              to="/tentang"
              className="btn-secondary animate-slide-up delay-100"
            >
              Tentang Kami
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end animate-bounce-in">
          <img
            src="/placeholder.svg?height=400&width=600"
            alt="SIPEDES Illustration"
            className="w-full max-w-md rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
