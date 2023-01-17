import React, { Fragment } from "react";
import { dp1, dp2, dp3, dp4 } from "../../../assests";
import "./style.css";
import Advertisementcard from "./advertisementcard";
import RecomendationProfileCard from "../profile/RecomendationProfileCard";
import mockData from "../../../data/recomendation.json";
const image = [dp1, dp2, dp3, dp4];

const RightSidePanel = () => {
  // console.log("dd", dp1);
  return (
    <Fragment>
      <div className="container3">
        <div className="container_top">
          <div className="right_side">
            <div>
              <p className="recommended_profile">Recommended profiles</p>
            </div>
            {mockData.map((item, index) => (
              <RecomendationProfileCard
                key={index}
                profile={{ ...item, path: image[item.image] }}
              />
            ))}
          </div>
        </div>
        {/* --------------------container bottom------------------------------------ */}

        <Advertisementcard />
      </div>
    </Fragment>
  );
};

export default RightSidePanel;
