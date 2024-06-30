import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages/_login.scss";
import { lendsqr, pablo } from "../assets/images";
import Input from "../components/common/Input";
import Button from "../components/common/Button";

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault;
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-img-container">
        <img src={lendsqr} alt="lendsqr logo" className="lendsqr-logo" />
        <img
          src={pablo}
          alt="pablo"
          // className="pablo"
          // style={{ background: "#545F7D05" }}
        />
      </div>
      <div className="login-form">
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>
        <Input
          name="email"
          placeholder="Email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <Input
          name="password"
          placeholder="Password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <span>Forgot PASSWORD?</span>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          log in
        </Button>
      </div>
    </div>
  );
};

export default Login;
