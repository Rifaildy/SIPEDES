"use client";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  LogIn,
  UserPlus,
  Home,
  Info,
  FileText,
  Users,
  Bell,
  LogOut,
  LayoutDashboard,
} from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/auth/authSlice";
import { showToast } from "../../utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    showToast("Anda telah berhasil logout!", "success");
    navigate("/login");
    setIsOpen(false);
  };

  const getDashboardLink = () => {
    if (!user) return "/login";
    switch (user.role) {
      case "dukuh":
        return "/dashboard/dukuh";
      case "rt":
        return "/dashboard/rt";
      case "warga":
        return "/dashboard/warga";
      default:
        return "/dashboard";
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/LogoSipedes.jpg"
            alt="SIPEDES Logo"
            className="h-10 w-10 "
          />
          <span className="text-2xl font-bold text-green-700">SIPEDES</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-green-700 font-medium flex items-center gap-1"
          >
            <Home size={18} /> Beranda
          </Link>
          <Link
            to="/layanan"
            className="text-gray-600 hover:text-green-700 font-medium flex items-center gap-1"
          >
            <FileText size={18} /> Layanan
          </Link>
          <Link
            to="/pengumuman"
            className="text-gray-600 hover:text-green-700 font-medium flex items-center gap-1"
          >
            <Bell size={18} /> Pengumuman
          </Link>
          <Link
            to="/lapor"
            className="text-gray-600 hover:text-green-700 font-medium flex items-center gap-1"
          >
            <Users size={18} /> Lapor
          </Link>
          <Link
            to="/tentang"
            className="text-gray-600 hover:text-green-700 font-medium flex items-center gap-1"
          >
            <Info size={18} /> Tentang
          </Link>

          {isLoggedIn ? (
            <>
              <Link
                to={getDashboardLink()}
                className="btn-secondary flex items-center gap-1"
              >
                <LayoutDashboard size={18} /> Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="btn-primary flex items-center gap-1"
              >
                <LogOut size={18} /> Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn-secondary flex items-center gap-1"
              >
                <LogIn size={18} /> Login
              </Link>
              <Link
                to="/register"
                className="btn-primary flex items-center gap-1"
              >
                <UserPlus size={18} /> Register
              </Link>
            </>
          )}
        </nav>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-green-700 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg pb-4">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link
              onClick={toggleMenu}
              to="/"
              className="text-gray-700 hover:text-green-700 font-medium flex items-center gap-2"
            >
              <Home size={20} /> Beranda
            </Link>
            <Link
              onClick={toggleMenu}
              to="/layanan"
              className="text-gray-700 hover:text-green-700 font-medium flex items-center gap-2"
            >
              <FileText size={20} /> Layanan
            </Link>
            <Link
              onClick={toggleMenu}
              to="/pengumuman"
              className="text-gray-700 hover:text-green-700 font-medium flex items-center gap-2"
            >
              <Bell size={20} /> Pengumuman
            </Link>
            <Link
              onClick={toggleMenu}
              to="/lapor"
              className="text-gray-700 hover:text-green-700 font-medium flex items-center gap-2"
            >
              <Users size={20} /> Lapor
            </Link>
            <Link
              onClick={toggleMenu}
              to="/tentang"
              className="text-gray-700 hover:text-green-700 font-medium flex items-center gap-2"
            >
              <Info size={20} /> Tentang
            </Link>

            {isLoggedIn ? (
              <>
                <Link
                  onClick={toggleMenu}
                  to={getDashboardLink()}
                  className="btn-secondary w-auto flex items-center justify-center gap-2"
                >
                  <LayoutDashboard size={20} /> Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="btn-primary w-auto flex items-center justify-center gap-2"
                >
                  <LogOut size={20} /> Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  onClick={toggleMenu}
                  to="/login"
                  className="btn-secondary w-auto flex items-center justify-center gap-2 rounded"
                >
                  <LogIn size={20} /> Login
                </Link>
                <Link
                  onClick={toggleMenu}
                  to="/register"
                  className="btn-primary w-auto flex items-center justify-center gap-2 rounded"
                >
                  <UserPlus size={20} /> Register
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
