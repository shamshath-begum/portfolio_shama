import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Education() {
  return (
    <>
    <div className="about_header container-fluid py-5" id="Education">
      <h2 className="d-flex justify-content-center about-title my-5">Education</h2>
      &nbsp; &nbsp;
      <div style={{ overflow: "auto" }}>
        <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="1996-2000"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            // <i className="fas-fa-solid fa-graduation-cap"/>
          >
            <h6 className="vertical-timeline-element-title">
              BE: Jerusalem College Of Engg.,TamilNadu.
            </h6>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2000-2001"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            // <i className="fas-fa-solid fa-graduation-cap"/>
          >
            <h6 className="vertical-timeline-element-title">
              Worked as a Lecturer in Khaja Bande Nawaz College Of
              Engg.,Karnataka.
            </h6>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2000-2001"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            // <i className="fas-fa-solid fa-graduation-cap"/>
          >
            <h6 className="vertical-timeline-element-title">
              Worked as a Lecturer in Vel Multimedia College Of Engg.,TamilNadu.
            </h6>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2002-2004"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            // <i className="fas-fa-solid fa-graduation-cap"/>
          >
            <h6 className="vertical-timeline-element-title">
              M.Tech(cse):Khaja Bande Nawaz College Of Engg., Karnataka.
            </h6>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      </div>
    </>
  );
}

export default Education;