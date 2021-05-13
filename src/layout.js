import React, { Component, useState } from "react";
import "./layout.scss";

const Layout = (props) => {
  const sidenavItems = ["Build", "Test", "Deploy", "Analytics", "Manage"];

  const [close, Setclose] = useState(true);

  return (
    <div className="conatiner">
      <div className="top_bar">
        <div className="title">Sample App</div>
        <div className="profile">AP</div>
      </div>
      <div className="body_conatiner">
        <div className="sidenav_cont">
          <div className="sidenav" style={{ left: close ? "-100%" : "0px" }}>
            {sidenavItems.map((item, i) => (
              <div className="side_nav_item" key={i}>
                {item}
              </div>
            ))}
          </div>
          <div
            className="slider"
            onClick={() => Setclose(!close)}
            style={{ left: close ? "0px" : "" }}
          >
            <span>{close ? "Open" : "Close"}</span>
          </div>
        </div>
        <div className="tree_conatiner">{props.children}</div>
        <div className="rightside_nav">
          <div className="Question_mark">?</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
