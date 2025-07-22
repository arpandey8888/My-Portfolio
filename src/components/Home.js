import React from "react";
import { ReactTyped } from "react-typed";
import pdf from "../pdf/resume.pdf";
import hero from "./data/hero.json";

const Home = () => (
  <div className="container home" id="home">
    <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
      <h1>
        <ReactTyped
          strings={[
            "Welcome to my profile",
            "My Name is Arpan Dey",
            "I'm a FULL STACK developer",
            "I love to code",
          ]}
          typeSpeed={50}
          backSpeed={50}
          loop
        />
      </h1>
      <a
        href={pdf}
        download="Resume.pdf"
        className="btn btn-outline-warning my-3"
      >
        Download Resume
      </a>
    </div>
    <div className="right">
      <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
        <img src="/assets/arpan1.jpeg" alt="hero" />
      </div>
    </div>
  </div>
);

export default Home;