"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput = ({
  placeholder,
  value,
  onChange,
  name,
  className = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`relative ${className}`}>
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className="form-input pr-10" // Added pr-10 for icon spacing
      />
      <span
        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-500"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </span>
    </div>
  );
};

export default PasswordInput;
