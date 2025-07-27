import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";

// Layout Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Pages
import HomePage from "./pages/HomePage";
import LayananPage from "./pages/LayananPage";
import LaporPage from "./pages/LaporPage";
import PengumumanPage from "./pages/PengumumanPage";
import TentangPage from "./pages/TentangPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import SuratPage from "./pages/layanan/SuratPage";
import IuranPage from "./pages/layanan/IuranPage";
import KegiatanPage from "./pages/layanan/KegiatanPage";

// Protected Route Component (simple example)
const ProtectedRoute = ({ children }) => {
  // In a real app, you'd check auth state from Redux or context
  const isAuthenticated = true; // For now, assume always authenticated for development
  return isAuthenticated ? children : <LoginPage />;
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/layanan" element={<LayananPage />} />
            <Route path="/lapor" element={<LaporPage />} />
            <Route path="/pengumuman" element={<PengumumanPage />} />
            <Route path="/tentang" element={<TentangPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Layanan Pages */}
            <Route
              path="/layanan/surat"
              element={
                <ProtectedRoute>
                  <SuratPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/layanan/iuran"
              element={
                <ProtectedRoute>
                  <IuranPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/layanan/kegiatan"
              element={
                <ProtectedRoute>
                  <KegiatanPage />
                </ProtectedRoute>
              }
            />

            {/* Dashboard (will handle role-based routing internally) */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Router>
    </Provider>
  );
}

export default App;
