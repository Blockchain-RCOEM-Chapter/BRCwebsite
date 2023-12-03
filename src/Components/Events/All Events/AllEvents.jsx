import React, { useState } from "react";
import "./AllEvents.css";
import Data from "./data.json";

function AllEvents() {
  const [isPrevious, setisPrevious] = useState(true);
  const generateEventsCards = () => {
    return Data[`${!isPrevious ? "upcomingEvents" : "previousEvents"}`].map(
      (details, index) => (
        <div key={index} className="one-event-card">
          <img src={details["img-source"]} alt="" />
          <h2>{details["title"]}</h2>
          <p className="event-date">
            <i
              className="fa-regular fa-calendar"
              style={{ color: "#ffffff" }}
            ></i>
            {details["date"]}
          </p>
          <p className="on-off-mode">
            {" "}
            <i
              className="fa-solid fa-location-dot"
              style={{ color: "#ffffff" }}
            ></i>
            {details["mode"]}
          </p>
          <a href={details["instaLink"]} target="_blank" rel="noreferrer">
            <button className="more-details-btn">View More</button>
          </a>
        </div>
      )
    );
  };

  return (
    <div className="AllEvents">
      <div className="events-nav">
        <div
          className="previous-events"
          style={
            isPrevious
              ? { backgroundColor: "#713ca0" }
              : { backgroundColor: "#341b4b" }
          }
          onClick={() => {
            if (!isPrevious) {
              setisPrevious(!isPrevious);
            }
          }}
        >
          Previous Events
        </div>
        <div
          className="upcoming-events"
          style={
            isPrevious
              ? { backgroundColor: "#341b4b" }
              : { backgroundColor: "#713ca0" }
          }
          onClick={() => {
            if (isPrevious) {
              setisPrevious(!isPrevious);
            }
          }}
        >
          Upcoming Events
        </div>
      </div>
      {generateEventsCards()}
      <div className="reach-out-us">
        <div className="reach-out-us-text">
          <h1>REACH OUT TO US</h1>
          <p>
            Join us as we redefine boundaries, inspire innovation, and create a
            community of trailblazers in the ever-evolving world of blockchain
            technology.
          </p>
          <div>
            <div className="reach-out-us-btn">
              Submit Quiery{" "}
              <i
                className="fa-solid fa-arrow-up-long"
                style={{ color: "#ffffff" }}
              ></i>
            </div>
            <div className="reach-out-us-btn">
              Conatct Event Team{" "}
              <i
                className="fa-solid fa-arrow-up-long"
                style={{ color: "#ffffff" }}
              ></i>
            </div>
          </div>
        </div>
        <div className="reach-out-us-img"></div>
      </div>
    </div>
  );
}

export default AllEvents;
