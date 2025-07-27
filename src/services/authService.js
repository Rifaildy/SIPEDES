import axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("sipedes_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  async login(credentials) {
    try {
      // For demo purposes, simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock response - replace with actual API call
      if (
        credentials.phone === "081234567890" &&
        credentials.password === "password123"
      ) {
        return {
          user: {
            id: "1",
            name: "John Doe",
            phone: "081234567890",
            email: "john@example.com",
            role: "warga",
            rt_id: "RT001",
            padukuhan_id: "PAD001",
          },
          token: "mock-jwt-token",
        };
      } else {
        throw new Error("Nomor telepon atau password salah");
      }
    } catch (error) {
      throw error;
    }
  },

  async register(userData) {
    try {
      // For demo purposes, simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Mock response - replace with actual API call
      return {
        user: {
          id: Date.now().toString(),
          name: userData.name,
          phone: userData.phone,
          email: userData.email,
          role: "warga",
          rt_id: userData.rt_id,
          padukuhan_id: "PAD001",
        },
        token: "mock-jwt-token-" + Date.now(),
      };
    } catch (error) {
      throw error;
    }
  },

  async verifyToken(token) {
    try {
      // For demo purposes, return mock user data
      const savedUser = localStorage.getItem("sipedes_user");
      if (savedUser) {
        return JSON.parse(savedUser);
      }
      throw new Error("Invalid token");
    } catch (error) {
      throw error;
    }
  },

  async logout() {
    // In real app, call API to invalidate token
    return Promise.resolve();
  },
};
