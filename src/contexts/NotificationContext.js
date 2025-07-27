"use client";

// This file is no longer actively used for notifications,
// as react-toastify is now handling it via src/utils/index.js.
// Keeping it here for reference if you had other specific context logic.

import { createContext, useState, useContext, useCallback } from "react";

const NotificationContext = createContext(null);

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null); // { message: '...', type: 'success' }

  const showNotification = useCallback(
    (message, type = "info", duration = 3000) => {
      setNotification({ message, type });
      setTimeout(() => {
        setNotification(null);
      }, duration);
    },
    []
  );

  const hideNotification = useCallback(() => {
    setNotification(null);
  }, []);

  return (
    <NotificationContext.Provider
      value={{ notification, showNotification, hideNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);
