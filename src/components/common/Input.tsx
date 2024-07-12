import React, { useState } from "react";
import { InputProps } from "../../types/components";
import "../../styles/components/_input.scss";

const Input: React.FC<InputProps> = ({
  type,
  value,
  name,
  onChange,
  icon,
  placeholder,
  options,
  label,
  spanClass,
  height,
  width,
  fontFamily,
  fontSize,
  marginBottom,
  color,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const syntheticEvent = {
      target: {
        name: name,
        value: e.target.value,
      },
    } as React.ChangeEvent<HTMLInputElement>;

    onChange(syntheticEvent);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputStyle = {
    height: height || "5rem",
    width: width || "100%",
    fontFamily: fontFamily || "inherit",
    fontSize: fontSize || "1.4rem",
    color: color || "",
  };

  const inputMargin = {
    marginBottom: marginBottom || "2.5rem",
  };

  const renderInput = () => {
    switch (type) {
      case "password":
        return (
          <div className="input-wrapper" style={inputStyle}>
            <input
              type={showPassword ? "text" : "password"}
              name={name}
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
          <select value={value} onChange={handleChange} style={inputStyle}>
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case "date":
        return (
          <input
            type="date"
            value={value}
            onChange={handleChange}
            style={inputStyle}
          />
        );
      default:
        return (
          <div className="input-wrapper" style={inputStyle}>
            <input
              type="text"
              value={value}
              onChange={handleChange}
              placeholder={placeholder}
            />
            {icon && (
              <span className={spanClass}>
                <img src={icon} alt="icon" />
              </span>
            )}
          </div>
        );
    }
  };

  return (
    <div className="input-container" style={inputMargin}>
      {label && <label>{label}</label>}
      {renderInput()}
    </div>
  );
};

export default Input;
