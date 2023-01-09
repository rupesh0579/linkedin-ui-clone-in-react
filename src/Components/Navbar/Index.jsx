import React, { Fragment } from "react";
import "./style.css";

const Navbar = () => {
  return (
    <Fragment>
      <nav>
        <div className="navbar">
          <div className="left">
            <div className="logo">
              <i className="fa-brands fa-linkedin" />
            </div>
            <div className="input">
              <i className="fa-solid fa-magnifying-glass" />
              <input type="search" placeholder="search" />
            </div>
          </div>
          <div className="right">
            <div className="home">
              <i style={{ color: "black" }} className="fa-solid fa-house" />
              <h6>Feed</h6>
            </div>
            <div className="network">
              <i className="fa-sharp fa-solid fa-user-group" />
              <h6>Network</h6>
            </div>
            <div className="jobs">
              <i className="fa-solid fa-suitcase" />
              <h6>Jobs</h6>
            </div>
            <div className="message">
              <i className="fa-regular fa-message" />
              <h6>Messages</h6>
            </div>
            <div className="notification">
              <i className="fa-solid fa-bell" />
              <h6>Notifications</h6>
            </div>
            <div className="me">
              <i className="fa-solid fa-user" />
              <h6>Me</h6>
              <i className="fa-solid fa-chevron-down" />
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
