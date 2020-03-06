import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./LogInForm.css";

import Mail from "../../img/Mail.svg";
import Password from "../../img/Password.svg";

import instance from "../../axios";

function LogInForm() {
  const [logInInput, setLogInInput] = useState({
    email: "",
    password: ""
  });

  const handleChange = e => {
    setLogInInput({
      ...logInInput,
      [e.target.name]: e.target.value
    });
    console.log(logInInput);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const postUser = () => {
      // We are using axios for token
      instance
        .post(`/login`, {
          email: logInInput.email,
          password: logInInput.password
        })
        .then(response => localStorage.setItem("token", response.data.token));
    };
    postUser();
  };

  return (
    <div className="log-in-form">
      <h1 className="intro-text">Log In</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-email">
          <img src={Mail} alt="user-icon" />
          <input
            className="form-input"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={logInInput.email}
          />
        </div>
        <div className="form-password">
          <img src={Password} alt="password-icon" />
          <input
            className="form-input"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="password"
            value={logInInput.password}
          />
        </div>
        <div className="form-check-box">
          <input type="checkbox" onChange={handleChange} />
          <label>Remember me</label>
        </div>
        <button type="submit" className="button">
          Log In
        </button>
      </form>
      <Link to="" className="router-link">
        <span className="link-log-in">Forgot Your Password?</span>
      </Link>
    </div>
  );
}

export default LogInForm;
