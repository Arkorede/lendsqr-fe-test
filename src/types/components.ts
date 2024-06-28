import { IconType } from "react-icons";

interface Option {
  value: string;
  label: string;
}

export interface InputProps {
  type: "text" | "password" | "select" | "date" | "email";
  value: string;
  onChange: (value: string) => void;
  icon?: any;
  placeholder?: string;
  options?: Option[];
  label?: string;
}

type ButtonVariant = "primary" | "success" | "danger";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  children: React.ReactNode;
}
