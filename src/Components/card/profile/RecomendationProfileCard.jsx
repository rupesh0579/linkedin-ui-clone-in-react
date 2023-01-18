import React from "react";
import "./styles.css";

function RecomendationProfileCard({ profile }) {
  function showprofile() {
    console.log("profile open successfully");
  }
  //   console.log("rupesh", dp1);
  return (
    <div>
      <div className="profileimage">
        <img src={profile.image} alt="pic" />
      </div>
      <div className="profileitem">
        <strong>{profile.name}</strong>
        <small>{profile.designation}</small>
      </div>
      <div className="add" onClick={showprofile}>
        <i className="fa-solid fa-circle-plus" />
      </div>
    </div>
  );
}

export default RecomendationProfileCard;
