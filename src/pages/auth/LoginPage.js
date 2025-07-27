"use client";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/card/Card";
import PasswordInput from "../../components/passwordInput/PasswordInput";
import { validateEmail, showToast } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "../../redux/auth/authSlice";
import { ThreeDots } from "react-loader-spinner"; // Import spinner

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return showToast("Please fill in all fields", "error");
    }

    if (!validateEmail(email)) {
      return showToast("Please enter a valid email", "error");
    }

    dispatch(loginStart());
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (email === "test@example.com" && password === "password123") {
        dispatch(
          loginSuccess({ user: { email, role: "warga" }, token: "mock_token" })
        );
        showToast("Login successful!", "success");
        navigate("/dashboard"); // Redirect to dashboard after successful login
      } else {
        dispatch(loginFailure("Invalid credentials"));
        showToast("Invalid email or password", "error");
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
      showToast("An error occurred during login", "error");
    }
  };

  return (
    <div className="auth-container">
      <Card className="auth-form-card">
        <h2 className="auth-form-title">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="auth-form-input"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <PasswordInput
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="auth-submit-button flex items-center justify-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <ThreeDots
                height="20"
                width="20"
                radius="9"
                color="#ffffff"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            ) : (
              "Login"
            )}
          </button>
        </form>
        <div className="auth-register-link">
          <p>Don't have an account?</p>
          <Link to="/register">Register</Link>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
