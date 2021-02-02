import React from "react";
import PropTypes from "prop-types";
import SideBar from "../../components/SideBar/SideBar";
import SideChat from "../../components/SideChat/SideChat";
import "./MainPage.css";
function MainPage(props) {
  return (
    <div className="mainPage">
      {/* SideBar 25% */}
      <SideBar />
      {/* SideChat 75% */}
      <SideChat />
    </div>
  );
}

MainPage.propTypes = {};

export default MainPage;
