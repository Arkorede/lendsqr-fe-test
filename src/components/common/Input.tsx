import React, { useState } from "react";
import { InputProps } from "../../types/components";
import "../../styles/components/_input.scss";

const Input: React.FC<InputProps> = ({
  type,
  value,
  onChange,
  icon,
  placeholder,
  options,
  label,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    onChange(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const renderInput = () => {
    switch (type) {
      case "password":
        return (
          <div className="input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              value={value}
              onChange={handleChange}
              placeholder={placeholder}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="toggle-password"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        );
      case "select":
        return (
          <select value={value} onChange={handleChange}>
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case "date":
        return <input type="date" value={value} onChange={handleChange} />;
      default:
        return (
          <div className="input-wrapper">
            <input
              type="text"
              value={value}
              onChange={handleChange}
              placeholder={placeholder}
            />
            {icon && (
              <span>
                <img src={icon} alt="icon" />
              </span>
            )}
          </div>
        );
    }
  };

  return (
    <div className="input-container">
      {label && <label>{label}</label>}
      {renderInput()}
    </div>
  );
};

export default Input;
