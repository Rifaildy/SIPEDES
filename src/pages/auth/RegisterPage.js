"use client";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/card/Card";
import PasswordInput from "../../components/passwordInput/PasswordInput";
import { showToast, validateEmail } from "../../utils";
import { ThreeDots } from "react-loader-spinner";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      showToast("Semua field harus diisi.", "error");
      return;
    }

    if (!validateEmail(email)) {
      showToast("Format email tidak valid.", "error");
      return;
    }

    if (password.length < 6) {
      showToast("Password minimal 6 karakter.", "error");
      return;
    }

    if (password !== confirmPassword) {
      showToast("Password dan konfirmasi password tidak cocok.", "error");
      return;
    }

    setIsLoading(true);
    showToast("Mendaftarkan akun...", "info");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    showToast("Pendaftaran berhasil! Silakan login.", "success");
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <Card className="auth-form-card">
        <h2 className="auth-form-title">Daftar Akun SIPEDES</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Nama Lengkap
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="auth-form-input"
              placeholder="Masukkan nama lengkap Anda"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="auth-form-input"
              placeholder="Masukkan email Anda"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <PasswordInput
              placeholder="Masukkan password Anda"
              value={formData.password}
              onChange={handleChange}
              name="password"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Konfirmasi Password
            </label>
            <PasswordInput
              placeholder="Konfirmasi password Anda"
              value={formData.confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
            />
          </div>
          <button
            type="submit"
            className="auth-submit-button"
            disabled={isLoading}
          >
            {isLoading ? (
              <ThreeDots
                visible={true}
                height="20"
                width="40"
                color="#ffffff"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            ) : (
              "Daftar"
            )}
          </button>
        </form>
        <div className="auth-register-link">
          <p>Sudah punya akun?</p>
          <Link to="/login">Login Sekarang</Link>
        </div>
      </Card>
    </div>
  );
};

export default RegisterPage;
