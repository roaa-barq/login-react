import React, { useState, useEffect, useMemo, useContext } from "react";
import "./LoginStyle.css";
import { useNavigate } from "react-router-dom";
import { createContext } from "react";
import { EmailContext } from "./Context";

export const LoginPage = () => {
  const [email, setEmail] = useContext(EmailContext);
  const [pass, setPass] = useState("");
  const [enable, setEnable] = useState(true);

  const handleEmail = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
    console.log("-" + email);
  };

  const handlePass = (event) => {
    setPass(event.target.value);
    console.log(event.target.value);
    console.log(pass);
  };

  useEffect(() => {
    if (email.includes("@") && pass.length >= 6) {
      setEnable(false);
    } else setEnable(true);
  }, [pass, email]);

  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("+" + email);
    navigate("/home");
  };
  return (
    <form onSubmit={handleSubmit} className="loginPage">
      <div className="compDiv">
        <h1>Login</h1>

        <input
          className="field"
          placeholder="name@example.com"
          onChange={handleEmail}
          value={email}
        />
        <input
          className="field"
          placeholder="******"
          onChange={handlePass}
          value={pass}
          type="password"
        />
        <button className="logButton" disabled={enable}>
          Login
        </button>
      </div>
      <img className="login" src="/login.jpg"></img>
    </form>
  );
};
