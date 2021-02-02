import React from "react";
import PropTypes from "prop-types";
import "./LoginPage.css";
import Signup from "../../components/Signup/Signup";
import Signin from "./../../components/Signin/Signin";
import ForgetPassword from "./../../components/ForgetPassword/ForgetPassword";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
function LoginPage(props) {
  return (
    <div className="loginPage">
      <div className="loginPage__container">
        <div className="loginPage__wrap">
          <div className="loginPage__img">
            <img
              className="loginPage__logo"
              src={process.env.PUBLIC_URL + "/logo.png"}
              alt="logo"
            />
          </div>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact render={(props) => <Signin {...props} />} />

              <Route
                path="/signup"
                exact
                render={(props) => <Signup {...props} />}
              />
              <Route
                path="/forgetPassword"
                exact
                render={(props) => <ForgetPassword {...props} />}
              />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

LoginPage.propTypes = {};

export default LoginPage;
