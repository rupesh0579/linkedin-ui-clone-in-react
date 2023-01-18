import React from "react";
import { office } from "../../assests";

const Card = ({ maincontent }) => {
  return (
    <div className="main_heading">
      <div class="comment">
        <p className="commented">
          <span>Mark Suckerberg</span> commented on this
        </p>
        <i class="fa-solid fa-ellipsis"></i>
      </div>
      <hr />
      <div className="main_content">
        <img src={maincontent.image} alt="pic" />
        <strong>{maincontent.name}</strong>
      </div>
      <p className="content">{maincontent.description}</p>
      <div className="main_image">
        <img src={maincontent.office ? maincontent.office : office} alt="pic" />
        {/* <img src={office} alt="officeImg" /> */}
      </div>
      <div className="like">
        <i style={{ color: "red" }} className="fa-solid fa-heart" />
        <i className="fa-regular fa-comment" />
        <i style={{ color: "grey" }} className="fa-solid fa-share-nodes" />
      </div>
    </div>
  );
};

export default Card;
