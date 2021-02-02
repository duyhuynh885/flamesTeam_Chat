import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Signup.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Signup(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    cfPassword: "",
  });
  const { username, email, password, cfPassword } = formData;

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      ...formData,
      username: "",
      email: "",
      password: "",
      cfPassword: "",
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (username && email && password) {
      if (password === cfPassword) {
        axios
          .post(`http://localhost:8000/register`, {
            username,
            email,
            password: password,
          })
          .then((res) => {
            resetForm();
            console.log(res.data);
            toast.error("Sign Up Success");
          })
          .catch((err) => {
            resetForm();
            toast.error(err.response.data.errors);
          });
      } else {
        toast.error("Passwords don't matches");
      }
    } else {
      toast.error("Please fill all fields");
    }
  };

  return (
    <div className="signup">
      <ToastContainer />
      <h1 className="signup__title">Signup</h1>
      <form className="signup__form" onSubmit={handleOnSubmit}>
        <div className="signup__wrap">
          <input
            className="signup__input"
            type="text"
            placeholder="Full Name"
            name="username"
            value={username}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="signup__wrap">
          <input
            className="signup__input"
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="signup__wrap">
          <input
            className="signup__input"
            placeholder="Password"
            onChange={handleOnChange}
            name="password"
            value={password}
            type="password"
            required
          />
        </div>
        <div className="signup__wrap">
          <input
            className="signup__input"
            onChange={handleOnChange}
            placeholder="Confirm Password"
            name="cfPassword"
            value={cfPassword}
            type="password"
            required
          />
        </div>
        <div className="signup__wrapBtn">
          <button className="signup__btn" type="submit">
            Signup Account
          </button>
        </div>
      </form>
      <div className="signup__text2">
        <a className="signin__link" href="/">
          Have an account? Login
        </a>
      </div>
    </div>
  );
}

Signup.propTypes = {};

export default Signup;
