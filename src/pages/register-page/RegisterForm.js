import React, { useState } from "react";

import User from "../../img/User.svg";
import Password from "../../img/Password.svg";
import Mail from "../../img/Mail.svg";

import instance from "../../axios";

function RegisterForm() {
  const [registerInput, setRegisterInput] = useState({
    name: "",
    email: "",
    password: "",
    token: "",
    id: ""
  });

  const handleChange = e => {
    setRegisterInput({
      ...registerInput,
      [e.target.name]: e.target.value
    });
    console.log(registerInput);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const registerUser = () => {
      // We are using axios for register user
      instance
        .post(`/register`, {
          name: registerInput.name,
          email: registerInput.email,
          password: registerInput.password
        })
        .then(response =>
          setRegisterInput({
            ...registerInput,
            token: response.data.token.token,
            id: response.data.data.id
          })
        );
    };
    registerUser();
  };
  console.log(registerInput);

  return (
    <div className="log-in-form">
      <h1 className="intro-text">Register</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-name">
          <img src={User} alt="user-icon" />
          <input
            className="form-input"
            type="text"
            placeholder="Full Name"
            onChange={handleChange}
            name="name"
            value={registerInput.name}
          />
        </div>
        <div className="form-email">
          <img src={Mail} alt="user-icon" />
          <input
            className="form-input"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={registerInput.email}
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
            value={registerInput.password}
          />
        </div>
        <button type="submit" className="button">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
