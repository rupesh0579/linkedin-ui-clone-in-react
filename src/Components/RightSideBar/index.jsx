import React, { Fragment } from "react";

const RightSidebar = () => {
  return (
    <Fragment>
      <div className="right_side">
        <div>
          <p className="recommended_profile">Recommended profiles</p>
        </div>
        <div className="profile1">
          <img src="assests/dp1.png" alt="" />
        </div>
        <div className="profile_1">
          <strong>Conrad Aiken</strong>
          <small>Marketing Strategist</small>
        </div>
        <div className="add">
          <i className="fa-solid fa-circle-plus" />
        </div>
        <div className="profile1">
          <img src="assests/dp2.png" alt="" />
        </div>
        <div className="profile_1">
          <strong>Norman Anos</strong>
          <small>General Manager</small>
        </div>
        <div className="add">
          <i className="fa-solid fa-circle-plus" />
        </div>
        <div className="profile1">
          <img src="assests/dp3.webp" alt="" />
        </div>
        <div className="profile_1">
          <strong>Beth Andersoi</strong>
          <small> Software Developer</small>
        </div>
        <div className="add">
          <i className="fa-solid fa-circle-plus" />
        </div>
        <div className="profile1">
          <img src="assests/dp2.png" alt="" />
        </div>
        <div className="profile_1">
          <strong>Mayaa Andric</strong>
          <small> UI Designer</small>
        </div>
        <div className="add">
          <i className="fa-solid fa-circle-plus" />
        </div>
      </div>
    </Fragment>
  );
};

export default RightSidebar;
