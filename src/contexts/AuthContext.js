"use client";

// This file is no longer actively used for authentication state,
// as Redux is now handling it via src/redux/auth/authSlice.js.
// Keeping it here for reference if you had other specific context logic.

import { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Example: { id: '123', email: 'test@example.com', role: 'warga' }
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    // In a real app, you'd store token in localStorage/sessionStorage
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    // Clear token from storage
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
