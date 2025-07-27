"use client";
import { CheckCircle, XCircle, Info, AlertTriangle } from "lucide-react";

const Notification = ({ message, type = "info", onClose }) => {
  let bgColor, textColor, Icon;

  switch (type) {
    case "success":
      bgColor = "bg-green-500";
      textColor = "text-white";
      Icon = CheckCircle;
      break;
    case "error":
      bgColor = "bg-red-500";
      textColor = "text-white";
      Icon = XCircle;
      break;
    case "warn":
      bgColor = "bg-yellow-500";
      textColor = "text-white";
      Icon = AlertTriangle;
      break;
    case "info":
    default:
      bgColor = "bg-blue-500";
      textColor = "text-white";
      Icon = Info;
      break;
  }

  if (!message) return null;

  return (
    <div
      className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg flex items-center space-x-3 ${bgColor} ${textColor} animate-fade-in`}
      role="alert"
    >
      {Icon && <Icon size={24} />}
      <p className="flex-grow">{message}</p>
      <button
        onClick={onClose}
        className="ml-4 text-white opacity-75 hover:opacity-100 focus:outline-none"
      >
        <XCircle size={20} />
      </button>
    </div>
  );
};

export default Notification;
