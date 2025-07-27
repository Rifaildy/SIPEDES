"use client";

import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  User,
  Phone,
  Mail,
  LogOut,
  Settings,
  Bell,
} from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/");
    setIsUserMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: "/", label: "Beranda" },
    { path: "/layanan", label: "Layanan" },
    { path: "/pengumuman", label: "Pengumuman" },
    { path: "/lapor", label: "Lapor Warga" },
    { path: "/tentang", label: "Tentang" },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-green-100 sticky top-0 z-40">
      {/* Top Bar */}
      <div className="bg-green-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>(0274) 123-4567</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>info@sipedes.id</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Selamat datang di SIPEDES - Sistem Pelayanan Desa</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-green-800">SIPEDES</h1>
              <p className="text-sm text-green-600">Sistem Pelayanan Desa</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-green-600 border-b-2 border-green-600 pb-1"
                    : "text-green-800 hover:text-green-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* User Menu / Login */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 px-4 py-2 border border-green-600 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                >
                  <User className="w-4 h-4" />
                  <span>{user.name}</span>
                  <Bell className="w-4 h-4" />
                </button>

                {/* User Dropdown */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white border border-green-100 rounded-lg shadow-lg py-2 z-50">
                    <div className="px-4 py-2 border-b border-green-100">
                      <p className="font-medium text-green-800">{user.name}</p>
                      <p className="text-sm text-green-600 capitalize">
                        {user.role}
                      </p>
                    </div>
                    <Link
                      to="/dashboard"
                      className="flex items-center px-4 py-2 text-green-700 hover:bg-green-50"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <Settings className="w-4 h-4 mr-3" />
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-red-50"
                    >
                      <LogOut className="w-4 h-4 mr-3" />
                      Keluar
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex items-center px-4 py-2 border border-green-600 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                >
                  <User className="w-4 h-4 mr-2" />
                  Masuk
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                >
                  Daftar
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-green-800" />
            ) : (
              <Menu className="w-6 h-6 text-green-800" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-100 animate-slide-up">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-green-600"
                      : "text-green-800 hover:text-green-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {user ? (
                <div className="flex flex-col space-y-2 pt-4 border-t border-green-100">
                  <div className="px-2 py-1">
                    <p className="font-medium text-green-800">{user.name}</p>
                    <p className="text-sm text-green-600 capitalize">
                      {user.role}
                    </p>
                  </div>
                  <Link
                    to="/dashboard"
                    className="flex items-center px-2 py-2 text-green-700 hover:bg-green-50 rounded"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Settings className="w-4 h-4 mr-3" />
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center px-2 py-2 text-red-600 hover:bg-red-50 rounded"
                  >
                    <LogOut className="w-4 h-4 mr-3" />
                    Keluar
                  </button>
                </div>
              ) : (
                <div className="flex flex-col space-y-2 pt-4 border-t border-green-100">
                  <Link
                    to="/login"
                    className="flex items-center justify-center px-4 py-2 border border-green-600 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="w-4 h-4 mr-2" />
                    Masuk
                  </Link>
                  <Link
                    to="/register"
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Daftar
                  </Link>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
