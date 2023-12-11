import React from "react";
import "./Events.css";
import AllEvents from "./All Events/AllEvents";
import EventLandingPage from "./Events Landing Page/EventLandingPage";
function Events() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <div className="Events">
      <EventLandingPage />
      <h1 className="our-event-heading">GLIMPSE OF OUR ICEBREAKING EVENTS</h1>
      <AllEvents />
    </div>
  );
}

export default Events;
