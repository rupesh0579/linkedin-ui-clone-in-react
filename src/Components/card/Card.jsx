import React from "react";
import { office, dp1 } from "../../assests";

const Card = () => {
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
        <img src={dp1} alt="profilePic" />
        <strong>James Smith</strong>
      </div>
      <p className="content">
        Fronted Web Depveloper:Front-end web development, also known as
        client-side development is the practice of producing HTML, CSS and
        JavaScript for a website so that a user can see and interact with them
        directly.
      </p>
      <div className="main_image">
        <img src={office} alt="officeImg" />
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
