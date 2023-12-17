import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import LandingPage from "./LandingPage/LandingPage";
import AboutUs from "./AboutUs/AboutUs";
import Domain from "./Domains/Domain";
import RecentEvents from "./RecentEvents/RecentEvents";
import FAQ from "./FAQ/FAQ";
import { Helmet } from "react-helmet-async";

function Home() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <>
      <Helmet>
        <title>HOME | BLOCKCHAIN RCOEM CHAPTER</title>
        <meta
          name="description"
          content="Visit the official website of Blockchain RCOEM Chapter (BRC), your gateway to decentralized development and blockchain programming at RCOEM"
        />
        <meta property="og:title" content="HOME | BLOCKCHAIN RCOEM CHAPTER" />
        <meta
          property="og:description"
          content="Visit the official website of Blockchain RCOEM Chapter (BRC), your gateway to decentralized development and blockchain programming at RCOEM"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://blockchain-rcoem-chapter.vercel.app/static/media/brc-logo.afe4cca69f17ea1bd713da3bd05654ab.svg"
        />
        <meta
          property="og:url"
          content="https://blockchain-rcoem-chapter.vercel.app/"
        />
        <link
          rel="cononical"
          href="https://blockchain-rcoem-chapter.vercel.app/"
        />
      </Helmet>
      <div className="Home">
        <LandingPage />
        <AboutUs />
        <h1 className="our-home-heading">OUR DOMAINS</h1>
        <Domain />
        <Link to="/team">
          <button className="our-home-btn">
            MEET OUR TEAM <i className="fa-solid fa-people-group "></i>
          </button>
        </Link>
        <h1 className="our-home-heading">UPCOMING EVENTS</h1>
        <RecentEvents />
        <Link to="/events">
          <button className="our-home-btn">
            MORE EVENTS <i class="fa-solid fa-calendar-check "></i>
          </button>
        </Link>
        <h1 className="our-home-heading">Frequently Asked Questions</h1>
        <FAQ />
      </div>
    </>
  );
}

export default Home;
