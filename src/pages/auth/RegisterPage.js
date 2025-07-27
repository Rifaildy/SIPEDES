"use client";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Lock, Eye, EyeOff, Mail, Phone, MapPin } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import { useNotification } from "../../contexts/NotificationContext";
import Footer from "../../components/layout/Footer";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    nik: "",
    alamat: "",
    rt_id: "",
  });

  const { register } = useAuth();
  const { showSuccess, showError } = useNotification();
  const navigate = useNavigate();

  const rtOptions = [
    { value: "RT001", label: "RT 001" },
    { value: "RT002", label: "RT 002" },
    { value: "RT003", label: "RT 003" },
    { value: "RT004", label: "RT 004" },
    { value: "RT005", label: "RT 005" },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (formData.password !== formData.confirmPassword) {
      showError("Password dan konfirmasi password tidak sama");
      return;
    }

    if (formData.password.length < 6) {
      showError("Password minimal 6 karakter");
      return;
    }

    setLoading(true);
    try {
      await register(formData);
      showSuccess("Pendaftaran berhasil! Selamat datang di SIPEDES");
      navigate("/dashboard");
    } catch (error) {
      showError(error.message || "Terjadi kesalahan saat mendaftar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-green-800">SIPEDES</h1>
              <p className="text-sm text-green-600">Sistem Pelayanan Desa</p>
            </div>
          </Link>
          <h2 className="text-2xl font-bold text-green-800">
            Daftar Akun Baru
          </h2>
          <p className="text-green-600 mt-2">
            Bergabunglah dengan SIPEDES untuk mengakses layanan digital
          </p>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-semibold text-green-800 mb-4">
                Informasi Pribadi
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-green-800 mb-2"
                  >
                    Nama Lengkap *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-green-500" />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input pl-10"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                </div>

                {/* NIK */}
                <div>
                  <label
                    htmlFor="nik"
                    className="block text-sm font-medium text-green-800 mb-2"
                  >
                    NIK *
                  </label>
                  <input
                    id="nik"
                    name="nik"
                    type="text"
                    required
                    value={formData.nik}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Nomor Induk Kependudukan"
                    maxLength="16"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-green-800 mb-2"
                  >
                    Nomor Telepon *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-green-500" />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input pl-10"
                      placeholder="081234567890"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-green-800 mb-2"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-green-500" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input pl-10"
                      placeholder="nama@email.com"
                    />
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <label
                  htmlFor="alamat"
                  className="block text-sm font-medium text-green-800 mb-2"
                >
                  Alamat Lengkap *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-green-500" />
                  <textarea
                    id="alamat"
                    name="alamat"
                    required
                    value={formData.alamat}
                    onChange={handleInputChange}
                    className="form-input pl-10 min-h-[80px] resize-none"
                    placeholder="Masukkan alamat lengkap"
                  />
                </div>
              </div>

              {/* RT Selection */}
              <div>
                <label
                  htmlFor="rt_id"
                  className="block text-sm font-medium text-green-800 mb-2"
                >
                  RT *
                </label>
                <select
                  id="rt_id"
                  name="rt_id"
                  required
                  value={formData.rt_id}
                  onChange={handleInputChange}
                  className="form-input"
                >
                  <option value="">Pilih RT</option>
                  {rtOptions.map((rt) => (
                    <option key={rt.value} value={rt.value}>
                      {rt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Account Security */}
            <div>
              <h3 className="text-lg font-semibold text-green-800 mb-4">
                Keamanan Akun
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-green-800 mb-2"
                  >
                    Password *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-green-500" />
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                      className="form-input pl-10 pr-10"
                      placeholder="Minimal 6 karakter"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3 text-green-500 hover:text-green-700"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-green-800 mb-2"
                  >
                    Konfirmasi Password *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-green-500" />
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      required
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="form-input pl-10 pr-10"
                      placeholder="Ulangi password"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3 text-green-500 hover:text-green-700"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start space-x-2">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-green-300 rounded"
              />
              <label htmlFor="terms" className="text-sm text-green-700">
                Saya menyetujui{" "}
                <Link
                  to="/terms"
                  className="text-green-600 hover:text-green-500 underline"
                >
                  Syarat & Ketentuan
                </Link>{" "}
                dan{" "}
                <Link
                  to="/privacy"
                  className="text-green-600 hover:text-green-500 underline"
                >
                  Kebijakan Privasi
                </Link>{" "}
                SIPEDES
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full flex items-center justify-center"
            >
              {loading ? (
                <>
                  <div className="spinner mr-2"></div>
                  Mendaftar...
                </>
              ) : (
                "Daftar Sekarang"
              )}
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-green-600">
              Sudah punya akun?{" "}
              <Link
                to="/login"
                className="font-medium text-green-600 hover:text-green-500"
              >
                Masuk di sini
              </Link>
            </p>
          </div>
        </div>

        {/* Info Card */}
        <div className="mt-6 bg-green-100 rounded-lg p-4">
          <h3 className="text-sm font-medium text-green-800 mb-2">
            Informasi Pendaftaran:
          </h3>
          <ul className="text-xs text-green-700 space-y-1">
            <li>
              • Data yang Anda masukkan akan diverifikasi oleh RT setempat
            </li>
            <li>
              • Akun akan aktif setelah verifikasi selesai (maksimal 2x24 jam)
            </li>
            <li>• Pastikan data yang dimasukkan sesuai dengan KTP</li>
            <li>• Hubungi RT jika ada kendala dalam proses verifikasi</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;
