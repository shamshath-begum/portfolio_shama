import React from "react";
import HTML from "../Asset/html-logo.svg";
import CSS from "../Asset/css-logo.svg";
import JavaScript from "../Asset/javascript-logo.svg";
import Bootstrap from "../Asset/bootstrap-logo.svg";
import mongodb from "../Asset/mongo-db.svg";
import expressLogo from "../Asset/expres-js.png";
import nodejs from "../Asset/node-logo.svg";
import ReactImg from "../Asset/react.svg";
import javaImg from "../Asset/java-logo.png";
import aws from "../Asset/aws.svg";
import github from "../Asset/github-logo.svg";
import tailwind from "../Asset/tailwind css.jpg";
import chakraui from "../Asset/chakra ui.png";
import reactBootstrapLogo from "../Asset/react-bootstrap.png";
import skillBanner from "../Asset/skill-banner.jpg";

function Skill() {
  return (
    // <--Skill page details-->
    <div className=" py-1" id="Skills">
      <div className="">
        <h1 className="d-flex justify-content-center skill-details">
          My Skills
        </h1>

        <div className="skill_content">
          <div className="skill_banner mt-5">
            <img
              className="skill_image"
              src="https://img.freepik.com/free-vector/isometric-programmer-working-desk_52683-17640.jpg?w=740&t=st=1691426234~exp=1691426834~hmac=405afed45004d87604c4b98231c30bd13484bb3df8547eba57d926d114dc59d0"
              alt=""
            />
          </div>

          <div className="skill_body">
            <div className="skill-box my-5 mx-4">
              <img src={HTML} className="skill-img" alt="htmlImage" />
            </div>

            <div className="skill-box my-5 mx-4">
              <img src={CSS} className="skill-img" alt="" />
            </div>

            <div className="skill-box my-5 mx-4">
              <img src={JavaScript} className="skill-img" alt="" />
            </div>

            <div className="skill-box my-5 mx-4">
              <img src={Bootstrap} className="skill-img" alt="" />
            </div>

            <div className="skill-box my-5 mx-4">
              <img src={ReactImg} className="skill-img" alt="" />
            </div>

            <div className="skill-box my-5 mx-4 ">
              <img src={expressLogo} className="skill-img" alt="" />
            </div>

            <div className="skill-box my-5 mx-4">
              <img src={mongodb} className="skill-img" alt="" />
            </div>

            <div className="skill-box my-5 mx-4">
              <img src={nodejs} className="skill-img" alt="" />
            </div>

           

            <div className="skill-box my-5 mx-4">
              <img src={github} className="skill-img" alt="" />
            </div>

            <div className="skill-box my-5 mx-4">
              <img src={tailwind} className="skill-img" alt="" />
            </div>

            <div className="skill-box my-5 mx-4">
              <div className="d-flex justify-content-center ">
                <img src={chakraui} className="skill-img" alt="" />
              </div>
            </div>

            <div className="c  skill-box my-5 mx-4 ">
              <div className="d-flex justify-content-center ">
                <img src={reactBootstrapLogo} className="skill-img" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;