import Header from "../components/layout/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import News from "../components/News";
import Footer from "../components/layout/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <News />
      <Footer />
    </div>
  );
};

export default HomePage;
