import React from "react";
import leadGen from "../Asset/leadGen.jpg";
import chatApp from "../Asset/chatApp.png";
import crud from "../Asset/crud.png";
import orderManagementSystem from "../Asset/orderManagementSystem.webp";
import { Button } from "react-bootstrap";
import { CodeUrl } from "./CodeUrl";

function Projects() {
  return (
    //  <--Project details-->
    <div className="projects-d py-1" id="Projects">
      <div className="container-fluid">
        <div className="text-center">
          <div className="project-details">Projects</div>
        </div>
        <div className="row post-grid d-flex justify-content-center">
          {/* Lead Gen app */}
          <div className="wrapper mt-5">
            <div className="card">
              <img src={leadGen} alt="leadgenImage" />
              <div class="info">
                <h1>LEAD GEN</h1>
                <p>
                  In this project i have used
                  react-js,node-js,express-js,mongoose and send grid
                </p>
                <hr />
                <a href={CodeUrl.leadGenDeploy} target={CodeUrl.blank}>
                  <Button type="button" variant="danger">
                    Deploy
                  </Button>
                </a>
                <a href={CodeUrl.leadGenFrontendGit} target={CodeUrl.blank}>
                  <Button type="button" variant="danger" className="m-1">
                    Source-frontend
                  </Button>
                </a>
                <a href={CodeUrl.leadGenBackendGit} target={CodeUrl.blank}>
                  <Button type="button" variant="danger">
                    Source-backend
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* CRUD APP*/}
          <div className="wrapper mt-5">
            <div className="card">
              <img src={crud} alt="" />
              <div className="info">
                <h1>CRUD App</h1>
                <p>
                  In this project i have used
                  react-js,node-js,express-js,mongodb and multer
                </p>
                <hr />
                <a href={CodeUrl.crudDeploy} target={CodeUrl.blank}>
                  <Button type="button" variant="danger">
                    Deploy
                  </Button>
                </a>
                <a href={CodeUrl.crudFrontendGit} target={CodeUrl.blank}>
                  <Button type="button" variant="danger" className="m-1">
                    Source-frontend
                  </Button>
                </a>
                <a href={CodeUrl.crudBackendGit} target={CodeUrl.blank}>
                  <Button type="button" variant="danger">
                    Source-backend
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* E-Commerce App */}
          <div className="wrapper mt-5">
            <div className="card">
              <img
                src={orderManagementSystem}
                alt="orderManagementSystemImage"
              />
              <div className="info">
                <h1>E-COM OrderManagementSystem</h1>
                <p>
                  In this project i have used react,nodejs,express,mongodb,redux
                  and stripe-payment gateway
                </p>
                <hr />
                <a href={CodeUrl.ecomDeploy} target={CodeUrl.blank}>
                  <Button type="button" variant="danger">
                    Deploy
                  </Button>
                </a>
                <a href={CodeUrl.ecomFrontendGit} target={CodeUrl.blank}>
                  <Button type="button" variant="danger" className="m-1">
                    Source-frontend
                  </Button>
                </a>
                <a href={CodeUrl.ecomBackendGit} target={CodeUrl.blank}>
                  <Button type="button" variant="danger">
                    Source-backend
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* chat App*/}
          <div className="wrapper mt-5">
            <div className="card">
              <img src={chatApp} alt="" />
              <div className="info">
                <h1>Chat App</h1>
                <p>
                  In this project i have used react-js,node-js,express-js,
                  mongodb, firebase,pusher sand materialUi
                </p>
                <hr />
                <a href={CodeUrl.chatAppDeploy} target={CodeUrl.blank}>
                  <Button type="button" variant="danger">
                    Deploy
                  </Button>
                </a>
                <a href={CodeUrl.chatAppFrontendGit} target={CodeUrl.blank}>
                  <Button type="button" variant="danger" className="m-1">
                    Source-frontend
                  </Button>
                </a>
                <a href={CodeUrl.chatAppBackendGit} target={CodeUrl.blank}>
                  <Button type="button" variant="danger">
                    Source-backend
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
