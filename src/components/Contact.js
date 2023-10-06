import React from "react";
import Instagram from "../Asset/instagram.png";
import Github from "../Asset/github.png";
import linkedin from "../Asset/linkedin.png";
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
        "service_1ljhhot",
        "template_5spf3dd",
        form.current,
        "f36oyrmh0IFozbInx"
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
          <h4 className="color-blue p-2">Contact Details</h4>
          <div className="mobile-details">
            <span className="color-green">Mobile:</span>
            <br />
            +91 9842393430
          </div>
          <div className="mail-details">
            <span className="color-green">Mail:</span>
            <br />
            sham29.b@gmail.com
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
          <div className="media-link">
            <a href={CodeUrl.linkedinUrl} target={CodeUrl.blank}>
              <img src={linkedin} className="img-details" alt="linkedinImage" />
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