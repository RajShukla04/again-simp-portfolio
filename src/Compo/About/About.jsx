import React from "react";
import "./About.scss";
import about from "../../asset/about.svg";

const About = () => {
  return (
    <div id="About" className="about_me">
      <div className="lol"></div>
      <div className="h1">
        <h1>About Me</h1>
      </div>
      <div className="about_flex">
        <div className="about_left">
          Hi there,
          <h4>i'm Raj</h4>
          <p>i'm UX Designer, based in India. i Love solving problems <br /> through simplifying the complexity and combining insightful <br />
          research with intuitive design. i Enjoy every stage of creating digital <br />
          products that are wanted by users, easy to use but also visually top notch.<br />
          My secret obsession is perfecting design system.</p>

          <p className="tex">Lmao ignore my English. 😅</p>
        </div>
        <div className="about_right">
          <img src={about} alt="love you babes" />
        </div>
      </div>
    </div>
  );
};

export default About;
