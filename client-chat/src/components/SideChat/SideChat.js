import React from "react";
import PropTypes from "prop-types";
import "./SideChat.css";
import ChatHeader from "../ChatHeader/ChatHeader";
import ChatView from "../ChatView/ChatView";
import Message from "../Message/Message";
import AttachmentRoundedIcon from "@material-ui/icons/AttachmentRounded";

import SendRoundedIcon from "@material-ui/icons/SendRounded";
function SideChat(props) {
  return (
    <div className="sideChat">
      <div className="sideChat__header">
        <ChatHeader />
      </div>
      <div className="sideChat__message">
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <div className="sidechat__input">
        <AttachmentRoundedIcon fontSize="small"></AttachmentRoundedIcon>
        <form>
          <input
            type="text"
            placeholder="Type a messegae."
            rows="5"
            cols="40"
          />

          <SendRoundedIcon fontSize="small">
            <button type="submit" className="sidechat__btnSend"></button>
          </SendRoundedIcon>
        </form>
      </div>
    </div>
  );
}

SideChat.propTypes = {};

export default SideChat;
