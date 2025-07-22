import React from "react";

const Education = () => {
  return (
    <div className="container education" id="education">
      <h1>EDUCATION</h1>
      <div className="education-cards">
        {/* Class 10 */}
        <div className="edu-card" data-aos="zoom-in" data-aos-duration="1000">
          <h2>Class 10</h2>
          <p><strong>Board:</strong> West Bengal Board of Secondary Education</p>
          <p><strong>School:</strong> New Alipore Multipurpose School</p>
          <p><strong>Year:</strong> 2020</p>
          <p><strong>Percentage:</strong> 88.28%</p>
        </div>

        {/* Class 12 */}
        <div className="edu-card" data-aos="zoom-in" data-aos-duration="1000">
          <h2>Class 12</h2>
          <p><strong>Board:</strong> West Bengal Council of Higher Secondary Education</p>
          <p><strong>School:</strong> New Alipore Multipurpose School</p>
          <p><strong>Year:</strong> 2022</p>
          <p><strong>Stream:</strong> Computer Science</p>
          <p><strong>Percentage:</strong> 90.80%</p>
        </div>

        {/* B.Tech */}
        <div className="edu-card" data-aos="zoom-in" data-aos-duration="1000">
          <h2>B.Tech</h2>
          <p><strong>College:</strong> Narula Institute of Technology</p>
          <p><strong>University:</strong> MAKAUT</p>
          <p><strong>Department:</strong> Information Technology</p>
          <p><strong>Year:</strong> 2022 - 2026</p>
          <p><strong>CGPA:</strong>8.9 [till 5th sem]</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
