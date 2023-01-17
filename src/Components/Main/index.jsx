import React from "react";
import "./style.css";
import Card from "./card";

const Main = () => {
  return (
    <div className="container2">
      <div className="container_two">
        <input type="search" placeholder="Write a post" />
        <div className="main_media">
          <div>
            <i className="fa-solid fa-image" />
          </div>
          <div>
            <i className="fa-sharp fa-solid fa-video" />
          </div>
          <div>
            <i className="fa-solid fa-image" />
          </div>
          <div>
            <i className="fa-solid fa-image" />
          </div>
          <div>
            <p className="text">write a article</p>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------ */}
      <div className="main_container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Main;
