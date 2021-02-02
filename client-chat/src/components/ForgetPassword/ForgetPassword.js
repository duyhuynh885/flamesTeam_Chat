import React from "react";
import PropTypes from "prop-types";
import "./ForgetPassword.css";
function ForgetPassword(props) {
  return (
    <div className="forgetpassword">
      <h1 className="forgetpassword__title">Forget Password</h1>
      <form className="forgetpassword__form">
        <div className="forgetpassword__wrap">
          <input
            className="forgetpassword__input"
            type="email"
            placeholder="Enter email"
            autoFocus
          />
        </div>
        <div className="forgetpassword__wrapBtn">
          <button className="forgetpassword__btn">Summit</button>
        </div>
      </form>
      <div className="signin__text1">
        <a className="signin__link" href="/">
           Back To Login
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

ForgetPassword.propTypes = {};

export default ForgetPassword;
