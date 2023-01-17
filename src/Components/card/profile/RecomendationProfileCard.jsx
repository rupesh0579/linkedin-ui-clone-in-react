import React from "react";
import "./styles.css";

function RecomendationProfileCard({ profile }) {
  //   console.log("rupesh", dp1);
  return (
    <div>
      <div className="profileimage">
        <img src={profile.path} alt="pic" />
      </div>
      <div className="profileitem">
        <strong>{profile.name}</strong>
        <small>{profile.designation}</small>
      </div>
      <div className="add">
        <i className="fa-solid fa-circle-plus" />
      </div>
    </div>
  );
}

export default RecomendationProfileCard;
