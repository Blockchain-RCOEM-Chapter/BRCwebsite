import React from "react";
import "./RecentEvents.css";
import Data from "../data.json";
function RecentEvents() {
  return (
    <div className="Home-RecentEvents">
      <div id="event1">
        <div className="event-img1"></div>
        <div className="event-details">
          <h2>{Data["events"]["event1"][0]}</h2>
          <p>{Data["events"]["event1"][1]}</p>
          <button data-label="Register Now" className="rainbow-hover">
            <span className="sp">Register will start soon</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecentEvents;
