// import React from "react";
// import skills from "./data/skills.json";

// const Skills = () => {
//   return (
//     <div className="container skills" id="skills">
//       <h1>SKILLS</h1>
//       <div className="items">
//         {skills.map((data, idx) => (
//           <div
//             className="item"
//             key={idx}
//             data-aos="flip-left"
//             data-aos-duration="1000"
//           >
//             <img src={`/assets/skills/${data.imageSrc}`} alt={data.title} />
//             <h3>{data.title}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skills;

import React from "react";

const Skills = () => {
  return (
    <div className="container skills" id="skills">
      <h1>SKILLS</h1>
      <section id="skills">
      
                  <div className="items">
                    <div className="item" data-aos="flip-left" data-aos-duration="1000">
                      <img src="/assets/skills/html.png" alt="HTML" />
                      <h3>HTML</h3>
                    </div>
                    <div className="item" data-aos="flip-left" data-aos-duration="1000">
                      <img src="/assets/skills/css.png" alt="CSS" />
                      <h3>CSS</h3>
                    </div>
                    <div className="item" data-aos="flip-left" data-aos-duration="1000">
                      <img src="/assets/skills/javascript.png" alt="JavaScript" />
                      <h3>JavaScript</h3>
                    </div>
                    <div className="item" data-aos="flip-left" data-aos-duration="1000">
                      <img src="/assets/skills/react.png" alt="React" />
                      <h3>React</h3>
                    </div>
                    <div className="item" data-aos="flip-left" data-aos-duration="1000">
                      <img src="/assets/skills/node.png" alt="Node" />
                      <h3>Node</h3>
                    </div>
                    <div className="item" data-aos="flip-left" data-aos-duration="1000">
                      <img src="/assets/skills/express.png" alt="Express" />
                      <h3>Express</h3>
                    </div>
                    <div className="item" data-aos="flip-left" data-aos-duration="1000">
                      <img src="/assets/skills/socket.png" alt="Node" />
                      <h3>Socket.IO</h3>
                    </div>
                    <div className="item" data-aos="flip-left" data-aos-duration="1000">
                      <img src="/assets/skills/mongodb.png" alt="Node" />
                      <h3>MongoDB</h3>
                    </div>
                    
                    <div className="item" data-aos="flip-left" data-aos-duration="1000">
                      <img src="/assets/skills/Git.png" alt="Node" />
                      <h3>Git</h3>
                    </div>
                    <div className="item" data-aos="flip-left" data-aos-duration="1000">
                      <img src="/assets/skills/SQL.png" alt="Node" />
                      <h3>SQL</h3>
                    </div>
                    {/* Add more skills as needed */}
                  </div>
      </section>
    </div>
  );
};

export default Skills;