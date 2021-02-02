import React from "react";
import PropTypes from "prop-types";
import "./ChatView.css";
function ChatView(props) {
  return (
    <div className="chatView">
      <div className="chatView__date">
        <span>NOVEMBER 27</span>
      </div>
    </div>
  );
}

ChatView.propTypes = {};

export default ChatView;
