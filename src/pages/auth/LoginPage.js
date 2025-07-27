"use client";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "../../redux/auth/authSlice";
import Card from "../../components/card/Card";
import PasswordInput from "../../components/passwordInput/PasswordInput";
import { showToast, validateEmail } from "../../utils";
import { ThreeDots } from "react-loader-spinner";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.auth);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      showToast("Email dan password harus diisi.", "error");
      return;
    }

    if (!validateEmail(email)) {
      showToast("Format email tidak valid.", "error");
      return;
    }

    dispatch(loginStart());
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulate successful login
      if (email === "warga@example.com" && password === "password123") {
        dispatch(loginSuccess({ email, role: "warga" }));
        showToast("Login berhasil sebagai Warga!", "success");
        navigate("/dashboard/warga");
      } else if (email === "rt@example.com" && password === "password123") {
        dispatch(loginSuccess({ email, role: "rt" }));
        showToast("Login berhasil sebagai Ketua RT!", "success");
        navigate("/dashboard/rt");
      } else if (email === "dukuh@example.com" && password === "password123") {
        dispatch(loginSuccess({ email, role: "dukuh" }));
        showToast("Login berhasil sebagai Kepala Dukuh!", "success");
        navigate("/dashboard/dukuh");
      } else {
        dispatch(loginFailure("Email atau password salah."));
        showToast("Email atau password salah.", "error");
      }
    } catch (error) {
      dispatch(loginFailure("Terjadi kesalahan saat login."));
      showToast("Terjadi kesalahan saat login.", "error");
    }
  };

  return (
    <div className="auth-container">
      <Card className="auth-form-card">
        <h2 className="auth-form-title">Login SIPEDES</h2>
        <form onSubmit={handleLogin}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="auth-form-input"
              placeholder="Masukkan email Anda"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <PasswordInput
              placeholder="Masukkan password Anda"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
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
              "Login"
            )}
          </button>
        </form>
        <div className="auth-register-link">
          <p>Belum punya akun?</p>
          <Link to="/register">Daftar Sekarang</Link>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
