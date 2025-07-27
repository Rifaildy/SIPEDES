import Header from "../components/layout/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import News from "../components/News";
import Footer from "../components/layout/Footer";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <News />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
