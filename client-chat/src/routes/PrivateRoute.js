import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { isAuth } from "../helpers/auth";

const PrivateRoute =({ component: Component, ...rest }) => {
    <Route
    {...rest}
    render={(props) =>
      isAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      )
    }
  ></Route>
}

PrivateRoute.propTypes = {};

export default PrivateRoute;
