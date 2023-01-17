import React from "react";
import { linkdin } from "../../../assests";

const AdvertisementCard = () => {
  return (
    <div className="container_bottom">
      <p>Promoted</p>
      <div className="linkdin_pic">
        <img src={linkdin} alt="pic" />
      </div>
    </div>
  );
};

export default AdvertisementCard;
