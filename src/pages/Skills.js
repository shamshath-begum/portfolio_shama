import React from "react";
import "./skill.css";

function Skills() {
  return (
    <>
      <div className="skills" style={{ marginTop: 20, marginBottom: 20 }}>
        <h1>SKILLS</h1>
        <ol style={{ marginTop: 50 }}>
          <li className="front-end">
            <h2>FRONT-END :</h2>
            <span>
              HTML,CSS,JavaScript,ReactJs,Redux,Bootstrap,ReactBootstrap
            </span>
          </li>
          <li className="front-end">
            <h2>BACK-END :</h2>
            <span>MySQL,MongoDB,NodeJS</span>
          </li>
        </ol>
      </div>
    </>
  );
}

export default Skills;