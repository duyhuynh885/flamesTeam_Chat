import React from "react";
import PropTypes from "prop-types";
import "./Text.css";
function Text({ text }) {
  return <p className="textChat">{text}</p>;
}

Text.propTypes = {
  text: PropTypes.string,
};

Text.defaultPropTypes = {
  text: "",
};
export default Text;
