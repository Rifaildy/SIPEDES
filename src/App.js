import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";

// Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import LayananPage from "./pages/LayananPage";
import PengumumanPage from "./pages/PengumumanPage";
import LaporPage from "./pages/LaporPage";
import TentangPage from "./pages/TentangPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import DukuhDashboard from "./pages/dashboard/DukuhDashboard";
import RTDashboard from "./pages/dashboard/RTDashboard";
import WargaDashboard from "./pages/dashboard/WargaDashboard";
import SuratPage from "./pages/layanan/SuratPage";
import IuranPage from "./pages/layanan/IuranPage";
import KegiatanPage from "./pages/layanan/KegiatanPage";

// Contexts (if still needed, though Redux handles auth/notifications now)
// import { AuthProvider } from "./contexts/AuthContext";
// import { NotificationProvider } from "./contexts/NotificationContext";

function App() {
  return (
    <Provider store={store}>
      {/* <AuthProvider> */}
      {/* <NotificationProvider> */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/layanan" element={<LayananPage />} />
          <Route path="/pengumuman" element={<PengumumanPage />} />
          <Route path="/lapor" element={<LaporPage />} />
          <Route path="/tentang" element={<TentangPage />} />
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard/dukuh" element={<DukuhDashboard />} />
          <Route path="/dashboard/rt" element={<RTDashboard />} />
          <Route path="/dashboard/warga" element={<WargaDashboard />} />
          {/* Layanan Detail Routes */}
          <Route path="/layanan/surat" element={<SuratPage />} />
          <Route path="/layanan/iuran" element={<IuranPage />} />
          <Route path="/layanan/kegiatan" element={<KegiatanPage />} />
          {/* Dynamic route for single announcement (example) */}
          <Route path="/pengumuman/:id" element={<PengumumanPage />} />{" "}
          {/* You might want a dedicated SingleAnnouncementPage */}
        </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* </NotificationProvider> */}
      {/* </AuthProvider> */}
    </Provider>
  );
}

export default App;
