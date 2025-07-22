import React from "react";

const Experience = () => {
  return (
    <div className="container ex" id="experience">
      <h1>EXPERIENCE</h1>

      <div  className="ex-items text-center my-5" >

        <div className="experience_image">
          <img src="/assets/fresher.png" alt="Netflix" />
        </div>

        <div className="exright">

          <h2>Pre-Professional | BTech in Information Technology</h2>
          <h4>
            <span style={{ color: "yellowgreen" }}>
              🎓 Narula Institute of Technology (2022–2026){" "}
            </span>
          </h4>
          <h4 style={{ color: "palevioletred" }}>
          <h5 style={{ color: "yellow" }}>
            Proficient in MERN Stack  with hands-on project experience.
          </h5>
          <h5 style={{ color: "yellow" }}>
            Built 2 full-stack apps (e.g., LiveCode Room).
          </h5>
          <h5 style={{ color: "yellow" }}>
              Strong problem-solving skills via 300+ DSA solutions (LeetCode/HackerRank).

          </h5>
            "Not just a fresher—a solutions-driven developer with production-ready skills."
          </h4>
        </div>
      </div>
      {/* Add more experience blocks below if needed */}
    </div>
  );
};

export default Experience;