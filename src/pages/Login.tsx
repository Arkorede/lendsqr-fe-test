import React, { useState } from "react";
import "../styles/pages/login.scss";
import { lendsqr, pablo } from "../assets/images";
import Input from "../components/common/Input";
import Button from "../components/common/Button";

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
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

  return (
    <div className="login-page">
      <div className="login-img-container">
        <img src={lendsqr} width={174} height={36} alt="lendsqr logo" />
        <img
          src={pablo}
          width={600}
          height={338}
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
          name="email"
          placeholder="Password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <span>Forgot PASSWORD?</span>
        <Button variant="primary" type="submit">
          log in
        </Button>
      </div>
    </div>
  );
};

export default Login;
