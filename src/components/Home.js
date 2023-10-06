import React from "react";

function Home() {
  return (
    // <--Home page details-->
    <div className="home_header d-flex justify-content-center" id="home">
      <div className="caption-header">
        {/* <div className="home-hd">Welcome!</div> */}
        <h2>
        Hi,I am 
          &nbsp;<span className="name-hd">SHAMSHATH BEGUM</span>
        </h2>
        <h4 className="stack-hd">A MERN STACK DEVELOPER WITH PASSION FOR <br/>LEARNING AND CREATING.</h4>
        <a href="#contact">
          <button className="button">
            <span className="button_lg">
              <span className="button_sl"></span>
              <span className="button_text">Hire Me</span>
            </span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Home;