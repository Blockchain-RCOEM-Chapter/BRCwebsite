import React from "react";
import "./Events.css";
import AllEvents from "./All Events/AllEvents";
import EventLandingPage from "./Events Landing Page/EventLandingPage";
import { Helmet } from "react-helmet-async";

function Events() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <>
      <Helmet>
        <title>EVENTS | BLOCKCHAIN RBU CHAPTER</title>
        <meta
          name="description"
          content="Discover blockchain at RBU Chapter's event. Explore applications, network with experts, and be part of the revolution. Secure your spot now!"
        />
        <meta property="og:title" content="EVENTS | BLOCKCHAIN RBU CHAPTER" />
        <meta
          property="og:site_name"
          content="EVENTS | BLOCKCHAIN RBU CHAPTER"
        />
        <meta
          property="og:description"
          content="Discover blockchain at RBU Chapter's event. Explore applications, network with experts, and be part of the revolution. Secure your spot now!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://blockchainrcoemchapter.co.in/events"
        />
        <link
          rel="cononical"
          href="https://blockchainrcoemchapter.co.in/events"
        />
      </Helmet>
      <div className="Events">
        <EventLandingPage />
        <h1 className="our-event-heading">GLIMPSE OF OUR ICEBREAKING EVENTS</h1>
        <AllEvents />
      </div>
    </>
  );
}

export default Events;
