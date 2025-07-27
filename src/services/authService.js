// This file would contain actual API calls for authentication.
// For now, it's simulated in LoginPage.js and RegisterPage.js.

const authService = {
  login: async (email, password) => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (email === "warga@example.com" ||
            email === "rt@example.com" ||
            email === "dukuh@example.com") &&
          password === "password123"
        ) {
          const role = email.split("@")[0]; // Extract role from email for simulation
          resolve({
            success: true,
            message: "Login successful",
            user: { email, role },
          });
        } else {
          reject({ success: false, message: "Invalid credentials" });
        }
      }, 1000);
    });
  },

  register: async (name, email, password) => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // In a real app, you'd check if email already exists etc.
        resolve({ success: true, message: "Registration successful" });
      }, 1000);
    });
  },

  logout: async () => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: "Logout successful" });
      }, 500);
    });
  },
};

export default authService;
