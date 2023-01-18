import React from "react";
import "./style.css";
import { office, dp1 } from "../../../assests";
import Card from "../../card/Card";
import mockData from "../../../data/maincard.json";
const image = [dp1];

const Main = () => {
  console.log("dfj", image[1]);
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
      <div className="main_container">
        {mockData.map((item, index) => {
          return (
            <Card
              key={index}
              maincontent={{ ...item, image: image[item.image] }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Main;
