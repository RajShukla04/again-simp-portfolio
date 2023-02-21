import React from "react";
import "./Works.scss";
import Clone from "../../asset/Clone.png";
import work1 from "../../asset/work1.png";
import work2 from "../../asset/work2.jpg";

const Works = () => {
  return (
    <div className="works">
      <div className="project">
        <h1>
          My recent <span>Works</span>
        </h1>
        <p>UI/UX</p>
        <div className="img">
          <div className="image1">
            <img src={Clone} alt="" />
          </div>
          <div className="image2">
            <img src={work1} alt="" />
          </div>
          <div className="image3">
            <img src={work2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
