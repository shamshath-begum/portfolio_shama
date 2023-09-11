import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id }) {
  let navigate = useNavigate();
  return (
    <>
      <div className="projectItem " onClick={() => navigate(`/project/${id}`)}>
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <div className="links"></div>
        <h1>{name}</h1>
      </div>
    </>
  );
}

export default ProjectItem;