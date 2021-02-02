import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Message.css";
import { Avatar } from "@material-ui/core";

function Message(props) {
  const [displayTime, setDisplayTime] = useState(false);
  const handleDisplayTimestamp = () => {
    if (displayTime) {
      console.log(displayTime);
      return <span className="message__timestamp">12:00</span>;
    }
  };
  return (
    <div className="message">
      <Avatar src="https://cdn.vnlife.org/img/2020/5/9/f0d807975977410c194ef5eed529ab72.jpg" />
      <div className="message__info">
        <p>is my message</p>
      </div>
    </div>
  );
}

Message.propTypes = {};

export default Message;
