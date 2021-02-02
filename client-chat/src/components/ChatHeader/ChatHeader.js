import React from "react";
import PropTypes from "prop-types";
import "./ChatHeader.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CallIcon from "@material-ui/icons/Call";
import VideocamIcon from "@material-ui/icons/Videocam";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import { Avatar } from "@material-ui/core";

function ChatHeader(props) {
  return (
    <div className="chatHeader">
      <div className="chatHeader__info">
        <Avatar src="https://cdn.vnlife.org/img/2020/5/9/f0d807975977410c194ef5eed529ab72.jpg" />
        <h3>Tokuda</h3>
      </div>
      <div className="chatHeader__func">
        <CallIcon fontSize="small" />
        <VideocamIcon fontSize="small" />
        <MoreHorizOutlinedIcon fontSize="small" />
      </div>
    </div>
  );
}

ChatHeader.propTypes = {};

export default ChatHeader;
