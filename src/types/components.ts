interface Option {
  value: string;
  label: string;
}

export interface InputProps {
  type: "text" | "password" | "select" | "date" | "email";
  value: string;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: any;
  placeholder?: string;
  options?: Option[];
  label?: string;
  spanClass?: string;
  height?: string;
  width?: string;
  fontFamily?: string;
  fontSize?: string;
  marginBottom?: string;
  color?: string;
}

type ButtonVariant = "primary" | "success" | "danger";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  children: React.ReactNode;
}

export interface UserCardProps {
  icon: any;
  backgroundColor: string;
  label: string;
  quantity: string | number;
}

export interface FilterFormProps {
  onClose: () => void;
  column: string;
  onFilter: (column: string, value: string) => void;
}
