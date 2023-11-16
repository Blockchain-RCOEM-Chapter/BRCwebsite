import React from "react";
import "./Home.css";
import LandingPage from "./LandingPage/LandingPage";
import AboutUs from "./AboutUs/AboutUs";
import Domain from "./Domains/Domain";
import RecentEvents from "./RecentEvents/RecentEvents";
import FAQ from "./FAQ/FAQ";

function Home() {
  return (
    <div className="Home">
      <LandingPage />
      <AboutUs />
      <h1 className="our-home-heading">OUR DOMAINS</h1>
      <Domain />
      <button className="our-home-btn">
        MEET OUR TEAM <i className="fa-solid fa-people-group "></i>
      </button>
      <h1 className="our-home-heading">GLIMPSE OF OUR ICEBREAKING SESSIONS</h1>
      <RecentEvents />
      <button className="our-home-btn">
        MORE EVENTS <i class="fa-solid fa-calendar-check "></i>
      </button>
      <h1 className="our-home-heading">Frequently Asked Questions</h1>
      <FAQ />
    </div>
  );
}

export default Home;
