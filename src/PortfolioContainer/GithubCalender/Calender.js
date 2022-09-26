import React from "react";
// import './Calender.css'
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Calendar() {
    return (
      <>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h1  className="project-heading" style={{ paddingBottom: "0px" }}>
          Days I <strong className="purple">Code</strong>
        </h1>
        <GitHubCalendar
          username="AbhayAg10"
          blockSize={15}
          blockMargin={5}
          color="rgb(10,120,219)"
          fontSize={16}
        />
      </Row>
      </>
    );
  }
  export default Calendar;