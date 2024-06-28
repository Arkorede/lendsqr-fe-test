import React from "react";
import "../../styles/components/_button.scss";
import { ButtonProps } from "../../types/components";

const Button: React.FC<ButtonProps> = ({ variant, children, ...props }) => {
  return (
    <button className={`button ${variant}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
