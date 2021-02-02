import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Signin.css";
import axios from "axios";
function Signin(props) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const handleChange = (e) => {
    console.log(email + " " + password);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      axios
        .post(`http://localhost:8000/login`, {
          email,
          password,
        })
        .then((res) => {
          console.log("" + res.data.token);
        });
    }
  };

  return (
    <div className="signin">
      <h1 className="signin__title">Signin</h1>
      <form className="signin__form" onSubmit={handleSubmit}>
        <div className="signin__wrap">
          <input
            className="signin__input"
            type="text"
            name="email"
            placeholder="Username"
            onChange={handleChange}
            value={email}
            autoFocus
          />
        </div>
        <div className="signin__wrap">
          <input
            className="signin__input"
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
        <div className="signin__wrapBtn">
          <button className="signin__btn" type="submit">
            Signin
          </button>
        </div>
      </form>
      <div className="signin__text1">
        <a className="signin__link" href="/forgetPassword">
          Forgot Password ?
        </a>
      </div>
      <div className="signin__text2">
        <a className="signin__link" href="/signup">
          Create your Account
        </a>
      </div>
    </div>
  );
}

Signin.propTypes = {};

export default Signin;
