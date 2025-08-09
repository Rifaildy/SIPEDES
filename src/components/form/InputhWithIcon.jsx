// src/components/form/InputWithIcon.jsx
import React from "react";

const InputWithIcon = ({
  icon: Icon,
  type = "text",
  value,
  onChange,
  placeholder,
  name,
  id,
  required = false,
}) => {
  return (
    <div className="relative flex items-center">
      <Icon className="absolute left-3 text-gray-400 h-5 w-5 pointer-events-none" />
      <input
        type={type}
        id={id || name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="form-input pl-12 w-full"
      />
    </div>
  );
};

export default InputWithIcon;
