import React from "react";
import Instagram from "../Asset/img/instagram.png";
import Github from "../Asset/img/github.png";
import linkedin from "../Asset/img/linkedin.png";
import { CodeUrl } from "./CodeUrl";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2rsec3f",
        "template_epgwtu8",
        form.current,
        "tqSwoSHcBfRmquLbc"
      )
      .then(
        (result) => {
          if (result.text) {
            toast.success("Email sent successfully!!!");
            e.target.reset();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    //  <--Contact page details-->

    <div className="container-fluid pb-5 pt-1" id="contact">
      <div className="text-center contact-hd">Contact</div>
      <div className=" contact-info">
        <div className="contact-details col-lg-4">
          <h4 className="color-blue p-2">Contact Detail's</h4>
          <div className="mobile-details">
            <span className="color-green">Mobile:</span>
            <br />
            +91 9080376729
          </div>
          <div className="mail-details">
            <span className="color-green">Mail:</span>
            <br />
            smilewithvishnu@gmail.com
          </div>
        </div>
        {/* <--Media link details-->  */}
        <div className="social-media col-md-6 col-lg-3 ">
          <h4 className="color-blue">Get in touch</h4>
          <div className="media-link">
            <a href={CodeUrl.githubUrl} target={CodeUrl.blank}>
              <img src={Github} className="img-details" alt="" />
            </a>
          </div>
        </div>
      </div>

      {/* contact form */}
      <div className="contact-form">
        <h3 className="text-white text-center">Contact Me</h3>
        <form ref={form} onSubmit={sendEmail} className="colorful-form">
          <div className="form-group">
            <label className="form-label" for="name">
              Name:
            </label>
            <input
              required=""
              placeholder="Enter your name"
              className="form-input"
              type="text"
              name="user_name"
            />
          </div>
          <div className="form-group">
            <label className="form-label" for="email">
              Email:
            </label>
            <input
              required=""
              placeholder="Enter your email"
              className="form-input"
              name="user_email"
              id="email"
              type="email"
            />
          </div>
          <div className="form-group">
            <label className="form-label" for="message">
              Message:
            </label>
            <textarea
              required=""
              placeholder="Enter your message"
              className="form-input"
              name="message"
              id="message"
            ></textarea>
          </div>
          <button className="form-button" value="Send" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;