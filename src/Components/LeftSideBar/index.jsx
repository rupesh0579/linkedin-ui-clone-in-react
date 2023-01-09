import React, { Fragment } from "react";
import "./style.css";
import { profile } from "../../assests";

const LeftSideBar = () => {
  return (
    <Fragment>
      <div className="sidebar">
        <div className="profile_img">
          <img src={profile} alt="profilePic" />
        </div>
        <div className="profile">
          <strong>Rupesh Kumar</strong>
          <small>Front End Developer</small>
        </div>
        <div className="view">
          <div className="statistics">
            <i className="fa-regular fa-file-word" />
            <p>Your statistics</p>
          </div>
          <div className="item">
            <i className="fa-solid fa-bookmark" />
            <p>Saved items</p>
          </div>
          <p className="profile_view">237 Profile views</p>
        </div>
        <div className="sidebar_icon">
          <div className="group">
            <i className="fa-sharp fa-solid fa-user-group" />
            <p>Groups</p>
          </div>
          <div className="hastag">
            <i className="fa-solid fa-hashtag" />
            <p>Hastags</p>
          </div>
          <div className="page">
            <i className="fa-regular fa-file-word" />
            <p>My pages</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LeftSideBar;
