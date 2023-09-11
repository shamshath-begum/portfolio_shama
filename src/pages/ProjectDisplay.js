import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "./projectdisplay.css";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function ProjectDisplay() {
  let { id } = useParams();
  let project = ProjectList[id];
  return (
    <>
      <div className="project">
        <h1>{project.name}</h1>
        <img src={project.image} alt="project_image" />
        <div className="links" style={{ marginTop: 20 }}>
          <p style={{ fontSize: 15 }}>
            <b>GitHub</b>:{project.frontend_url}
          </p>
          <p style={{ fontSize: 15 }}>
            <b>Netlify</b>:{project.Netlify_url}
          </p>

          {/* <Nav.Item>
            <a
              href="https://github.com/shamshath-begum/crud_app.git"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <b>GitHub</b>:{project.frontend_url}
            </a>
          </Nav.Item>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Nav.Item>
            <a
              href="https://sweet-kheer-8d44fe.netlify.app/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <b>Netlify</b>:{project.Netlify_url}
            </a>
          </Nav.Item> */}
        </div>
        <p className="skill">
          <b>Skills</b> : {project.skills}
        </p>
      </div>
    </>
  );
}

export default ProjectDisplay;