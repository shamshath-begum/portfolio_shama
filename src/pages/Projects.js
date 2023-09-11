import React from "react";
import ProjectItem from "../components/ProjectItem";

import "../pages/Project.css";
import { ProjectList } from "../helpers/ProjectList";

function Projects() {
  return (
    <>
      <div className="projects">
        <h1>My Personal Projects</h1>
        <div className="projectList">
          {ProjectList.map((e, idx) => {
            return <ProjectItem name={e.name} image={e.image} id={idx} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;