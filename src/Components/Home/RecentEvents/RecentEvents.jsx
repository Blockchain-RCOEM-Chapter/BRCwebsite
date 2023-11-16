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
        </div>
      </div>
      <div id="event2">
        <div className="event-details">
          <h2>{Data["events"]["event2"][0]}</h2>
          <p>{Data["events"]["event2"][1]}</p>
        </div>
        <div className="event-img2"></div>
      </div>
    </div>
  );
}

export default RecentEvents;
