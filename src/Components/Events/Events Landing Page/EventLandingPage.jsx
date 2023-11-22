import React from "react";
import "./EventLandingPage.css";
function EventLandingPage() {
  return (
    <div className="EventLandingPage">
      <div className="EventLandingPageLeft">
        <h1>Explore, Develop,Thrive</h1>
        <p>
          The chapter excels in crafting outstanding events – from workshops to
          webinars and intra-college activities. We foster exploration and skill
          development in blockchain technology, empowering students to thrive in
          this innovative landscape.
        </p>
      </div>
      <div className="EventLandingPageRight">
        <div className="event-landing-page-vector"></div>
        <div className="event-landing-page-img"></div>
      </div>
    </div>
  );
}

export default EventLandingPage;
