import React from "react";
import "../styles/pages/login.scss";
import { lendsqr, pablo } from "../assets/images";
import Input from "../components/common/Input";
import Button from "../components/common/Button";

const Login = () => {
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
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <span>Forgot PASSWORD?</span>
        <Button variant="primary" type="submit">
          log in
        </Button>
      </div>
    </div>
  );
};

export default Login;
