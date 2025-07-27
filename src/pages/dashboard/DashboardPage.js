"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { showToast } from "../../utils";
import { ThreeDots } from "react-loader-spinner"; // Import ThreeDots component

const DashboardPage = () => {
  const navigate = useNavigate();
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isLoggedIn) {
      showToast("Anda harus login untuk mengakses dashboard.", "error");
      navigate("/login");
      return;
    }

    if (user) {
      switch (user.role) {
        case "dukuh":
          navigate("/dashboard/dukuh");
          break;
        case "rt":
          navigate("/dashboard/rt");
          break;
        case "warga":
          navigate("/dashboard/warga");
          break;
        default:
          showToast("Peran pengguna tidak dikenal.", "error");
          navigate("/");
      }
    }
  }, [isLoggedIn, user, navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Memuat Dashboard...
          </h1>
          <p className="text-gray-600">
            Anda akan diarahkan ke dashboard yang sesuai.
          </p>
          <ThreeDots
            visible={true}
            height="40"
            width="80"
            color="#16a34a"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{ justifyContent: "center", marginTop: "20px" }}
            wrapperClass=""
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;
