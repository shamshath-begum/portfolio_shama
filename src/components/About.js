import React from "react";
import { CodeUrl } from "./CodeUrl";
import aboutBanner from "../Asset/about-banner.jpg";
import Github from "../Asset/github.png";
import linkedin from "../Asset/linkedin.png";

function About() {
  return (
    //  <--About page details-->
    <div className="about_header container-fluid py-5" id="about">
      <h2 className="d-flex justify-content-center about-title my-5">About</h2>
      &nbsp; &nbsp;
      <div className="about_banner">
        <img
          className="about_image"
          src="https://img.freepik.com/free-vector/programmer-working-isometric-style_52683-16803.jpg?w=740&t=st=1691426102~exp=1691426702~hmac=678381de88fca37691a98df14794e731f2da52893630bec64fa1225ddf9952f0"
          alt=""
        />
      </div>
      <div className="row mx-2 details-me">
        <div className="col-lg-6 offset-lg-0 ">
          <h1 className="fw-white" style={{ color: "white" }}>
           SHAMSHATH BEGUM
          </h1>
          <h5 className="color-blue mb-3">Full Stack Developer</h5>
          <p className="description" style={{ color: "white" }}>
            I have a deep passion for full stack development.Through practice
            and personal projects I honed my skills as a developer.I can easily
            adapt to new things and always ready to take on a challenge
          </p>
          <div className="links">
          <a href={CodeUrl.resume} className="cv"target={CodeUrl.blank}>
            <button className="button">
              <span className="button_lg">
                <span className="button_sl"></span>
                <span class="button_text">Download CV</span>
              </span>
            </button>
          </a> &nbsp; &nbsp;&nbsp; &nbsp;
          <div className="media-link">
            <a href={CodeUrl.githubUrl} target={CodeUrl.blank}>
              <img src={Github} className="img-details" alt="" />
            </a>
          </div> &nbsp; &nbsp;&nbsp; &nbsp;
          <div className="media-link">
            <a href={CodeUrl.linkedinUrl} target={CodeUrl.blank}>
              <img src={linkedin} className="img-details" alt="linkedinImage" />
            </a>
          </div>
          </div>
        </div>
      </div>
      {/* <--Education details-->  */}
      {/* <div className="container pt-5">
        <div className=""> */}
          {/* <div className="col-md-6 color-white">
            <h3 className="fw-normal">Front-end-developer</h3>
            <ul className="timeline mt-4 pr-md-5">
              <li>
                <div className="title">
                  Frontend Developer with proven ability to adapt
                  <br />
                  to new technologies and collaborate effectively
                  <br />
                  with other developers
                </div>
              </li>
            </ul>
          </div> */}

          {/* <--Experience details-->  */}
          {/* <div
            className="col-md-6 wow fadeInRight color-white mt-5"
            data-wow-delay="200ms"
          >
            <h3 className="fw-normal">Full-stack-developer</h3>
            <ul className="timeline mt-4 pr-md-5">
              <li>
                <div className="title">
                  Fullstack Developer who is passionate about going <br />
                  the extra mile to ensure the customer is unquestionably <br />
                  satisfied with the product or service provided.
                </div>
              </li>
            </ul>
          </div> */}
        {/* </div>
      </div> */}
    </div>
  );
}

export default About;